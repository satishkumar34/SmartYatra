import pytest
from fastapi.testclient import TestClient
from models import UserRole
from tests.conftest import make_user, get_token, auth_header

SAMPLE_PLACE = {
    "name": "Santorini",
    "description": "Beautiful Greek island.",
    "location": "Aegean Sea",
    "country": "Greece",
    "rating": 4.9,
}


def create_place(client: TestClient, admin_token: str, payload: dict | None = None) -> dict:
    res = client.post(
        "/api/v1/places",
        json=payload or SAMPLE_PLACE,
        headers=auth_header(admin_token),
    )
    assert res.status_code == 201, res.text
    return res.json()


class TestPlacesList:
    def test_list_places_public(self, client: TestClient, db):
        res = client.get("/api/v1/places")
        assert res.status_code == 200
        body = res.json()
        assert "items" in body
        assert "total" in body
        assert "pages" in body

    def test_list_places_pagination(self, client: TestClient, db):
        res = client.get("/api/v1/places?page=1&size=5")
        assert res.status_code == 200
        assert res.json()["size"] == 5

    def test_list_places_search(self, client: TestClient, db):
        res = client.get("/api/v1/places?search=santorini")
        assert res.status_code == 200

    def test_list_places_filter_country(self, client: TestClient, db):
        res = client.get("/api/v1/places?country=Greece")
        assert res.status_code == 200

    def test_list_places_filter_min_rating(self, client: TestClient, db):
        res = client.get("/api/v1/places?min_rating=4.0")
        assert res.status_code == 200
        for place in res.json()["items"]:
            assert place["rating"] >= 4.0


class TestPlacesCRUD:
    def test_create_place_as_admin(self, client: TestClient, db):
        make_user(db, email="admin_place@test.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_place@test.com", "Admin@123")
        place = create_place(client, token)
        assert place["name"] == SAMPLE_PLACE["name"]
        assert place["country"] == SAMPLE_PLACE["country"]
        assert "id" in place

    def test_create_place_as_user_forbidden(self, client: TestClient, db):
        make_user(db, email="user_place@test.com", password="User@123")
        token = get_token(client, "user_place@test.com", "User@123")
        res = client.post("/api/v1/places", json=SAMPLE_PLACE, headers=auth_header(token))
        assert res.status_code == 403

    def test_create_place_unauthenticated(self, client: TestClient, db):
        res = client.post("/api/v1/places", json=SAMPLE_PLACE)
        assert res.status_code == 401

    def test_get_place_by_id(self, client: TestClient, db):
        make_user(db, email="admin_get@test.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_get@test.com", "Admin@123")
        place = create_place(client, token)
        res = client.get(f"/api/v1/places/{place['id']}")
        assert res.status_code == 200
        assert res.json()["id"] == place["id"]

    def test_get_place_not_found(self, client: TestClient, db):
        res = client.get("/api/v1/places/99999")
        assert res.status_code == 404

    def test_update_place_as_admin(self, client: TestClient, db):
        make_user(db, email="admin_upd@test.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_upd@test.com", "Admin@123")
        place = create_place(client, token)
        res = client.patch(
            f"/api/v1/places/{place['id']}",
            json={"rating": 3.5},
            headers=auth_header(token),
        )
        assert res.status_code == 200
        assert res.json()["rating"] == 3.5

    def test_delete_place_as_admin(self, client: TestClient, db):
        make_user(db, email="admin_del@test.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_del@test.com", "Admin@123")
        place = create_place(client, token)
        res = client.delete(f"/api/v1/places/{place['id']}", headers=auth_header(token))
        assert res.status_code == 204

    def test_rating_validation_out_of_range(self, client: TestClient, db):
        make_user(db, email="admin_val@test.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_val@test.com", "Admin@123")
        res = client.post(
            "/api/v1/places",
            json={**SAMPLE_PLACE, "rating": 6.0},
            headers=auth_header(token),
        )
        assert res.status_code == 422
