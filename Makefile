.PHONY: help dev backend frontend db-up db-down migrate seed test lint clean docker-up docker-down

BACKEND_DIR  = backend
FRONTEND_DIR = frontend
PYTHON       = python

# ── Help ─────────────────────────────────────────────────────
help:
	@echo ""
	@echo "  Voyager Smart Tourism — Developer Commands"
	@echo "  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo ""
	@echo "  Local Development:"
	@echo "    make dev          Start backend + frontend concurrently"
	@echo "    make backend      Start FastAPI dev server only"
	@echo "    make frontend     Start Angular dev server only"
	@echo ""
	@echo "  Database:"
	@echo "    make db-up        Start PostgreSQL via Docker"
	@echo "    make db-down      Stop PostgreSQL container"
	@echo "    make migrate      Run Alembic migrations"
	@echo "    make seed         Load sample data"
	@echo "    make migrate-new  Create new migration (name=<desc>)"
	@echo ""
	@echo "  Testing:"
	@echo "    make test         Run full pytest suite"
	@echo "    make test-v       Run pytest with verbose output"
	@echo ""
	@echo "  Quality:"
	@echo "    make lint         Run ruff linter on backend"
	@echo "    make typecheck    Run pyright type checker"
	@echo ""
	@echo "  Docker:"
	@echo "    make docker-up    Build and start all services"
	@echo "    make docker-down  Stop all services"
	@echo "    make docker-logs  Tail all container logs"
	@echo ""
	@echo "  Cleanup:"
	@echo "    make clean        Remove build artifacts"
	@echo ""

# ── Local Development ─────────────────────────────────────────
dev:
	@echo "▶ Starting backend + frontend..."
	@(cd $(BACKEND_DIR) && uvicorn main:app --reload --port 8000) &
	@(cd $(FRONTEND_DIR) && ng serve)

backend:
	cd $(BACKEND_DIR) && uvicorn main:app --reload --port 8000

frontend:
	cd $(FRONTEND_DIR) && ng serve

# ── Database ──────────────────────────────────────────────────
db-up:
	docker run -d --name voyager_db \
		-e POSTGRES_DB=smart_tourism \
		-e POSTGRES_USER=postgres \
		-e POSTGRES_PASSWORD=postgres \
		-p 5432:5432 \
		postgres:16-alpine
	@echo "✓ PostgreSQL running on port 5432"

db-down:
	docker stop voyager_db && docker rm voyager_db

migrate:
	cd $(BACKEND_DIR) && alembic upgrade head

migrate-new:
	cd $(BACKEND_DIR) && alembic revision --autogenerate -m "$(name)"

seed:
	cd $(BACKEND_DIR) && $(PYTHON) seed.py

# ── Testing ───────────────────────────────────────────────────
test:
	cd $(BACKEND_DIR) && pytest

test-v:
	cd $(BACKEND_DIR) && pytest -v --tb=long

# ── Code Quality ──────────────────────────────────────────────
lint:
	cd $(BACKEND_DIR) && ruff check . && ruff format --check .

lint-fix:
	cd $(BACKEND_DIR) && ruff check --fix . && ruff format .

typecheck:
	cd $(BACKEND_DIR) && pyright .

# ── Docker ───────────────────────────────────────────────────
docker-up:
	docker compose up --build -d
	@echo "✓ All services started"
	@echo "  Frontend : http://localhost"
	@echo "  API Docs : http://localhost:8000/api/v1/docs"

docker-down:
	docker compose down

docker-down-v:
	docker compose down -v

docker-logs:
	docker compose logs -f

docker-rebuild:
	docker compose up --build --force-recreate

# ── Cleanup ───────────────────────────────────────────────────
clean:
	find $(BACKEND_DIR) -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find $(BACKEND_DIR) -name "*.pyc" -delete 2>/dev/null || true
	rm -f $(BACKEND_DIR)/test.db
	rm -rf $(FRONTEND_DIR)/dist
	rm -rf $(FRONTEND_DIR)/.angular/cache
	@echo "✓ Cleaned build artifacts"
