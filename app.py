from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv
import json

from llm import generate_form_schema

load_dotenv()

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate-form", methods=["POST"])
def generate_form():
    data = request.json
    prompt = data.get("prompt")

    try:
        ai_response = generate_form_schema(prompt)
        schema = json.loads(ai_response)
        return jsonify(schema)
    except Exception as e:
        print("ERROR:", e)
        return jsonify({"error": "Form generation failed"}), 500


@app.route("/submit-form", methods=["POST"])
def submit_form():
    print("📦 Submitted Data:", request.json)
    return jsonify({"success": True})


if __name__ == "__main__":
    app.run(debug=True)
