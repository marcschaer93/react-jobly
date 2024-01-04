# React Jobly

## Description

This repository contains the backend and frontend for the React Jobly project. The backend serves as the API, while the frontend interacts with this API to provide a user interface for viewing companies, jobs, and applying for jobs.

### Folder Structure

#### Backend

This folder holds the backend solution for the React Jobly project, serving as the API and data source for the frontend React application.

#### Frontend

The React frontend for the Jobly project, responsible for user interaction and rendering the application's interface.

## Backend Setup

### Steps

1. Use the provided `express-jobly` solution as the backend.
2. Recreate the Jobly database using the provided `jobly.sql` file.
3. Start the backend on port 3001.

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

### Deployment

Deploy the backend using Heroku:

- Run necessary Heroku commands.
- Push the code to Heroku and copy the local database to the production one.

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

### Further Study

For additional learning, refer to the provided link for suggestions on further study.

### Solution

View the provided solution [here](http://curric.rithmschool.com/springboard/exercises/react-jobly/solution).

Feel free to modify this README.md according to the specific structure, features, or additional details of your React Jobly project.
