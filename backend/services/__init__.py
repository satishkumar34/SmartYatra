import json
import math
from datetime import date

from sqlalchemy.orm import Session

from core.security import hash_password, verify_password, create_access_token
from core.exceptions import (
    NotFoundException, ConflictException, UnauthorizedException,
    BadRequestException, BookingConflictException,
)
from models import User, Place, Hotel, Booking, BookingStatus, UserRole
from repositories import (
    UserRepository, PlaceRepository, HotelRepository, BookingRepository
)
from schemas import (
    UserRegisterRequest, UserUpdateRequest,
    PlaceCreateRequest, PlaceUpdateRequest,
    HotelCreateRequest, HotelUpdateRequest,
    BookingCreateRequest, BookingStatusUpdateRequest,
    AdminDashboardStats,
)


def _paginate(total: int, page: int, size: int) -> dict:
    return {
        "total": total,
        "page": page,
        "size": size,
        "pages": math.ceil(total / size) if size else 0,
    }


# ---------------------------------------------------------------------------
# Auth Service
# ---------------------------------------------------------------------------

class AuthService:
    def __init__(self, db: Session):
        self.repo = UserRepository(db)

    def register(self, payload: UserRegisterRequest) -> User:
        if self.repo.get_by_email(payload.email):
            raise ConflictException("An account with this email already exists.")
        user = User(
            full_name=payload.full_name,
            email=payload.email,
            hashed_password=hash_password(payload.password),
            role=UserRole.USER,
        )
        return self.repo.save(user)

    def login(self, email: str, password: str) -> str:
        user = self.repo.get_by_email(email)
        if not user or not verify_password(password, user.hashed_password):
            raise UnauthorizedException("Invalid email or password.")
        if not user.is_active:
            raise UnauthorizedException("Account is deactivated.")
        return create_access_token(subject=user.id, extra_claims={"role": user.role.value})


# ---------------------------------------------------------------------------
# User Service
# ---------------------------------------------------------------------------

class UserService:
    def __init__(self, db: Session):
        self.repo = UserRepository(db)

    def get_profile(self, user_id: int) -> User:
        user = self.repo.get_by_id(user_id)
        if not user:
            raise NotFoundException("User")
        return user

    def update_profile(self, user_id: int, payload: UserUpdateRequest) -> User:
        user = self.get_profile(user_id)
        update_data = payload.model_dump(exclude_unset=True)
        for field, value in update_data.items():
            setattr(user, field, value)
        return self.repo.save(user)

    def list_users(self, page: int, size: int, search: str | None):
        skip = (page - 1) * size
        total, items = self.repo.get_paginated(skip, size, search)
        return {**_paginate(total, page, size), "items": items}


# ---------------------------------------------------------------------------
# Place Service
# ---------------------------------------------------------------------------

class PlaceService:
    def __init__(self, db: Session):
        self.repo = PlaceRepository(db)

    def create(self, payload: PlaceCreateRequest) -> Place:
        place = Place(**payload.model_dump())
        return self.repo.save(place)

    def get(self, place_id: int) -> Place:
        place = self.repo.get_by_id(place_id)
        if not place:
            raise NotFoundException("Place")
        return place

    def list(self, page: int, size: int, search: str | None, country: str | None, min_rating: float | None):
        skip = (page - 1) * size
        total, items = self.repo.get_paginated(skip, size, search, country, min_rating)
        return {**_paginate(total, page, size), "items": items}

    def update(self, place_id: int, payload: PlaceUpdateRequest) -> Place:
        place = self.get(place_id)
        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(place, field, value)
        return self.repo.save(place)

    def delete(self, place_id: int) -> None:
        place = self.get(place_id)
        self.repo.delete(place)


# ---------------------------------------------------------------------------
# Hotel Service
# ---------------------------------------------------------------------------

class HotelService:
    def __init__(self, db: Session):
        self.hotel_repo = HotelRepository(db)
        self.place_repo = PlaceRepository(db)

    def create(self, payload: HotelCreateRequest) -> Hotel:
        if not self.place_repo.get_by_id(payload.place_id):
            raise NotFoundException("Place")
        data = payload.model_dump()
        amenities = data.pop("amenities", None)
        hotel = Hotel(**data, amenities=json.dumps(amenities) if amenities else None)
        return self.hotel_repo.save(hotel)

    def get(self, hotel_id: int) -> Hotel:
        hotel = self.hotel_repo.get_by_id(hotel_id)
        if not hotel:
            raise NotFoundException("Hotel")
        return hotel

    def list(self, page: int, size: int, place_id: int | None, min_price: float | None,
             max_price: float | None, min_rating: float | None, search: str | None):
        skip = (page - 1) * size
        total, items = self.hotel_repo.get_paginated(
            skip, size, place_id, min_price, max_price, min_rating, search
        )
        return {**_paginate(total, page, size), "items": items}

    def update(self, hotel_id: int, payload: HotelUpdateRequest) -> Hotel:
        hotel = self.get(hotel_id)
        data = payload.model_dump(exclude_unset=True)
        amenities = data.pop("amenities", None)
        for field, value in data.items():
            setattr(hotel, field, value)
        if amenities is not None:
            hotel.amenities = json.dumps(amenities)
        return self.hotel_repo.save(hotel)

    def delete(self, hotel_id: int) -> None:
        hotel = self.get(hotel_id)
        self.hotel_repo.delete(hotel)


