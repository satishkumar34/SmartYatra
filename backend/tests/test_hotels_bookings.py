import pytest
from fastapi.testclient import TestClient
from models import UserRole
from tests.conftest import make_user, get_token, auth_header

# ── Helpers ──────────────────────────────────────────────────

def make_place(client, token) -> dict:
    res = client.post("/api/v1/places", json={
        "name": "Test Island", "location": "Sea", "country": "Testland", "rating": 4.5,
    }, headers=auth_header(token))
    assert res.status_code == 201
    return res.json()


def make_hotel(client, token, place_id: int, price: float = 5000) -> dict:
    res = client.post("/api/v1/hotels", json={
        "name": "Test Hotel",
        "place_id": place_id,
        "address": "123 Test St",
        "price_per_night": price,
        "total_rooms": 10,
        "rating": 4.0,
    }, headers=auth_header(token))
    assert res.status_code == 201, res.text
    return res.json()


def make_booking(client, token, hotel_id: int, check_in="2030-06-01", check_out="2030-06-05") -> dict:
    res = client.post("/api/v1/bookings", json={
        "hotel_id": hotel_id,
        "check_in": check_in,
        "check_out": check_out,
        "guests": 2,
    }, headers=auth_header(token))
    return res


# ── Hotel Tests ───────────────────────────────────────────────

