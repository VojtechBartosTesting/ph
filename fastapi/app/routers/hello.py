from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def hello_world() -> dict:
    """Hello World endpoint."""
    return {"message": "Hello World!"}