# ---------------------------------------------------------------------------
# Booking Service
# ---------------------------------------------------------------------------

class BookingService:
    def __init__(self, db: Session):
        self.booking_repo = BookingRepository(db)
        self.hotel_repo = HotelRepository(db)

    def _calculate_total(self, hotel: Hotel, check_in: date, check_out: date, guests: int) -> float:
        nights = (check_out - check_in).days
        return round(hotel.price_per_night * nights * guests, 2)

    def create(self, user_id: int, payload: BookingCreateRequest) -> Booking:
        hotel = self.hotel_repo.get_by_id(payload.hotel_id)
        if not hotel or not hotel.is_active:
            raise NotFoundException("Hotel")

        if self.booking_repo.has_overlap(payload.hotel_id, payload.check_in, payload.check_out):
            raise BookingConflictException()

        total_price = self._calculate_total(
            hotel, payload.check_in, payload.check_out, payload.guests
        )

        booking = Booking(
            user_id=user_id,
            hotel_id=payload.hotel_id,
            check_in=payload.check_in,
            check_out=payload.check_out,
            guests=payload.guests,
            total_price=total_price,
            special_requests=payload.special_requests,
            status=BookingStatus.PENDING,
        )
        return self.booking_repo.save(booking)

    def get(self, booking_id: int) -> Booking:
        booking = self.booking_repo.get_by_id(booking_id)
        if not booking:
            raise NotFoundException("Booking")
        return booking

    def get_user_booking(self, booking_id: int, user_id: int) -> Booking:
        booking = self.get(booking_id)
        if booking.user_id != user_id:
            raise NotFoundException("Booking")
        return booking

    def update_status(self, booking_id: int, payload: BookingStatusUpdateRequest, current_user: User) -> Booking:
        booking = self.get(booking_id)
        if current_user.role != UserRole.ADMIN and booking.user_id != current_user.id:
            raise NotFoundException("Booking")

        allowed_transitions: dict[BookingStatus, list[BookingStatus]] = {
            BookingStatus.PENDING: [BookingStatus.CONFIRMED, BookingStatus.CANCELLED],
            BookingStatus.CONFIRMED: [BookingStatus.COMPLETED, BookingStatus.CANCELLED],
            BookingStatus.CANCELLED: [],
            BookingStatus.COMPLETED: [],
        }
        if payload.status not in allowed_transitions[booking.status]:
            raise BadRequestException(
                f"Cannot transition from '{booking.status}' to '{payload.status}'."
            )
        booking.status = payload.status
        return self.booking_repo.save(booking)

    def list_user_bookings(self, user_id: int, page: int, size: int):
        skip = (page - 1) * size
        total, items = self.booking_repo.get_user_bookings(user_id, skip, size)
        return {**_paginate(total, page, size), "items": items}

    def list_all(self, page: int, size: int, status: BookingStatus | None):
        skip = (page - 1) * size
        total, items = self.booking_repo.get_all_paginated(skip, size, status)
        return {**_paginate(total, page, size), "items": items}

    def cancel(self, booking_id: int, user_id: int) -> Booking:
        booking = self.get_user_booking(booking_id, user_id)
        if booking.status not in [BookingStatus.PENDING, BookingStatus.CONFIRMED]:
            raise BadRequestException("Only pending or confirmed bookings can be cancelled.")
        booking.status = BookingStatus.CANCELLED
        return self.booking_repo.save(booking)


# ---------------------------------------------------------------------------
# Admin Service
# ---------------------------------------------------------------------------

class AdminService:
    def __init__(self, db: Session):
        self.user_repo = UserRepository(db)
        self.place_repo = PlaceRepository(db)
        self.hotel_repo = HotelRepository(db)
        self.booking_repo = BookingRepository(db)

    def get_dashboard_stats(self) -> AdminDashboardStats:
        return AdminDashboardStats(
            total_users=self.user_repo.total_count(),
            total_places=self.place_repo.total_count(),
            total_hotels=self.hotel_repo.total_count(),
            total_bookings=self.booking_repo.total_count(),
            total_revenue=self.booking_repo.total_revenue(),
            pending_bookings=self.booking_repo.count_by_status(BookingStatus.PENDING),
            confirmed_bookings=self.booking_repo.count_by_status(BookingStatus.CONFIRMED),
            cancelled_bookings=self.booking_repo.count_by_status(BookingStatus.CANCELLED),
        )
