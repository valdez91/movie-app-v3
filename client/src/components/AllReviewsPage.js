// src/components/AllReviewsPage.js
import React, { useState, useEffect } from 'react';
import './AllReviewsPage.css';

const AllReviewsPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/api/reviews/all')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div className="all-reviews-container">
            <h1>All Reviews</h1>
            <div>
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <h2>Rating: {review.rating}</h2>
                        <p>{review.comment}</p>
                        <p>User ID: {review.user_id}</p>
                        <p>Movie ID: {review.movie_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllReviewsPage;
