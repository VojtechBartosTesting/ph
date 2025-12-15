from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import health, hello

app = FastAPI(
    title="PH API",
    description="FastAPI application with PostgreSQL",
    version="0.1.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(hello.router)
app.include_router(health.router)
