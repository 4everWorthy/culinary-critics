// eslint-disable-next-line no-unused-vars
import React from 'react';
import './reviewTextbox.css';

// eslint-disable-next-line react/prop-types
const ReviewTextbox = ({ reviewText }) => {
    return (
        <div className="review-textbox">
            <p>{reviewText}</p>
        </div>
    );
};

export default ReviewTextbox;
