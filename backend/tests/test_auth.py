import pytest
from fastapi.testclient import TestClient
from tests.conftest import make_user, get_token, auth_header


class TestRegister:
    def test_register_success(self, client: TestClient, db):
        res = client.post("/api/v1/auth/register", json={
            "full_name": "Jane Doe",
            "email": "jane@example.com",
            "password": "Secure@123",
        })
        assert res.status_code == 201
        body = res.json()
        assert body["email"] == "jane@example.com"
        assert body["role"] == "user"
        assert "hashed_password" not in body

    def test_register_duplicate_email(self, client: TestClient, db):
        payload = {"full_name": "Dup User", "email": "dup@example.com", "password": "Secure@123"}
        client.post("/api/v1/auth/register", json=payload)
        res = client.post("/api/v1/auth/register", json=payload)
        assert res.status_code == 409

    def test_register_weak_password_no_uppercase(self, client: TestClient, db):
        res = client.post("/api/v1/auth/register", json={
            "full_name": "Weak Pass",
            "email": "weak@example.com",
            "password": "alllower1",
        })
        assert res.status_code == 422

    def test_register_weak_password_no_digit(self, client: TestClient, db):
        res = client.post("/api/v1/auth/register", json={
            "full_name": "Weak Pass",
            "email": "weak2@example.com",
            "password": "Alllower",
        })
        assert res.status_code == 422

    def test_register_invalid_email(self, client: TestClient, db):
        res = client.post("/api/v1/auth/register", json={
            "full_name": "Bad Email",
            "email": "not-an-email",
            "password": "Secure@123",
        })
        assert res.status_code == 422


class TestLogin:
    def test_login_success(self, client: TestClient, db):
        make_user(db, email="login@example.com", password="Login@123")
        res = client.post(
            "/api/v1/auth/login",
            data={"username": "login@example.com", "password": "Login@123"},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        assert res.status_code == 200
        assert "access_token" in res.json()
        assert res.json()["token_type"] == "bearer"

    def test_login_wrong_password(self, client: TestClient, db):
        make_user(db, email="wrongpw@example.com", password="Correct@123")
        res = client.post(
            "/api/v1/auth/login",
            data={"username": "wrongpw@example.com", "password": "Wrong@999"},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        assert res.status_code == 401

    def test_login_nonexistent_user(self, client: TestClient, db):
        res = client.post(
            "/api/v1/auth/login",
            data={"username": "nobody@example.com", "password": "Pass@123"},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        assert res.status_code == 401


class TestMe:
    def test_get_me_authenticated(self, client: TestClient, db):
        make_user(db, email="me@example.com", password="Me@12345")
        token = get_token(client, "me@example.com", "Me@12345")
        res = client.get("/api/v1/auth/me", headers=auth_header(token))
        assert res.status_code == 200
        assert res.json()["email"] == "me@example.com"

    def test_get_me_unauthenticated(self, client: TestClient, db):
        res = client.get("/api/v1/auth/me")
        assert res.status_code == 401

    def test_get_me_invalid_token(self, client: TestClient, db):
        res = client.get("/api/v1/auth/me", headers={"Authorization": "Bearer invalid.token.here"})
        assert res.status_code == 401
