from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.dependencies import get_async_session

router = APIRouter()


@router.get("/health")
async def health_check(
    session: AsyncSession = Depends(get_async_session),
) -> dict:
    """Health check endpoint that verifies database connectivity."""
    result = await session.execute(text("SELECT 1"))
    result.scalar()
    return {"status": "healthy", "database": "connected"}

