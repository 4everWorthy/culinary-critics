// eslint-disable-next-line no-unused-vars
import React from 'react';
import './reviewCounter.css';

// eslint-disable-next-line react/prop-types
const ReviewCounter = ({ count }) => {
    return (
        <div className="review-counter">
            ({count})
        </div>
    );
};

export default ReviewCounter;
