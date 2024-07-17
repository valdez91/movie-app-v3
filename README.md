# Mtandao Project Application
This is a comprehensive movie project application built using Flask and SQLAlchemy for the backend, and React for the frontend. The application allows users to view movie details, post reviews, and manage their profile.


## Project Overview

The Movie Project Application consists of two main components:

### Backend

The backend is built with Flask and SQLAlchemy. It includes the following features:

User authentication and profile management

Movie database with genres, reviews, and ratings

API endpoints for frontend integration

### Frontend

The frontend is developed using React. It features:

User-friendly interface for browsing movies

Review and rating system

Profile page with favorite movies and recent reviews

### Getting Started
To get a local copy up and running, follow these steps.

### Prerequisites
Ensure you have the following installed:

Python 3.x

Node.js and npm

Flask

SQLAlchemy

 React

 ## Backend Setup

1. Clone the repository:

```
git clone https://github.com/yourusername/movie-project.git
cd movie-project/server

```

2. Create and activate a virtual environment:

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
flask db migrate
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

1.Navigate to the client directory:

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

Open http://localhost:3000 to view it in the browser

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)