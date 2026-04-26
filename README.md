# ✈ Voyager — Smart Tourism Platform

A production-grade full-stack Smart Tourism System built with Angular 18 + FastAPI + PostgreSQL.

---

## Architecture

```
smart-tourism/
├── backend/                  # FastAPI application
│   ├── main.py               # App factory, CORS, lifespan
│   ├── config.py             # Pydantic-settings env config
│   ├── database.py           # SQLAlchemy engine + session DI
│   ├── models/               # ORM models (User, Place, Hotel, Booking)
│   ├── schemas/              # Pydantic v2 request/response schemas
│   ├── repositories/         # Data access layer (BaseRepo + domain repos)
│   ├── services/             # Business logic layer
│   ├── routers/              # FastAPI route handlers (6 routers)
│   ├── core/
│   │   ├── security.py       # JWT + bcrypt
│   │   ├── exceptions.py     # Typed HTTP exception hierarchy
│   │   └── dependencies.py   # DI: get_current_user, require_admin
│   ├── alembic/              # Database migrations
│   ├── seed.py               # Sample data loader
│   └── requirements.txt
│
└── frontend/                 # Angular 18 standalone application
    └── src/app/
        ├── core/
        │   ├── models/       # TypeScript interfaces
        │   ├── services/     # API services + Auth + Toast
        │   ├── guards/       # authGuard, adminGuard, guestGuard
        │   └── interceptors/ # JWT HTTP interceptor
        ├── layout/
        │   └── shell/        # Sidebar + Header + Content layout
        ├── features/
        │   ├── auth/         # Login + Register
        │   ├── dashboard/    # User + Admin dashboards
        │   ├── destinations/ # List + Detail
        │   ├── hotels/       # List + Detail
        │   ├── booking/      # Form + My Bookings
        │   └── admin/        # Dashboard + Places + Hotels + Bookings + Users
        └── shared/           # StarRating, Pagination, CardSkeleton, Toast
```

---

## Quick Start

### Option A — Docker (Recommended)

```bash
git clone <repo>
cd smart-tourism
docker compose up --build
```

- **Frontend**: http://localhost:80
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/api/v1/docs

### Option B — Local Development

#### Backend

```bash
cd backend

# 1. Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Configure environment
cp .env.example .env
# Edit .env — set DATABASE_URL and SECRET_KEY

# 4. Run migrations
alembic upgrade head

# 5. Seed sample data
python seed.py

# 6. Start server
uvicorn main:app --reload --port 8000
```

#### Frontend

```bash
cd frontend

npm install
ng serve                  # Dev server on http://localhost:4200
```

---

## Default Credentials (after seed)

| Role  | Email                 | Password     |
|-------|-----------------------|--------------|
| Admin | admin@voyager.com     | Admin@1234   |
| User  | user@voyager.com      | User@1234    |

---

## API Reference

### Authentication
| Method | Endpoint                | Auth     | Description          |
|--------|-------------------------|----------|----------------------|
| POST   | /api/v1/auth/register   | Public   | Register new account |
| POST   | /api/v1/auth/login      | Public   | Login, returns JWT   |
| GET    | /api/v1/auth/me         | Bearer   | Current user profile |

### Destinations (Places)
| Method | Endpoint                | Auth     | Description           |
|--------|-------------------------|----------|-----------------------|
| GET    | /api/v1/places          | Public   | List (search/filter)  |
| GET    | /api/v1/places/:id      | Public   | Get single place      |
| POST   | /api/v1/places          | Admin    | Create destination    |
| PATCH  | /api/v1/places/:id      | Admin    | Update destination    |
| DELETE | /api/v1/places/:id      | Admin    | Delete destination    |

### Hotels
| Method | Endpoint                | Auth     | Description           |
|--------|-------------------------|----------|-----------------------|
| GET    | /api/v1/hotels          | Public   | List (filter by place/price/rating) |
| GET    | /api/v1/hotels/:id      | Public   | Get single hotel      |
| POST   | /api/v1/hotels          | Admin    | Create hotel          |
| PATCH  | /api/v1/hotels/:id      | Admin    | Update hotel          |
| DELETE | /api/v1/hotels/:id      | Admin    | Delete hotel          |

### Bookings
| Method | Endpoint                        | Auth   | Description               |
|--------|---------------------------------|--------|---------------------------|
| POST   | /api/v1/bookings                | User   | Create booking            |
| GET    | /api/v1/bookings/my             | User   | My booking history        |
| GET    | /api/v1/bookings/:id            | User   | Get booking detail        |
| POST   | /api/v1/bookings/:id/cancel     | User   | Cancel booking            |
| GET    | /api/v1/bookings                | Admin  | All bookings (paginated)  |
| PATCH  | /api/v1/bookings/:id/status     | Admin  | Update booking status     |

### Admin
| Method | Endpoint                | Auth  | Description          |
|--------|-------------------------|-------|----------------------|
| GET    | /api/v1/admin/dashboard | Admin | Platform KPI stats   |
| GET    | /api/v1/users           | Admin | List all users       |

---

## Booking Status Lifecycle

```
PENDING → CONFIRMED → COMPLETED
       ↘            ↘
        CANCELLED    CANCELLED
```

- Only `pending` and `confirmed` bookings can be cancelled
- Status transitions are enforced on both frontend and backend
- Overlap detection prevents double-booking of hotels

---

## Security

- Passwords hashed with **bcrypt** (cost factor 12)
- **JWT** tokens — HS256, configurable expiry
- **RBAC** — Admin and User roles enforced at route and service level
- All input validated with **Pydantic v2** (backend) and **Angular Reactive Forms** (frontend)
- Protected routes via functional **Angular Route Guards**
- JWT injected automatically via **HTTP Interceptor**
- 401 responses trigger automatic logout and redirect

---

## Environment Variables

```env
DATABASE_URL=postgresql://user:pass@localhost:5432/smart_tourism
SECRET_KEY=your-minimum-32-character-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
ENVIRONMENT=development
ALLOWED_ORIGINS=http://localhost:4200
```

---

## Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | Angular 18, TypeScript, SCSS  |
| State      | Angular Signals, RxJS         |
| Backend    | FastAPI, Python 3.12          |
| Validation | Pydantic v2                   |
| ORM        | SQLAlchemy 2.0                |
| Database   | PostgreSQL 16                 |
| Auth       | JWT (python-jose) + bcrypt    |
| Migrations | Alembic                       |
| Container  | Docker + Docker Compose       |
| Web Server | Nginx (production)            |
