/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './reviewAlert.css';

const ReviewAlert = ({ user, reviewDate }) => {
    const date = new Date(reviewDate);
    const formattedDate = new Date(date).toLocaleDateString();
    return (
        <div className="review-alert">
            <p>{user || 'Anonymous'} wrote a review. {formattedDate}</p>
        </div>
    );
};

export default ReviewAlert;