class TestHotels:
    def test_create_hotel_requires_valid_place(self, client: TestClient, db):
        make_user(db, email="admin_h1@t.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_h1@t.com", "Admin@123")
        res = client.post("/api/v1/hotels", json={
            "name": "Ghost Hotel", "place_id": 99999,
            "address": "Nowhere", "price_per_night": 1000, "total_rooms": 5,
        }, headers=auth_header(token))
        assert res.status_code == 404

    def test_list_hotels_filter_by_place(self, client: TestClient, db):
        make_user(db, email="admin_h2@t.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_h2@t.com", "Admin@123")
        place = make_place(client, token)
        make_hotel(client, token, place["id"])
        res = client.get(f"/api/v1/hotels?place_id={place['id']}")
        assert res.status_code == 200
        for h in res.json()["items"]:
            assert h["place_id"] == place["id"]

    def test_list_hotels_filter_price_range(self, client: TestClient, db):
        make_user(db, email="admin_h3@t.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_h3@t.com", "Admin@123")
        place = make_place(client, token)
        make_hotel(client, token, place["id"], price=2000)
        make_hotel(client, token, place["id"], price=8000)
        res = client.get("/api/v1/hotels?min_price=1000&max_price=5000")
        assert res.status_code == 200
        for h in res.json()["items"]:
            assert h["price_per_night"] <= 5000

    def test_delete_hotel_user_forbidden(self, client: TestClient, db):
        make_user(db, email="admin_h4@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_h4@t.com", password="User@123")
        admin_tok = get_token(client, "admin_h4@t.com", "Admin@123")
        user_tok  = get_token(client, "user_h4@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])
        res = client.delete(f"/api/v1/hotels/{hotel['id']}", headers=auth_header(user_tok))
        assert res.status_code == 403

    def test_price_must_be_positive(self, client: TestClient, db):
        make_user(db, email="admin_h5@t.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_h5@t.com", "Admin@123")
        place = make_place(client, token)
        res = client.post("/api/v1/hotels", json={
            "name": "Cheap", "place_id": place["id"],
            "address": "St", "price_per_night": -50, "total_rooms": 5,
        }, headers=auth_header(token))
        assert res.status_code == 422


# ── Booking Tests ─────────────────────────────────────────────

class TestBookings:
    def test_create_booking_calculates_price(self, client: TestClient, db):
        make_user(db, email="admin_b1@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b1@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b1@t.com", "Admin@123")
        user_tok  = get_token(client, "user_b1@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"], price=5000)

        res = make_booking(client, user_tok, hotel["id"], "2030-07-01", "2030-07-04")
        assert res.status_code == 201
        body = res.json()
        # 3 nights × ₹5000 = ₹15000
        assert body["total_price"] == 15000.0
        assert body["status"] == "pending"

    def test_booking_overlap_rejected(self, client: TestClient, db):
        make_user(db, email="admin_b2@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b2a@t.com", password="User@123")
        make_user(db, email="user_b2b@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b2@t.com", "Admin@123")
        tok_a     = get_token(client, "user_b2a@t.com", "User@123")
        tok_b     = get_token(client, "user_b2b@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])

        # First booking: Jun 1–5
        r1 = make_booking(client, tok_a, hotel["id"], "2030-08-01", "2030-08-05")
        assert r1.status_code == 201

        # Overlapping booking: Jun 3–7 → must fail
        r2 = make_booking(client, tok_b, hotel["id"], "2030-08-03", "2030-08-07")
        assert r2.status_code == 409

    def test_booking_adjacent_dates_allowed(self, client: TestClient, db):
        """Check-in on the same day another guest checks out — no overlap."""
        make_user(db, email="admin_b3@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b3a@t.com", password="User@123")
        make_user(db, email="user_b3b@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b3@t.com", "Admin@123")
        tok_a     = get_token(client, "user_b3a@t.com", "User@123")
        tok_b     = get_token(client, "user_b3b@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])

        r1 = make_booking(client, tok_a, hotel["id"], "2030-09-01", "2030-09-05")
        assert r1.status_code == 201
        # Next guest checks in exactly when first guest checks out
        r2 = make_booking(client, tok_b, hotel["id"], "2030-09-05", "2030-09-09")
        assert r2.status_code == 201

    def test_checkout_before_checkin_rejected(self, client: TestClient, db):
        make_user(db, email="admin_b4@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b4@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b4@t.com", "Admin@123")
        user_tok  = get_token(client, "user_b4@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])
        res = make_booking(client, user_tok, hotel["id"], "2030-10-10", "2030-10-05")
        assert res.status_code == 422

    def test_cancel_booking(self, client: TestClient, db):
        make_user(db, email="admin_b5@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b5@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b5@t.com", "Admin@123")
        user_tok  = get_token(client, "user_b5@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])

        booking = make_booking(client, user_tok, hotel["id"], "2030-11-01", "2030-11-03")
        assert booking.status_code == 201
        bid = booking.json()["id"]

        res = client.post(f"/api/v1/bookings/{bid}/cancel", headers=auth_header(user_tok))
        assert res.status_code == 200
        assert res.json()["status"] == "cancelled"

    def test_cannot_cancel_cancelled_booking(self, client: TestClient, db):
        make_user(db, email="admin_b6@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b6@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b6@t.com", "Admin@123")
        user_tok  = get_token(client, "user_b6@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])

        booking = make_booking(client, user_tok, hotel["id"], "2030-12-01", "2030-12-04")
        bid = booking.json()["id"]
        client.post(f"/api/v1/bookings/{bid}/cancel", headers=auth_header(user_tok))
        res = client.post(f"/api/v1/bookings/{bid}/cancel", headers=auth_header(user_tok))
        assert res.status_code == 400

    def test_user_cannot_see_others_booking(self, client: TestClient, db):
        make_user(db, email="admin_b7@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b7a@t.com", password="User@123")
        make_user(db, email="user_b7b@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b7@t.com", "Admin@123")
        tok_a     = get_token(client, "user_b7a@t.com", "User@123")
        tok_b     = get_token(client, "user_b7b@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])

        booking = make_booking(client, tok_a, hotel["id"], "2031-01-01", "2031-01-03")
        bid = booking.json()["id"]

        res = client.get(f"/api/v1/bookings/{bid}", headers=auth_header(tok_b))
        assert res.status_code == 404

    def test_admin_status_lifecycle_pending_to_confirmed(self, client: TestClient, db):
        make_user(db, email="admin_b8@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b8@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b8@t.com", "Admin@123")
        user_tok  = get_token(client, "user_b8@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])

        booking = make_booking(client, user_tok, hotel["id"], "2031-02-01", "2031-02-05")
        bid = booking.json()["id"]

        res = client.patch(
            f"/api/v1/bookings/{bid}/status",
            json={"status": "confirmed"},
            headers=auth_header(admin_tok),
        )
        assert res.status_code == 200
        assert res.json()["status"] == "confirmed"

    def test_invalid_status_transition_rejected(self, client: TestClient, db):
        make_user(db, email="admin_b9@t.com", password="Admin@123", role=UserRole.ADMIN)
        make_user(db, email="user_b9@t.com", password="User@123")
        admin_tok = get_token(client, "admin_b9@t.com", "Admin@123")
        user_tok  = get_token(client, "user_b9@t.com", "User@123")
        place = make_place(client, admin_tok)
        hotel = make_hotel(client, admin_tok, place["id"])

        booking = make_booking(client, user_tok, hotel["id"], "2031-03-01", "2031-03-04")
        bid = booking.json()["id"]

        # pending → completed is not a valid transition
        res = client.patch(
            f"/api/v1/bookings/{bid}/status",
            json={"status": "completed"},
            headers=auth_header(admin_tok),
        )
        assert res.status_code == 400
