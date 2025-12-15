import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        "postgresql://postgres:postgres@localhost:5433/ph",
    )

    # Async URL (replace postgresql:// with postgresql+asyncpg://)
    @property
    def DATABASE_URL_ASYNC(self) -> str:
        return self.DATABASE_URL.replace(
            "postgresql://", "postgresql+asyncpg://"
        )

    # Sync URL (replace postgresql:// with postgresql+psycopg2://)
    @property
    def DATABASE_URL_SYNC(self) -> str:
        return self.DATABASE_URL.replace(
            "postgresql://", "postgresql+psycopg2://"
        )


settings = Settings()

