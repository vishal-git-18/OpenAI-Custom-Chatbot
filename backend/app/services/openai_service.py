import json
from app.core.openai_client import ask_openai
from app.services import weather_service
from app.services import calendar_service

async def process_user_message(message: str) -> dict:
    prompt = f"""
    Analyze the following user message and respond appropriately.
    If it relates to a calendar event or weather, include:
    - "calendarEvent": true
    - "weatherConditions": true
    Else set them to false.

    Respond strictly in the following JSON format:
    {{
        "calendarEvent": true/false,
        "weatherConditions": true/false,
        "response": "<your normal chatgpt response>"
    }}

    Message: "{message}"
    """
    openai_response = await ask_openai(prompt)

    try:
        parsed_response = json.loads(openai_response)
    except json.JSONDecodeError:
        # fallback in case parsing fails
        parsed_response = {
            "calendarEvent": False,
            "weatherConditions": False,
            "response": openai_response
        }

    # If flagged, pass to relevant service for fine-tuning (stubbed)
    if parsed_response.get("calendarEvent"):
        parsed_response["response"] = await calendar_service.handle_calendar_event(parsed_response["response"])
    elif parsed_response.get("weatherConditions"):
        parsed_response["response"] = await weather_service.handle_weather_conditions(parsed_response["response"])

    return parsed_response
