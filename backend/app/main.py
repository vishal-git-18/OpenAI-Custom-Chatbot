from fastapi import FastAPI
from app.api import test_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(test_router)

# Add this CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
