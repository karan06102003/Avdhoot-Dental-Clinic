# Avdhoot Dental Clinic - Full Stack Web Application

## Features Implemented
- **Modern Next.js Frontend:** Interactive UI with Tailwind CSS, Glassmorphism, and responsive breakpoints.
- **Node.js/Express Backend:** RESTful API connected to MongoDB via Mongoose.
- **Admin Dashboard:** Secure JWT-based login for staff to view and manage appointments.
- **AI Chatbot:** Google Gemini integration for conversational answering of clinic FAQs.
- **Smart Booking System:** Seamless frontend-to-backend pipeline.

---

## Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to `avdhoot-backend`:
   ```bash
   cd avdhoot-backend
   ```
2. Make sure you have MongoDB running locally, or update `MONGO_URI` in `.env` to point to a MongoDB Atlas cluster.
3. Update `GEMINI_API_KEY` in `.env` to enable the AI features.
4. Run the server:
   ```bash
   node src/server.js
   ```

### 2. Frontend Setup
1. Open a new terminal and navigate to `avdhoot-frontend`:
   ```bash
   cd avdhoot-frontend
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

---

## Deployment Guide

### Frontend (Vercel)
1. In `src/components/Chatbot.tsx`, `src/app/admin/page.tsx`, and `src/app/appointments/page.tsx`, replace `http://localhost:5000` with your deployed backend URL.
2. Push your `avdhoot-frontend` code to a GitHub repository.
3. Go to Vercel (vercel.com) and import the repository.
4. Vercel will automatically detect Next.js. Deploy it.

### Backend (Render/Railway/Heroku)
1. Push your `avdhoot-backend` code to a GitHub repository.
2. Sign up on Render or Railway, and create a new Web Service.
3. Connect your repository.
4. Add the environment variables:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `GEMINI_API_KEY`
   - `PORT`
5. Set start command to `node src/server.js`. Deploy.

### Database (MongoDB Atlas)
1. Create a free cluster on MongoDB Atlas.
2. Add your IP address to the Network Access list (or allow all IPs `0.0.0.0/0` to allow the deployed backend to connect).
3. Get the connection string and update the `MONGO_URI` environment variable.

---

## Default Admin Credentials
- **Email:** admin@avdhoot.com
- **Password:** admin123
