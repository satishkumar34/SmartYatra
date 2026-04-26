from __future__ import annotations
from datetime import datetime, date
from enum import Enum as PyEnum

from sqlalchemy import (
    String, Text, Float, Integer, Boolean, DateTime, Date,
    ForeignKey, Enum, UniqueConstraint, CheckConstraint, Index,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


# ---------------------------------------------------------------------------
# Enums
# ---------------------------------------------------------------------------

class UserRole(str, PyEnum):
    ADMIN = "admin"
    USER = "user"

    def __str__(self) -> str:
        return self.value


class BookingStatus(str, PyEnum):
    PENDING = "pending"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"
    COMPLETED = "completed"

    def __str__(self) -> str:
        return self.value


# ---------------------------------------------------------------------------
# User
# ---------------------------------------------------------------------------

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    full_name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    role: Mapped[UserRole] = mapped_column(
        Enum(
            UserRole,
            values_callable=lambda enum: [member.value for member in enum],
            name="userrole",
        ),
        default=UserRole.USER,
        nullable=False,
    )
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    bookings: Mapped[list[Booking]] = relationship("Booking", back_populates="user", cascade="all, delete-orphan")

    def __repr__(self) -> str:
        return f"<User id={self.id} email={self.email} role={self.role}>"


# ---------------------------------------------------------------------------
# Place (Destination)
# ---------------------------------------------------------------------------

class Place(Base):
    __tablename__ = "places"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    location: Mapped[str] = mapped_column(String(200), nullable=False)
    country: Mapped[str] = mapped_column(String(100), nullable=False)
    image_url: Mapped[str | None] = mapped_column(String(500))
    rating: Mapped[float] = mapped_column(Float, default=0.0, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    hotels: Mapped[list[Hotel]] = relationship("Hotel", back_populates="place", cascade="all, delete-orphan")

    __table_args__ = (
        CheckConstraint("rating >= 0 AND rating <= 5", name="ck_place_rating_range"),
        Index("ix_places_country", "country"),
        Index("ix_places_location", "location"),
    )

    def __repr__(self) -> str:
        return f"<Place id={self.id} name={self.name}>"


# ---------------------------------------------------------------------------
# Hotel
# ---------------------------------------------------------------------------

class Hotel(Base):
    __tablename__ = "hotels"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    place_id: Mapped[int] = mapped_column(Integer, ForeignKey("places.id", ondelete="CASCADE"), nullable=False)
    address: Mapped[str] = mapped_column(String(300), nullable=False)
    image_url: Mapped[str | None] = mapped_column(String(500))
    price_per_night: Mapped[float] = mapped_column(Float, nullable=False)
    rating: Mapped[float] = mapped_column(Float, default=0.0, nullable=False)
    total_rooms: Mapped[int] = mapped_column(Integer, nullable=False, default=10)
    amenities: Mapped[str | None] = mapped_column(Text)  # JSON-serialized list stored as text
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    place: Mapped[Place] = relationship("Place", back_populates="hotels")
    bookings: Mapped[list[Booking]] = relationship("Booking", back_populates="hotel", cascade="all, delete-orphan")

    __table_args__ = (
        CheckConstraint("price_per_night > 0", name="ck_hotel_price_positive"),
        CheckConstraint("rating >= 0 AND rating <= 5", name="ck_hotel_rating_range"),
        CheckConstraint("total_rooms > 0", name="ck_hotel_rooms_positive"),
        Index("ix_hotels_place_id", "place_id"),
    )

    def __repr__(self) -> str:
        return f"<Hotel id={self.id} name={self.name} place_id={self.place_id}>"


# ---------------------------------------------------------------------------
# Booking
# ---------------------------------------------------------------------------

class Booking(Base):
    __tablename__ = "bookings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    user_id: Mapped[int] = mapped_column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    hotel_id: Mapped[int] = mapped_column(Integer, ForeignKey("hotels.id", ondelete="CASCADE"), nullable=False)
    check_in: Mapped[date] = mapped_column(Date, nullable=False)
    check_out: Mapped[date] = mapped_column(Date, nullable=False)
    guests: Mapped[int] = mapped_column(Integer, nullable=False, default=1)
    total_price: Mapped[float] = mapped_column(Float, nullable=False)
    status: Mapped[BookingStatus] = mapped_column(
        Enum(
            BookingStatus,
            values_callable=lambda enum: [member.value for member in enum],
            name="bookingstatus",
        ),
        default=BookingStatus.PENDING,
        nullable=False,
    )
    special_requests: Mapped[str | None] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    user: Mapped[User] = relationship("User", back_populates="bookings")
    hotel: Mapped[Hotel] = relationship("Hotel", back_populates="bookings")

    __table_args__ = (
        CheckConstraint("check_out > check_in", name="ck_booking_dates_order"),
        CheckConstraint("guests >= 1", name="ck_booking_guests_positive"),
        CheckConstraint("total_price > 0", name="ck_booking_price_positive"),
        Index("ix_bookings_user_id", "user_id"),
        Index("ix_bookings_hotel_id", "hotel_id"),
        Index("ix_bookings_status", "status"),
        # Composite index for overlap detection queries
        Index("ix_bookings_hotel_dates", "hotel_id", "check_in", "check_out"),
    )

    def __repr__(self) -> str:
        return f"<Booking id={self.id} hotel_id={self.hotel_id} status={self.status}>"
