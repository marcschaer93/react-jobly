# React Jobly

## Description

This repository contains the backend and frontend for the React Jobly project. The backend serves as the API, while the frontend interacts with this API to provide a user interface for viewing companies, jobs, and applying for jobs.

## Technologies

**Backend**: Node.js, Express.js
**Frontend**: React, Material UI

### Folder Structure

#### Backend

This folder holds the backend solution for the React Jobly project, serving as the API and data source for the frontend React application.

#### Frontend

The React frontend for the Jobly project, responsible for user interaction and rendering the application's interface.

## Backend Setup

### Steps

1. Recreate the Jobly database using the provided `jobly.sql` file.
2. Start the backend on port 3001.

### API Helper

Utilizes the `JoblyApi` class to centralize API requests to the backend and provide methods for various API endpoints.

### Routes

- `/`: Homepage
- `/companies`: Lists all companies
- `/companies/apple`: View details of a specific company
- `/jobs`: Lists all available jobs
- `/login`: Login/signup page
- `/signup`: Signup form
- `/profile`: Edit profile page

### Deployment Links

The backend is deployed on Render:
[Backend Deployment Link](https://react-jobly-backend-e7vv.onrender.com/)

The frontend is also deployed on Render:
[Frontend Deployment Link](https://react-jobly-30mu.onrender.com/)

## Frontend Setup

### Steps

1. Connect the frontend to the backend by defining the appropriate base URLs.
2. Create routes for different sections of the app and placeholder components for each feature area.

### Features

- Design the component hierarchy.
- Implement API calls to the backend using `JoblyApi`.
- Develop components for companies, company details, job listings, and job cards.
- Add user authentication features like login, signup, and logout.
- Use `localStorage` to store tokens and protect routes based on user authentication.
- Create a profile page for users to edit their profiles.
- Enable job applications functionality.

### Local Development

**Backend SetUp**

Navigate to the Backend Directory:

```
bash
cd backend
```

Install Dependencies:

```
bash
npm install
```

Recreate the Jobly Database:

- Use the provided jobly.sql file to recreate the Jobly database.

Start the Backend:

```
bash
npm start
```

The backend will start on port 3001.

**Frontend Setup**

Navigate to the Frontend Directory:

```
bash
cd frontend_directory
```

Install Dependencies:

```
bash
npm install
```

Set Backend URL:

In the frontend code, define the base URL to connect to the local backend (http://localhost:3001).

Start the Frontend:

```
bash
npm run dev
```

The frontend development server will start.

Accessing Locally

Backend will be running at http://localhost:3001.
Frontend will be accessible at http://localhost:3000 by default.
