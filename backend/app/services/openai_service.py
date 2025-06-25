import json
import re
from app.core.openai_client import ask_openai
from app.services import weather_service
from app.services import calendar_service

async def process_user_message(message: str) -> dict:
    prompt = f"""
    Analyze the following user message and respond strictly in this JSON format, without any Markdown code blocks:

    {{
        "calendarEvent": true/false,
        "weatherConditions": true/false,
        "response": "<your normal chatgpt response>"
    }}

    Message: "{message}"
    """

    openai_response = await ask_openai(prompt)

    # Remove Markdown code block formatting if present
    if openai_response.startswith("```"):
        openai_response = re.sub(r"^```(?:json)?\s*|\s*```$", "", openai_response.strip(), flags=re.IGNORECASE)

    try:
        parsed_response = json.loads(openai_response)
    except json.JSONDecodeError:
        # Fallback in case the response is not valid JSON
        parsed_response = {
            "calendarEvent": False,
            "weatherConditions": False,
            "response": openai_response
        }

    # Delegate to relevant services
    if parsed_response.get("calendarEvent"):
        parsed_response["response"] = await calendar_service.handle_calendar_event(parsed_response["response"])
    elif parsed_response.get("weatherConditions"):
        parsed_response["response"] = await weather_service.handle_weather_conditions(parsed_response["response"])

    return parsed_response
