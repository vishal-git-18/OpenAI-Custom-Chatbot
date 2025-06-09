from fastapi import FastAPI
from app.api import test_router
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import init_env
from app.api import message_routes

init_env()

app = FastAPI()

app.include_router(test_router)
app.include_router(message_routes.router)

# Add this CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
