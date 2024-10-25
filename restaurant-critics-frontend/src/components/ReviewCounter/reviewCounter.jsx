import React from 'react';
import './reviewCounter.css';

const ReviewCounter = ({ count }) => {
    return (
        <div className="review-counter">
            ({count})
        </div>
    );
};

export default ReviewCounter;
