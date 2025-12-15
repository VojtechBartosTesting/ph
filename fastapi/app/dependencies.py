from collections.abc import AsyncGenerator, Generator

from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import Session

from app.database import AsyncSessionLocal, SyncSessionLocal


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    """Dependency that yields an async database session."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise


def get_sync_session() -> Generator[Session, None, None]:
    """Dependency that yields a sync database session."""
    session = SyncSessionLocal()
    try:
        yield session
        session.commit()
    except Exception:
        session.rollback()
        raise
    finally:
        session.close()

