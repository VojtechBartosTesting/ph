from flask import Blueprint
from sqlalchemy import text

from app.database import get_session

bp = Blueprint("health", __name__)


@bp.route("/health")
def health_check():
    """Health check endpoint that verifies database connectivity."""
    session = get_session()
    try:
        result = session.execute(text("SELECT 1"))
        result.scalar()
        return {"status": "healthy", "database": "connected"}
    finally:
        session.close()

