/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const ReviewForm = ({ onSubmit, review }) => {
    const [restaurantName, setRestaurantName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        if (review) {
            setRestaurantName(review.restaurantName);
            setReviewText(review.reviewText);
            setRating(review.rating);
        }
    }, [review]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            restaurantName,
            reviewText,
            rating,
        };
        onSubmit(reviewData); // Call onSubmit handler passed from parent
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Restaurant Name</label>
                <input
                    type="text"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Review Text</label>
                <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Rating</label>
                <input
                    type="number"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    min="0"
                    max="5"
                    required
                />
            </div>
            <button type="submit">{review ? 'Update Review' : 'Submit Review'}</button>
        </form>
    );
};

export default ReviewForm;
