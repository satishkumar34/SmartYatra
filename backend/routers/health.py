"""
Health & readiness endpoints — used by Docker, Kubernetes probes, and monitoring.
"""

import time
from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text

from database import get_db

health_router = APIRouter(prefix="/health", tags=["Health"])

_START_TIME = time.time()


@health_router.get("", summary="Liveness probe")
def liveness():
    """Returns 200 as long as the process is running."""
    return {
        "status": "ok",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "uptime_seconds": round(time.time() - _START_TIME),
    }


@health_router.get("/ready", summary="Readiness probe")
def readiness(db: Session = Depends(get_db)):
    """
    Returns 200 only when the database is reachable.
    Kubernetes readinessProbe should hit this endpoint.
    """
    try:
        db.execute(text("SELECT 1"))
        db_status = "connected"
    except Exception as exc:
        return {
            "status": "degraded",
            "database": f"error: {exc}",
        }

    return {
        "status": "ready",
        "database": db_status,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
