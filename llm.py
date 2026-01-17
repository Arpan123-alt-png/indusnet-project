import os
from dotenv import load_dotenv
from openai import OpenAI
from schema_prompt import SYSTEM_PROMPT

# ✅ Load environment variables HERE
load_dotenv()

# ✅ Read API key
api_key = os.getenv("OPENAI_API_KEY")

if not api_key:
    raise RuntimeError("OPENAI_API_KEY not found. Check your .env file.")

# ✅ Create OpenAI client
client = OpenAI(api_key=api_key)


def generate_form_schema(user_prompt: str) -> str:
    response = client.responses.create(
        model="gpt-4o-mini",
        input=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt}
        ],
        temperature=0.2,
        max_output_tokens=600
    )

    return response.output_text
