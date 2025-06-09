import os
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

async def ask_openai(prompt: str) -> str:
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": prompt}
        ],
    )
    return response.choices[0].message.content
