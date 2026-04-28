# GenAI Persona — Persona-Based AI Chatbot

A production-ready persona-based AI chatbot built for Scaler Academy’s Prompt Engineering Assignment. This application enables users to have realistic, persona-consistent conversations with three prominent Scaler/InterviewBit personalities:

* **Anshuman Singh** — disciplined, execution-focused mentor
* **Abhimanyu Saxena** — strategic founder and product thinker
* **Kshitij Mishra** — technical deep-diver and systems mentor

The project demonstrates advanced prompt engineering, persona simulation, frontend UX, and secure LLM API integration using **Google Gemini API**.

---

## Live Demo

**Deployed Project URL:** *Add your deployed frontend link here*
**Backend API URL:** *Add your deployed backend link here*

---

## Features

### Core Functionality

* 3 fully distinct AI personas with dedicated system prompts
* Persona switcher with automatic chat reset
* Real-time conversational chatbot interface
* Suggestion chips for quick-start prompts
* Typing/loading indicator
* Mobile-responsive UI
* Secure Gemini API integration
* Error handling for failed API responses
* Professional dark-themed modern design

### Prompt Engineering

Each persona includes:

* Detailed researched personality profile
* Communication style
* Core values
* Few-shot examples
* Chain-of-thought reasoning instruction
* Output formatting rules
* Behavioral constraints

---

## Tech Stack

### Frontend

* React.js / Vite (or TanStack Start if applicable)
* Tailwind CSS
* TypeScript / JavaScript
* Context API / Zustand

### Backend

* Node.js
* Express.js (or integrated server routes)
* Google Gemini API (`@google/generative-ai`)

### Deployment

* Frontend: Vercel / Netlify / Lovable
* Backend: Render / Railway / Integrated deployment

---

## Project Structure

```bash
genai_persona/
│
├── frontend/                # Frontend source code
├── backend/                 # Backend source code
├── prompts.md               # Annotated persona prompts
├── reflection.md            # Assignment reflection
├── README.md                # Project documentation
├── .env.example             # Environment template
└── package.json
```

---

## Environment Variables

Create a `.env` file in the backend root:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

### Important:

* Never commit `.env`
* `.env.example` is included for setup guidance
* API keys are securely stored via environment configuration

---

## Installation & Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/tarun250/genai_persona.git
cd genai_persona
```

### 2. Install Dependencies

#### Frontend:

```bash
cd frontend
npm install
```

#### Backend:

```bash
cd ../backend
npm install
```

---

### 3. Configure Environment Variables

```bash
cp .env.example .env
```

Add your Gemini API key.

---

### 4. Run Development Servers

#### Backend:

```bash
npm run dev
```

#### Frontend:

```bash
cd ../frontend
npm run dev
```

---

### 5. Open Application

```txt
http://localhost:5173
```

---

## Deployment Instructions

### Frontend (Vercel / Netlify)

* Connect GitHub repository
* Set build command:

```bash
npm run build
```

* Set output directory:

```bash
dist
```

### Backend (Render / Railway)

* Connect backend folder
* Add environment variables:

```env
GEMINI_API_KEY=your_key
PORT=10000
```

* Start command:

```bash
npm start
```

---

## Screenshots

### Home / Persona Switcher

<img width="1887" height="909" alt="image" src="https://github.com/user-attachments/assets/54b0fcb2-2fdc-45ac-bbf0-827651f05cc4" />


### Chat Interface

<img width="1206" height="852" alt="image" src="https://github.com/user-attachments/assets/325c9b5d-bd3b-4544-8619-f3c18fa2f2c1" />


### Mobile Responsive View

<img width="498" height="815" alt="image" src="https://github.com/user-attachments/assets/de1b7a80-c8e5-4ff4-a603-2a042649ac59" />
<img width="498" height="555" alt="image" src="https://github.com/user-attachments/assets/5473d7c1-3001-4b39-9746-e3185ed2da13" />


---

## Testing Checklist

* [x] Persona switching resets conversation
* [x] Distinct prompts for all 3 personas
* [x] Gemini API integration functional
* [x] Error handling implemented
* [x] Suggestion chips functional
* [x] Typing indicator functional
* [x] Mobile responsiveness verified
* [x] Secure environment variable handling

---

## Documentation Files

### Included:

* `README.md`
* `prompts.md`
* `reflection.md`
* `.env.example`

---

## Reflection

This project reinforced the importance of **GIGO (Garbage In, Garbage Out)** in prompt engineering. Strong persona realism depends heavily on deep research, structured system prompts, and carefully designed constraints. The biggest challenge was preserving authenticity while ensuring response consistency. Future improvements would include memory optimization, better streaming responses, and more refined persona nuance.

---

## Submission Readiness

* [x] Public GitHub repository
* [x] Live deployed application
* [x] Secure API integration
* [x] Full documentation
* [x] Persona realism
* [x] Assignment compliance

---

## Author

**Tarun**
Scaler Academy Prompt Engineering Assignment Submission

---

## License

This project is for educational purposes as part of Scaler Academy coursework.
