/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
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

