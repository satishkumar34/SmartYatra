"""
Shared utility functions.
Kept intentionally thin — business logic lives in services.
"""

import math
from datetime import date


def calculate_nights(check_in: date, check_out: date) -> int:
    """Return number of nights between two dates. Caller should validate check_out > check_in."""
    return (check_out - check_in).days


def calculate_total_price(price_per_night: float, nights: int) -> float:
    """Round to 2 decimal places to avoid floating-point drift in stored values."""
    return round(price_per_night * nights, 2)


def paginate_meta(total: int, page: int, size: int) -> dict:
    """Return pagination metadata dict consumed by PaginatedResponse schemas."""
    return {
        "total": total,
        "page": page,
        "size": size,
        "pages": math.ceil(total / size) if size else 0,
    }


def safe_json_list(raw: str | None) -> list[str]:
    """Safely deserialise a JSON-encoded list stored as a TEXT column."""
    import json
    if not raw:
        return []
    try:
        parsed = json.loads(raw)
        return parsed if isinstance(parsed, list) else []
    except (json.JSONDecodeError, TypeError):
        return []


def truncate(text: str, max_length: int = 100) -> str:
    if len(text) <= max_length:
        return text
    return text[:max_length].rstrip() + "…"
