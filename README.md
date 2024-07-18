# Mtandao Project Application
This is a comprehensive movie project application built using Flask and SQLAlchemy for the backend, and React for the frontend. The application allows users to view movie details, post reviews, and manage their profile.

## Problem Statement 
There is a growing need for a user-friendly and dynamic movie project application that caters to the needs of modern movie enthusiasts. Existing solutions may lack features such as:

#### Limited search and filtering: 
Current apps might offer basic search functionalities but often lack advanced filtering options based on genre, rating, or user reviews.

#### Poor user experience: 
The user interface might be clunky or lack intuitive navigation, making it difficult for users to discover new movies or manage their profiles.

#### Limited social interaction: 
Existing apps might not offer features for users to share reviews, create favorites lists, or discuss movies with a community.

This project aims to develop a web-based movie project application using React for the frontend and Flask for the backend to address these shortcomings.

## Solution

#### Display a list of movies:

Allow users to view detailed information about a specific movie, including key actors, genre, and plot summary.

Display user reviews and ratings alongside movie details.

#### User Authentication:

Allow users to create accounts.

Implement user login and logout functionality.

#### Movie Review Submission:

Allow authenticated users to submit reviews for movies.

Ensure that reviews include a rating (integer between 1 and 5) and a comment (text).

#### Profile Management:

Allow users to manage their profile, including updating personal information and viewing their favorite movies and recent reviews.

#### Routing:

Implement routes for browsing movies, viewing movie details, and managing user profiles using React Router.

This basic solution prioritizes ease of use and core functionalities. You can expand on it later with features like:

More advanced search filters (genre, rating, etc.)

Social features like recommendations and discussions

## Project Overview

The Mtandao Project Application is a comprehensive movie project application designed to streamline the process of discovering and reviewing movies. Users can browse movies, view detailed information, and manage their profiles. Registered users can create accounts, post reviews, and maintain a list of favorite movies.

## Features

Movie Browsing: Explore various movies with detailed information.

User Reviews: Write, update, and delete reviews for different movies.

Profile Management: Manage personal information, favorite movies, and recent reviews.

User Authentication: Secure login and registration system using JWT.

Admin Dashboard: Manage users, movies, and reviews (for administrators).

## Installation

Prerequisites

Python 3.8+

Node.js 14+

npm 6+

PostgreSQL or SQLite (for development)

## Technologies Used

### Backend:

Language: Python

Framework: Flask

Database: SQLAlchemy

Authentication: JWT (JSON Web Tokens)

### Frontend:

Language: JavaScript

Framework: React

Routing: React Router

### Development Tools:

Version Control: Git and GitHub

Package Management: npm

Build Tools: Create React App


## Backend Setup

The server/ directory contains all of your backend code.

1.Clone the repository:
```
git clone https://github.com/yourusername/movie-project.git
cd movie-project/server
```
2.Create and activate a virtual environment:

```
python3 -m venv venv
source venv/bin/activate
```
3.Install dependencies:

```
pip install -r requirements.txt
```
4.Set up the database:
```
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```
5.Seed the database:
```
python seed.py
```
6.Run the backend server:
```
flask run
```


## Frontend Setup


The client/ directory contains all of your frontend code.

1.Navigate to the frontend directory:
```
cd ../client
```
2.Install dependencies:
```
npm install
```
3.Start the frontend development server:
```
npm start
```
Open http://localhost:3000 to view it in the browser.

## Project Structure
```
.
├── client
│   ├── package.json
│   ├── public
│   ├── src
│   ├── .gitignore
│   ├── node_modules
├── server
│   ├── __pycache__
│   ├── migrations
│   ├── app.db
│   ├── app.py
│   ├── config.py
│   ├── models.py
│   ├── seed.py
│   ├── watcher.py       
│   ├── requirements.txt
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── Pipfile.lock
├── README.md
```
## Backend

app.py: Main entry point of the Flask application. Configures and initializes the app, sets up routes, and starts the server.

models.py: Contains the SQLAlchemy models for the application, including User, Movie, Review, and Genre.

config.py: Configuration settings for the Flask application.

seed.py: Script to seed the database with initial data.

migrations/: Manages database migrations using Flask-Migrate.

## Frontend

src/index.js: Entry point of the React application. Renders the main component and sets up routing.

src/components/: Contains all the React components used in the application, such as MovieList, MovieDetails, ReviewForm, and ProfilePage.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

