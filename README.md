# 🧠 AI Dynamic Form Generator

An AI-powered full-stack application that generates **dynamic, functional web forms from natural language descriptions**.

Users simply describe the type of form they need in plain English, and the system automatically creates and renders a working form in real time.

---

## 🚀 What This Project Does

Instead of manually coding forms, this application allows non-technical users (marketing, HR, operations, etc.) to:

- Describe a form requirement in natural language
- Instantly generate a complete, usable form
- Collect structured and clean data with proper meta-tags

### Example Input:
I need a registration form for a fintech conference with
Name, Mobile Number, Company Name and Business Pain Points

### Output
A fully functional form is generated instantly with appropriate input fields.

---

## ✨ Key Features

- 📝 Natural language to form generation
- 🤖 AI-powered schema creation using LLMs
- ⚡ Dynamic form rendering (no hardcoded fields)
- 🔄 Real-time frontend-backend communication
- 🏷️ Structured and meta-tagged data output
- 🌐 Simple and clean user interface

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- JavaScript
- HTML & CSS

### Backend
- Node.js
- Express.js
- dotenv

### AI / LLM
- OpenRouter API
- DeepSeek / GPT-based free model

---

## 🏗️ Project Structure

ai-dynamic-form-generator/
│
├── backend/
│ ├── server.js
│ ├── llm.js
│ ├── schemaPrompt.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── FormRenderer.jsx
│ │ ├── api.js
│ │ └── main.jsx
│ ├── index.html
│ └── package.json
│
└── README.md
