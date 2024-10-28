/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReviewCard from '../Cards/ReviewCard/reviewCard'; // Adjust as needed

// eslint-disable-next-line react/prop-types
const ReviewList = ({ reviews }) => {
    return (
        <div>
            // eslint-disable-next-line react/prop-types, react/prop-types
            {reviews && reviews.map((review, index) => (
                <ReviewCard
                    key={index}
                    user={review.user}
                    imageSrc={review.imageSrc}
                    restaurantName={review.restaurantName}
                    reviewText={review.reviewText}
                    rating={review.rating}
                    reviewDate={review.reviewDate}
                />
            ))}
        </div>
    );
};

export default ReviewList;
