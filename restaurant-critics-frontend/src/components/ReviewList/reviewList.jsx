import React from 'react';
import ReviewCard from '../Cards/ReviewCard/reviewCard'; // Adjust as needed

const ReviewList = ({ reviews }) => {
    return (
        <div>
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
