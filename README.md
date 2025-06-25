# Ohai.AI – Smart Chat Assistant

A conversational web-based AI assistant built using **React** (frontend) and **FastAPI + OpenAI** (backend). It understands natural language queries and smartly routes messages related to **weather**, **calendar events**, or general questions using intent detection.

## ✨ Features

- 💬 Chat interface with contextual conversation
- 🔍 Intent classification (weather / calendar / generic)
- 🤖 OpenAI-powered natural language responses
- 📚 Sample questions for quick access
- 🎨 Clean and responsive UI with animated typing feedback

## 🧱 Tech Stack

| Layer         | Technology                     |
|---------------|--------------------------------|
| Frontend      | React + CSS / Tailwind (optional) |
| Backend       | FastAPI (Python)               |
| AI Model      | OpenAI (ChatGPT API)           |
| Communication | RESTful API (`/process`)       |
| Styling       | Inter font, custom CSS         |

---

## 🚀 Getting Started

### 📦 Backend Setup (FastAPI)

```bash
# Navigate to the backend folder
cd backend

# (Optional) Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set OpenAI API Key
echo "OPENAI_API_KEY=your-key-here" > .env

# Start backend server
uvicorn app.main:app --reload
````

> API will be available at `http://127.0.0.1:8000/process`

---

### 💻 Frontend Setup (React)

```bash
# Navigate to the frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

> App will run at `http://localhost:3000`

---

## 🧠 Intent Detection Flow

1. User sends a message from the UI.
2. The message is sent to `/process`:

   ```json
   {
     "message": "What's the weather like today?"
   }
   ```
3. Backend responds in this format:

   ```json
   {
     "calendarEvent": false,
     "weatherConditions": true,
     "response": "I'm unable to provide real-time weather updates. You can check the current weather on a weather website or app for accurate information."
   }
   ```
4. Frontend displays `response` to the user.
5. If `calendarEvent` or `weatherConditions` is `true`, the backend routes through helper services for further processing.

---

## 📁 Project Structure

```
ohai-ai/
├── backend/
│   ├── requirements.txt
│   ├── .env
│   └── app/
│       ├── main.py
│       ├── core/
│       │   └── openai_client.py
│       └── services/
│           ├── weather_service.py
│           └── calendar_service.py
├── frontend/
│   ├── package.json
│   └── src/
│       ├── api/
│       │   └── openAI/openApi.js
│       ├── components/
│       │   ├── ChatInput.jsx
│       │   ├── ChatMessage.jsx
│       │   └── SampleQuestions.jsx
│       ├── pages/
│       │   └── ChatPage.jsx
│       └── styles/
│           └── export.css
```

---

## ✅ TODO

* [ ] Add real weather API integration (e.g., OpenWeatherMap)
* [ ] Connect to Google Calendar API for event creation
* [ ] Markdown support for AI responses
* [ ] Deployment via Vercel (frontend) + Render or Railway (backend)

---

## 🙌 Acknowledgements

* [OpenAI](https://openai.com/)
* [FastAPI](https://fastapi.tiangolo.com/)
* [React](https://reactjs.org/)

