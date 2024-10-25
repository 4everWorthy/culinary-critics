import React from 'react';
import './reviewAlert.css';

const ReviewAlert = ({ user, reviewDate }) => {
    return (
        <div className="review-alert">
            <p>{user?.name || 'Anonymous'} wrote a review. {reviewDate}</p>
        </div>
    );
};

export default ReviewAlert;

