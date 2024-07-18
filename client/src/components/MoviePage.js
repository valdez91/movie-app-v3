import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/api/movies/all')
            .then(response => response.json())
            .then(data => {
                // Initialize movies with showDescription property
                const moviesWithDescriptions = data.map(movie => ({
                    ...movie,
                    showDescription: false
                }));
                setMovies(moviesWithDescriptions);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const toggleDescription = (movieId) => {
        // Create a new array with updated showDescription for the clicked movie
        const updatedMovies = movies.map((movie) => {
            if (movie.id === movieId) {
                return {
                    ...movie,
                    showDescription: !movie.showDescription
                };
            }
            return movie;
        });
        setMovies(updatedMovies);
    };

    // Function to chunk movies into columns with four rows each
    const chunkMovies = (movies, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < movies.length; i += chunkSize) {
            chunks.push(movies.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const movieColumns = chunkMovies(movies, 4);

    return (
        <div className="movie-page">
            <div className="movie-grid">
                {movieColumns.map((column, colIndex) => (
                    <div key={colIndex} className="movie-column">
                        {column.map((movie) => (
                            <div key={movie.id} className="movie-card">
                                <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                                <h2>{movie.title}</h2>
                                {movie.showDescription && <p>{movie.description}</p>}
                                <button onClick={() => toggleDescription(movie.id)}>
                                    {movie.showDescription ? 'Hide Description' : 'View Description'}
                                </button>
                                <Link to={`/movies/${movie.id}`}>View Poster</Link>
                                <Link to={`/reviews/${movie.id}`}>Review Movie</Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviePage;
