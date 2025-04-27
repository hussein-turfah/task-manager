# Task Manager Application

A full-stack task management application built with modern web technologies.

## Project Structure

The project is organized into two main components:

- `frontend/`: React-based user interface
- `backend/`: Node.js/Express server with PostgreSQL database

## Features

- Create, and move tasks between columns
- Create task tags
- View task history

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   DB_NAME=DB_NAME
   DB_USER=DB_USER
   DB_PASSWORD=DB_PASSWORD
   DB_HOST=DB_HOST
   DB_PORT=DB_PORT
   DB_DIALECT=DB_DIALECT
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   VITE_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development

- Backend runs on `http://localhost:3000`
- Frontend runs on `http://localhost:5173`
