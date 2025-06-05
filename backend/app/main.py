from fastapi import FastAPI
from app.api import test_router

app = FastAPI()

app.include_router(test_router)
