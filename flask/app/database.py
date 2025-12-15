from sqlalchemy.orm import sessionmaker
from sqlmodel import Session, create_engine

from app.config import settings

# Sync engine
engine = create_engine(
    settings.DATABASE_URL_SYNC,
    echo=True,
)

# Session factory
SessionLocal = sessionmaker(
    bind=engine,
    class_=Session,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


def get_session() -> Session:
    """Get a database session."""
    return SessionLocal()

