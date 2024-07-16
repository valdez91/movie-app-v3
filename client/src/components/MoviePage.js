import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MoviePage.css';

const MoviePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('/api/movies/all')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
    }, []);

    const toggleDescription = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].showDescription = !updatedMovies[index].showDescription;
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
        <div>
            <h1>Movies</h1>
            <div className="movie-grid">
                {movieColumns.map((column, colIndex) => (
                    <div key={colIndex} className="movie-column">
                        {column.map((movie, index) => (
                            <div key={movie.id} className="movie-card">
                                <img src={movie.poster_url} alt={movie.title} className="movie-poster" />
                                <h2>{movie.title}</h2>
                                {movie.showDescription ? <p>{movie.description}</p> : null}
                                <button onClick={() => toggleDescription(index)}>
                                    {movie.showDescription ? 'Hide Description' : 'View details'}
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
