// src/components/MovieDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css'; // Import your CSS file for styling

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/movies/${movieId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMovie(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [movieId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movie) {
        return <div>No movie found</div>;
    }

    return (
        <div className="movie-details-container">
            <h1 className="movie-title">{movie.title}</h1>
            <p className="movie-description">{movie.description}</p>
            <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
        </div>
    );
};

export default MovieDetails;
