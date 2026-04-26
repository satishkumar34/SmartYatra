"""
Application-wide constants.
Import these everywhere instead of hardcoding magic values.
"""

# Pagination
DEFAULT_PAGE_SIZE   = 20
MAX_PAGE_SIZE       = 100

# Booking
MAX_GUESTS          = 20
MIN_PRICE_PER_NIGHT = 0.01

# Rating
MIN_RATING          = 0.0
MAX_RATING          = 5.0

# Password policy
PASSWORD_MIN_LENGTH = 8
PASSWORD_MAX_LENGTH = 128

# Token
BEARER_PREFIX       = "Bearer "

# Roles
ROLE_ADMIN          = "admin"
ROLE_USER           = "user"

# Booking status transitions — source of truth for service layer
ALLOWED_STATUS_TRANSITIONS: dict[str, list[str]] = {
    "pending":   ["confirmed", "cancelled"],
    "confirmed": ["completed", "cancelled"],
    "cancelled": [],
    "completed": [],
}
