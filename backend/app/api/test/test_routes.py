from fastapi import APIRouter

router = APIRouter()

@router.get("/test")
async def test_endpoint():
    return {"message": "Test backend response: API is up and running!"}
