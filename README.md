# CRM Backend (Express + MongoDB)

## Quick Start
1) Ensure MongoDB is running locally (or update `MONGO_URI` in `.env`).
2) Install deps: `npm install`
3) Run dev server: `npm run dev`
4) API base: `http://localhost:5000`

## Auth
- POST `/api/auth/signup` { name, email, password }
- POST `/api/auth/login` { email, password } -> { token }

## Leads (requires Authorization: Bearer <token>)
- POST `/api/leads` { name, email, phone, status?, notes? }
- GET `/api/leads`
- PUT `/api/leads/:id`
- DELETE `/api/leads/:id`
