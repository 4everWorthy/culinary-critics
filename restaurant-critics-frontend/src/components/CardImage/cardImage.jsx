import React from 'react';
import './cardImage.css';

const CardImage = ({ imageSrc }) => {
    return (
        <div className="card-image">
            <img src={imageSrc} alt="Food" />
        </div>
    );
};

export default CardImage;
