import React from 'react';
import './ratingStar.css';
import { FaStar } from 'react-icons/fa';

const RatingStar = ({ rating }) => {
    const stars = Array(5).fill(0).map((_, index) => (
        <FaStar key={index} className={index < rating ? 'filled' : 'empty'} />
    ));

    return <div className="rating-stars">{stars}</div>;
};

export default RatingStar;
