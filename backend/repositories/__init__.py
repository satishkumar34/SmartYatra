from datetime import date
from sqlalchemy.orm import Session
from sqlalchemy import and_, or_, func

from models import User, Place, Hotel, Booking, BookingStatus
from repositories.base import BaseRepository


# ---------------------------------------------------------------------------
# User Repository
# ---------------------------------------------------------------------------

class UserRepository(BaseRepository[User]):
    def __init__(self, db: Session):
        super().__init__(User, db)

    def get_by_email(self, email: str) -> User | None:
        return self.db.query(User).filter(User.email == email).first()

    def get_paginated(self, skip: int, limit: int, search: str | None = None):
        q = self.db.query(User)
        if search:
            q = q.filter(
                or_(User.full_name.ilike(f"%{search}%"), User.email.ilike(f"%{search}%"))
            )
        total = q.count()
        items = q.order_by(User.created_at.desc()).offset(skip).limit(limit).all()
        return total, items

    def total_count(self) -> int:
        return self.db.query(func.count(User.id)).scalar()


# ---------------------------------------------------------------------------
# Place Repository
# ---------------------------------------------------------------------------

class PlaceRepository(BaseRepository[Place]):
    def __init__(self, db: Session):
        super().__init__(Place, db)

    def get_paginated(
        self,
        skip: int,
        limit: int,
        search: str | None = None,
        country: str | None = None,
        min_rating: float | None = None,
    ):
        q = self.db.query(Place).filter(Place.is_active == True)
        if search:
            q = q.filter(
                or_(Place.name.ilike(f"%{search}%"), Place.location.ilike(f"%{search}%"))
            )
        if country:
            q = q.filter(Place.country.ilike(f"%{country}%"))
        if min_rating is not None:
            q = q.filter(Place.rating >= min_rating)
        total = q.count()
        items = q.order_by(Place.rating.desc()).offset(skip).limit(limit).all()
        return total, items

    def total_count(self) -> int:
        return self.db.query(func.count(Place.id)).filter(Place.is_active == True).scalar()


# ---------------------------------------------------------------------------
# Hotel Repository
# ---------------------------------------------------------------------------

class HotelRepository(BaseRepository[Hotel]):
    def __init__(self, db: Session):
        super().__init__(Hotel, db)

    def get_paginated(
        self,
        skip: int,
        limit: int,
        place_id: int | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        min_rating: float | None = None,
        search: str | None = None,
    ):
        q = self.db.query(Hotel).filter(Hotel.is_active == True)
        if place_id:
            q = q.filter(Hotel.place_id == place_id)
        if min_price is not None:
            q = q.filter(Hotel.price_per_night >= min_price)
        if max_price is not None:
            q = q.filter(Hotel.price_per_night <= max_price)
        if min_rating is not None:
            q = q.filter(Hotel.rating >= min_rating)
        if search:
            q = q.filter(Hotel.name.ilike(f"%{search}%"))
        total = q.count()
        items = q.order_by(Hotel.rating.desc()).offset(skip).limit(limit).all()
        return total, items

    def total_count(self) -> int:
        return self.db.query(func.count(Hotel.id)).filter(Hotel.is_active == True).scalar()


# ---------------------------------------------------------------------------
# Booking Repository
# ---------------------------------------------------------------------------

class BookingRepository(BaseRepository[Booking]):
    def __init__(self, db: Session):
        super().__init__(Booking, db)

    def has_overlap(self, hotel_id: int, check_in: date, check_out: date, exclude_id: int | None = None) -> bool:
        """
        Detects overlapping bookings for a given hotel and date range.
        An overlap exists when: existing.check_in < new.check_out AND existing.check_out > new.check_in
        """
        q = self.db.query(Booking).filter(
            Booking.hotel_id == hotel_id,
            Booking.status.in_([BookingStatus.PENDING, BookingStatus.CONFIRMED]),
            Booking.check_in < check_out,
            Booking.check_out > check_in,
        )
        if exclude_id:
            q = q.filter(Booking.id != exclude_id)
        return q.first() is not None

    def get_user_bookings(self, user_id: int, skip: int, limit: int):
        q = self.db.query(Booking).filter(Booking.user_id == user_id)
        total = q.count()
        items = q.order_by(Booking.created_at.desc()).offset(skip).limit(limit).all()
        return total, items

    def get_all_paginated(self, skip: int, limit: int, status: BookingStatus | None = None):
        q = self.db.query(Booking)
        if status:
            q = q.filter(Booking.status == status)
        total = q.count()
        items = q.order_by(Booking.created_at.desc()).offset(skip).limit(limit).all()
        return total, items

    def total_revenue(self) -> float:
        result = self.db.query(func.sum(Booking.total_price)).filter(
            Booking.status == BookingStatus.CONFIRMED
        ).scalar()
        return float(result or 0)

    def count_by_status(self, status: BookingStatus) -> int:
        return (
            self.db.query(func.count(Booking.id))
            .filter(Booking.status == status)
            .scalar()
        )

    def total_count(self) -> int:
        return self.db.query(func.count(Booking.id)).scalar()
