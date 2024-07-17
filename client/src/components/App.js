// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './HomePage';
import MoviePage from './MoviePage';
import MovieDetails from './MovieDetails';
import ReviewPage from './ReviewPage';
import ProfilePage from './ProfilePage';
import AllReviewsPage from './AllReviewsPage'; // Import the new component

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/movies" component={MoviePage} />
                <Route path="/movies/:movieId" component={MovieDetails} />
                <Route path="/reviews/:movieId" component={ReviewPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/reviews/all" component={AllReviewsPage} /> {/* Add the new route */}
            </Switch>
        </Router>
    );
};

export default App;
