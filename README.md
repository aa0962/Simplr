# MyMovieApp
### MyMovieApp is a full-stack web application for managing movie records. It includes a frontend interface for users to interact with movie data and a backend server to handle CRUD operations on movie records.

## Deployment Links
Frontend: MyMovieApp Frontend[https://moviezzzzz.vercel.app/]
Backend: MyMovieApp Backend[https://simplr-production.up.railway.app/api]
API Documentation: Postman API Documentation[https://documenter.getpostman.com/view/34525323/2sA3duFtEk]
## Features
View All Movies: Browse through a list of all movies stored in the database.
Add New Movie: Add a new movie record with details like title, director, release year, language, and rating.
Update Movie Details: Modify existing movie details such as director, release year, language, and rating.
Delete Movie: Remove a movie from the database.
Filter Movies: Filter movies based on criteria such as title, director, release year, language, and rating.
Search Movie: Search for a movie by title.
Dark/Light Theme Mode: Toggle between dark and light themes for user interface preference.
## Technologies Used
Frontend: React, React Router, Axios, Tailwind CSS
Backend: Node.js, Express.js, MongoDB (Mongoose), Axios (for API requests)
Deployment: Vercel (Frontend), Railway (Backend)
## Setup Instructions
### Backend Setup:

Clone the repository.
Install dependencies using npm install.
Configure environment variables (e.g., database connection URI, port) in a .env file.
Start the backend server using npm start.
### Frontend Setup:

Clone the repository.
Install dependencies using npm install.
Set the backend API URL in the .env file (REACT_APP_API_URL).
Start the frontend application using npm start.
## Accessing the Application:

Once both backend and frontend are running locally, access the application in your web browser at http://localhost:3000.
## API Endpoints
GET /api/movies: Retrieve all movies.
POST /api/movies: Add a new movie.
PUT /api/movies/:id: Update movie details by ID.
DELETE /api/movies/:id: Delete a movie by ID.
GET /api/movies/filter: Filter movies by criteria.
GET /api/movies/search/:title: Search for a movie by title.
GET /api/movies/count: Get the number of movies in a specified language.
For more details, refer to the API Documentation[https://documenter.getpostman.com/view/34525323/2sA3duFtEk].
