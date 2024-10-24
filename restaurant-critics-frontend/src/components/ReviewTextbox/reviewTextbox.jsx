import React from 'react';
import './reviewTextbox.css';

const ReviewTextbox = ({ reviewText }) => {
    return (
        <div className="review-textbox">
            <p>{reviewText}</p>
        </div>
    );
};

export default ReviewTextbox;
