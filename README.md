# IndusNet AI Project – Dynamic Form Generator

## 📌 Overview
This project is a **Flask-based AI application** designed to dynamically generate and manage forms using **Large Language Models (LLMs)**.  
It focuses on clean backend architecture, prompt-based schema generation, and a simple frontend for user interaction.

---

## 🚀 Features
- Dynamic form generation using LLM prompts
- Flask backend with modular Python files
- Secure handling of environment variables
- Scalable project structure suitable for production

---

## 🛠 Tech Stack
- **Backend:** Python, Flask  
- **AI / LLM:** Prompt-based schema generation  
- **Frontend:** HTML, JavaScript  
- **Environment Management:** Python Virtual Environment  
- **Version Control:** Git & GitHub  

---

## 📁 Project Structure
AI PROJECT
│── static/
│ └── script.js
│── templates/
│ └── index.html
│── app.py
│── llm.py
│── schema_prompt.py
│── requirements.txt
│── .gitignore
│── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Arpan123-alt-png/indusnet-project-update.git
cd indusnet-project-update
Create Virtual Environment
python -m venv venv


Activate:

Windows

venv\Scripts\activate


Mac/Linux

source venv/bin/activate

3️⃣ Install Dependencies
pip install -r requirements.txt

4️⃣ Set Environment Variables

Create a .env file:

OPENAI_API_KEY=your_api_key_here

▶️ Run the Application
python app.py


The app will run on:

http://127.0.0.1:5000/
