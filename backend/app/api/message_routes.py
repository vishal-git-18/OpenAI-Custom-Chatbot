from fastapi import APIRouter
from app.models.message_models import MessageRequest
from app.services.openai_service import process_user_message

router = APIRouter()

@router.post("/process")
async def process_message(request: MessageRequest):
    response = await process_user_message(request.message)
    return response
