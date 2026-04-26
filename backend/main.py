import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from config import get_settings
from database import Base, engine
from routers import auth_router, users_router, places_router, hotels_router, bookings_router, admin_router
from routers.health import health_router

settings = get_settings()

logging.basicConfig(
    level=logging.INFO if settings.ENVIRONMENT != "production" else logging.WARNING,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
log = logging.getLogger("voyager")

API_PREFIX = "/api/v1"


@asynccontextmanager
async def lifespan(app: FastAPI):
    log.info("Starting Voyager API (env=%s)", settings.ENVIRONMENT)
    Base.metadata.create_all(bind=engine)
    log.info("Database tables verified")
    yield
    log.info("Voyager API shutdown complete")


app = FastAPI(
    title="Voyager — Smart Tourism API",
    description=(
        "Production-grade REST API for the Voyager Smart Tourism Platform.\n\n"
        "Features: JWT auth, RBAC, destinations, hotels, bookings with overlap detection."
    ),
    version="1.0.0",
    docs_url=f"{API_PREFIX}/docs" if settings.ENVIRONMENT != "production" else None,
    redoc_url=f"{API_PREFIX}/redoc" if settings.ENVIRONMENT != "production" else None,
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    log.exception("Unhandled exception on %s %s", request.method, request.url.path)
    return JSONResponse(
        status_code=500,
        content={"detail": "An unexpected error occurred. Please try again later."},
    )


for router in [auth_router, users_router, places_router, hotels_router, bookings_router, admin_router]:
    app.include_router(router, prefix=API_PREFIX)

app.include_router(health_router)
