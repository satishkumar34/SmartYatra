from __future__ import annotations
from datetime import datetime, date
from typing import Optional

from pydantic import BaseModel, EmailStr, Field, field_validator, model_validator

from models import BookingStatus, UserRole


# ---------------------------------------------------------------------------
# Common
# ---------------------------------------------------------------------------

class PaginatedResponse(BaseModel):
    total: int
    page: int
    size: int
    pages: int


# ---------------------------------------------------------------------------
# Auth Schemas
# ---------------------------------------------------------------------------

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TokenPayload(BaseModel):
    sub: str
    role: str
    exp: int


# ---------------------------------------------------------------------------
# User Schemas
# ---------------------------------------------------------------------------

class UserRegisterRequest(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=128)

    @field_validator("password")
    @classmethod
    def password_complexity(cls, v: str) -> str:
        if not any(c.isupper() for c in v):
            raise ValueError("Password must contain at least one uppercase letter.")
        if not any(c.isdigit() for c in v):
            raise ValueError("Password must contain at least one digit.")
        return v


class UserResponse(BaseModel):
    model_config = {"from_attributes": True}

    id: int
    full_name: str
    email: str
    role: UserRole
    is_active: bool
    created_at: datetime


class UserUpdateRequest(BaseModel):
    full_name: Optional[str] = Field(None, min_length=2, max_length=120)
    is_active: Optional[bool] = None


class PaginatedUserResponse(PaginatedResponse):
    items: list[UserResponse]


# ---------------------------------------------------------------------------
# Place Schemas
# ---------------------------------------------------------------------------

class PlaceCreateRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=200)
    description: Optional[str] = None
    location: str = Field(..., min_length=2, max_length=200)
    country: str = Field(..., min_length=2, max_length=100)
    image_url: Optional[str] = Field(None, max_length=500)
    rating: float = Field(0.0, ge=0.0, le=5.0)


class PlaceUpdateRequest(BaseModel):
    name: Optional[str] = Field(None, min_length=2, max_length=200)
    description: Optional[str] = None
    location: Optional[str] = Field(None, min_length=2, max_length=200)
    country: Optional[str] = Field(None, min_length=2, max_length=100)
    image_url: Optional[str] = Field(None, max_length=500)
    rating: Optional[float] = Field(None, ge=0.0, le=5.0)
    is_active: Optional[bool] = None


class PlaceResponse(BaseModel):
    model_config = {"from_attributes": True}

    id: int
    name: str
    description: Optional[str]
    location: str
    country: str
    image_url: Optional[str]
    rating: float
    is_active: bool
    created_at: datetime


class PaginatedPlaceResponse(PaginatedResponse):
    items: list[PlaceResponse]


# ---------------------------------------------------------------------------
# Hotel Schemas
# ---------------------------------------------------------------------------

class HotelCreateRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=200)
    description: Optional[str] = None
    place_id: int
    address: str = Field(..., min_length=5, max_length=300)
    image_url: Optional[str] = Field(None, max_length=500)
    price_per_night: float = Field(..., gt=0)
    rating: float = Field(0.0, ge=0.0, le=5.0)
    total_rooms: int = Field(10, gt=0)
    amenities: Optional[list[str]] = None


class HotelUpdateRequest(BaseModel):
    name: Optional[str] = Field(None, min_length=2, max_length=200)
    description: Optional[str] = None
    address: Optional[str] = Field(None, min_length=5, max_length=300)
    image_url: Optional[str] = Field(None, max_length=500)
    price_per_night: Optional[float] = Field(None, gt=0)
    rating: Optional[float] = Field(None, ge=0.0, le=5.0)
    total_rooms: Optional[int] = Field(None, gt=0)
    amenities: Optional[list[str]] = None
    is_active: Optional[bool] = None


class HotelResponse(BaseModel):
    model_config = {"from_attributes": True}

    id: int
    name: str
    description: Optional[str]
    place_id: int
    address: str
    image_url: Optional[str]
    price_per_night: float
    rating: float
    total_rooms: int
    amenities: Optional[str]
    is_active: bool
    created_at: datetime


class HotelWithPlaceResponse(HotelResponse):
    place: PlaceResponse


class PaginatedHotelResponse(PaginatedResponse):
    items: list[HotelResponse]


# ---------------------------------------------------------------------------
# Booking Schemas
# ---------------------------------------------------------------------------

class BookingCreateRequest(BaseModel):
    hotel_id: int
    check_in: date
    check_out: date
    guests: int = Field(1, ge=1, le=20)
    special_requests: Optional[str] = None

    @model_validator(mode="after")
    def validate_dates(self) -> BookingCreateRequest:
        if self.check_out <= self.check_in:
            raise ValueError("check_out must be after check_in.")
        return self


class BookingStatusUpdateRequest(BaseModel):
    status: BookingStatus


class BookingResponse(BaseModel):
    model_config = {"from_attributes": True}

    id: int
    user_id: int
    hotel_id: int
    check_in: date
    check_out: date
    guests: int
    total_price: float
    status: BookingStatus
    special_requests: Optional[str]
    created_at: datetime


class BookingDetailResponse(BookingResponse):
    hotel: HotelResponse
    user: UserResponse


class PaginatedBookingResponse(PaginatedResponse):
    items: list[BookingResponse]


# ---------------------------------------------------------------------------
# Admin Analytics Schemas
# ---------------------------------------------------------------------------

class AdminDashboardStats(BaseModel):
    total_users: int
    total_places: int
    total_hotels: int
    total_bookings: int
    total_revenue: float
    pending_bookings: int
    confirmed_bookings: int
    cancelled_bookings: int


class RevenueByMonth(BaseModel):
    month: str
    revenue: float


class BookingStatusBreakdown(BaseModel):
    status: str
    count: int
