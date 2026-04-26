import pytest
from fastapi.testclient import TestClient
from models import UserRole
from tests.conftest import make_user, get_token, auth_header


class TestAdminDashboard:
    def test_dashboard_requires_admin(self, client: TestClient, db):
        make_user(db, email="user_adm1@t.com", password="User@123")
        token = get_token(client, "user_adm1@t.com", "User@123")
        res = client.get("/api/v1/admin/dashboard", headers=auth_header(token))
        assert res.status_code == 403

    def test_dashboard_unauthenticated(self, client: TestClient, db):
        res = client.get("/api/v1/admin/dashboard")
        assert res.status_code == 401

    def test_dashboard_returns_stats(self, client: TestClient, db):
        make_user(db, email="admin_adm1@t.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_adm1@t.com", "Admin@123")
        res = client.get("/api/v1/admin/dashboard", headers=auth_header(token))
        assert res.status_code == 200
        body = res.json()
        expected_keys = {
            "total_users", "total_places", "total_hotels",
            "total_bookings", "total_revenue",
            "pending_bookings", "confirmed_bookings", "cancelled_bookings",
        }
        assert expected_keys.issubset(set(body.keys()))
        assert body["total_revenue"] >= 0


class TestAdminUsers:
    def test_list_users_as_admin(self, client: TestClient, db):
        make_user(db, email="admin_usr1@t.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_usr1@t.com", "Admin@123")
        res = client.get("/api/v1/users", headers=auth_header(token))
        assert res.status_code == 200
        body = res.json()
        assert "items" in body
        assert body["total"] >= 1

    def test_list_users_as_regular_user_forbidden(self, client: TestClient, db):
        make_user(db, email="user_usr2@t.com", password="User@123")
        token = get_token(client, "user_usr2@t.com", "User@123")
        res = client.get("/api/v1/users", headers=auth_header(token))
        assert res.status_code == 403

    def test_list_users_search(self, client: TestClient, db):
        make_user(db, email="admin_usr3@t.com", password="Admin@123", role=UserRole.ADMIN)
        token = get_token(client, "admin_usr3@t.com", "Admin@123")
        res = client.get("/api/v1/users?search=admin_usr3", headers=auth_header(token))
        assert res.status_code == 200
        items = res.json()["items"]
        assert any("admin_usr3" in u["email"] for u in items)
