# Jobly Full Stack Application

## Overview

Jobly is a full-stack application designed to simulate a job searching platform. It features a React frontend for user interaction and an Express/Node.js backend serving as the API, with PostgreSQL for data management. This project aims to provide a practical experience in developing both frontend and backend technologies.

## Technologies

- **Frontend**: React, Material UI for styling
- **Backend**: Node.js, Express.js for creating the API
- **Database**: PostgreSQL for data storage
- **Testing**: Jest and Supertest for backend testing

## Project Structure

- `backend/`: Contains the API and data management logic.
- `frontend/`: Houses the React application for user interfaces.

## Setup Instructions

### Backend

#### Database Setup:

1. Create the Jobly database: `createdb jobly`
2. Initialize the database: `psql -U [psql username] -d jobly -f data.sql`

#### Starting the Backend:

1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Start the server: `npm start` (Runs on port 3001)

### Frontend

#### Environment Setup:

- Ensure the backend URL is set correctly in the frontend code to connect to `http://localhost:3001`.

#### Running the Frontend:

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the app: `npm start` (Access at `http://localhost:3000`)

### Testing the Backend

- Ensure Jest and Supertest are installed: `npm install --save-dev jest supertest`
- Run tests: `npm test`

## Using the API

The backend API supports various endpoints for companies, jobs, authentication, and user profiles. Detailed API documentation and examples can be found in the provided Postman collection.

### Routes

- `/`: Homepage
- `/companies`: Lists all companies
- `/companies/apple`: View details of a specific company
- `/jobs`: Lists all available jobs
- `/login`: Login/signup page
- `/signup`: Signup form
- `/profile`: Edit profile page

## Deployment

The application is deployed on Render:

- **Backend**: [https://react-jobly-backend-e7vv.onrender.com/](https://react-jobly-backend-e7vv.onrender.com/)
- **Frontend**: [https://react-jobly-30mu.onrender.com/](https://react-jobly-30mu.onrender.com/)

## Author

Marc Schaer - Feel free to reach out for any questions or feedback.
