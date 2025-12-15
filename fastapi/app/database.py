from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlmodel import Session, create_engine

from app.config import settings

# Async engine and session factory
async_engine = create_async_engine(
    settings.DATABASE_URL_ASYNC,
    echo=True,
    future=True,
)

AsyncSessionLocal = sessionmaker(
    bind=async_engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)

# Sync engine and session factory
sync_engine = create_engine(
    settings.DATABASE_URL_SYNC,
    echo=True,
)

SyncSessionLocal = sessionmaker(
    bind=sync_engine,
    class_=Session,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)

