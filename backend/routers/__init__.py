from fastapi import APIRouter, Depends, Query, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import Optional

from database import get_db
from core.dependencies import get_current_active_user, require_admin
from models import User, BookingStatus
from schemas import (
    UserRegisterRequest, UserResponse, UserUpdateRequest, PaginatedUserResponse,
    TokenResponse,
    PlaceCreateRequest, PlaceUpdateRequest, PlaceResponse, PaginatedPlaceResponse,
    HotelCreateRequest, HotelUpdateRequest, HotelResponse, PaginatedHotelResponse,
    BookingCreateRequest, BookingStatusUpdateRequest, BookingResponse,
    BookingDetailResponse, PaginatedBookingResponse,
    AdminDashboardStats,
)
from services import (
    AuthService, UserService, PlaceService,
    HotelService, BookingService, AdminService,
)


# ---------------------------------------------------------------------------
# Auth Router
# ---------------------------------------------------------------------------

auth_router = APIRouter(prefix="/auth", tags=["Authentication"])


@auth_router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register(payload: UserRegisterRequest, db: Session = Depends(get_db)):
    return AuthService(db).register(payload)


@auth_router.post("/login", response_model=TokenResponse)
def login(form: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    token = AuthService(db).login(form.username, form.password)
    return TokenResponse(access_token=token)


@auth_router.get("/me", response_model=UserResponse)
def me(current_user: User = Depends(get_current_active_user)):
    return current_user


# ---------------------------------------------------------------------------
# Users Router
# ---------------------------------------------------------------------------

users_router = APIRouter(prefix="/users", tags=["Users"])


@users_router.get("/", response_model=PaginatedUserResponse, dependencies=[Depends(require_admin)])
def list_users(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    search: Optional[str] = Query(None),
    db: Session = Depends(get_db),
):
    return UserService(db).list_users(page, size, search)


@users_router.get("/me/profile", response_model=UserResponse)
def get_profile(current_user: User = Depends(get_current_active_user)):
    return current_user


@users_router.patch("/me/profile", response_model=UserResponse)
def update_profile(
    payload: UserUpdateRequest,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    return UserService(db).update_profile(current_user.id, payload)


@users_router.get("/{user_id}", response_model=UserResponse, dependencies=[Depends(require_admin)])
def get_user(user_id: int, db: Session = Depends(get_db)):
    return UserService(db).get_profile(user_id)


# ---------------------------------------------------------------------------
# Places Router
# ---------------------------------------------------------------------------

places_router = APIRouter(prefix="/places", tags=["Destinations"])


@places_router.get("/", response_model=PaginatedPlaceResponse)
def list_places(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    search: Optional[str] = Query(None),
    country: Optional[str] = Query(None),
    min_rating: Optional[float] = Query(None, ge=0.0, le=5.0),
    db: Session = Depends(get_db),
):
    return PlaceService(db).list(page, size, search, country, min_rating)


@places_router.get("/{place_id}", response_model=PlaceResponse)
def get_place(place_id: int, db: Session = Depends(get_db)):
    return PlaceService(db).get(place_id)


@places_router.post("/", response_model=PlaceResponse, status_code=status.HTTP_201_CREATED,
                    dependencies=[Depends(require_admin)])
def create_place(payload: PlaceCreateRequest, db: Session = Depends(get_db)):
    return PlaceService(db).create(payload)


@places_router.patch("/{place_id}", response_model=PlaceResponse, dependencies=[Depends(require_admin)])
def update_place(place_id: int, payload: PlaceUpdateRequest, db: Session = Depends(get_db)):
    return PlaceService(db).update(place_id, payload)


@places_router.delete("/{place_id}", status_code=status.HTTP_204_NO_CONTENT,
                       dependencies=[Depends(require_admin)])
def delete_place(place_id: int, db: Session = Depends(get_db)):
    PlaceService(db).delete(place_id)


# ---------------------------------------------------------------------------
# Hotels Router
# ---------------------------------------------------------------------------

hotels_router = APIRouter(prefix="/hotels", tags=["Hotels"])


@hotels_router.get("/", response_model=PaginatedHotelResponse)
def list_hotels(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    place_id: Optional[int] = Query(None),
    min_price: Optional[float] = Query(None, ge=0),
    max_price: Optional[float] = Query(None, ge=0),
    min_rating: Optional[float] = Query(None, ge=0.0, le=5.0),
    search: Optional[str] = Query(None),
    db: Session = Depends(get_db),
):
    return HotelService(db).list(page, size, place_id, min_price, max_price, min_rating, search)


@hotels_router.get("/{hotel_id}", response_model=HotelResponse)
def get_hotel(hotel_id: int, db: Session = Depends(get_db)):
    return HotelService(db).get(hotel_id)


@hotels_router.post("/", response_model=HotelResponse, status_code=status.HTTP_201_CREATED,
                    dependencies=[Depends(require_admin)])
def create_hotel(payload: HotelCreateRequest, db: Session = Depends(get_db)):
    return HotelService(db).create(payload)


@hotels_router.patch("/{hotel_id}", response_model=HotelResponse, dependencies=[Depends(require_admin)])
def update_hotel(hotel_id: int, payload: HotelUpdateRequest, db: Session = Depends(get_db)):
    return HotelService(db).update(hotel_id, payload)


@hotels_router.delete("/{hotel_id}", status_code=status.HTTP_204_NO_CONTENT,
                       dependencies=[Depends(require_admin)])
def delete_hotel(hotel_id: int, db: Session = Depends(get_db)):
    HotelService(db).delete(hotel_id)


# ---------------------------------------------------------------------------
# Bookings Router
# ---------------------------------------------------------------------------

bookings_router = APIRouter(prefix="/bookings", tags=["Bookings"])


@bookings_router.post("/", response_model=BookingResponse, status_code=status.HTTP_201_CREATED)
def create_booking(
    payload: BookingCreateRequest,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    return BookingService(db).create(current_user.id, payload)


@bookings_router.get("/my", response_model=PaginatedBookingResponse)
def my_bookings(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    return BookingService(db).list_user_bookings(current_user.id, page, size)


@bookings_router.get("/", response_model=PaginatedBookingResponse, dependencies=[Depends(require_admin)])
def list_all_bookings(
    page: int = Query(1, ge=1),
    size: int = Query(20, ge=1, le=100),
    booking_status: Optional[BookingStatus] = Query(None),
    db: Session = Depends(get_db),
):
    return BookingService(db).list_all(page, size, booking_status)


@bookings_router.get("/{booking_id}", response_model=BookingDetailResponse)
def get_booking(
    booking_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    svc = BookingService(db)
    from models import UserRole
    if current_user.role == UserRole.ADMIN:
        return svc.get(booking_id)
    return svc.get_user_booking(booking_id, current_user.id)


@bookings_router.patch("/{booking_id}/status", response_model=BookingResponse)
def update_booking_status(
    booking_id: int,
    payload: BookingStatusUpdateRequest,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    return BookingService(db).update_status(booking_id, payload, current_user)


@bookings_router.post("/{booking_id}/cancel", response_model=BookingResponse)
def cancel_booking(
    booking_id: int,
    current_user: User = Depends(get_current_active_user),
    db: Session = Depends(get_db),
):
    return BookingService(db).cancel(booking_id, current_user.id)


# ---------------------------------------------------------------------------
# Admin Router
# ---------------------------------------------------------------------------

admin_router = APIRouter(prefix="/admin", tags=["Admin"], dependencies=[Depends(require_admin)])


@admin_router.get("/dashboard", response_model=AdminDashboardStats)
def dashboard_stats(db: Session = Depends(get_db)):
    return AdminService(db).get_dashboard_stats()
