import React from 'react';
import './cardHeader.css';

const CardHeader = ({ title }) => {
    return (
        <div className="card-header">
            <h5 className="restaurant-title">{title}</h5>
        </div>
    );
};

export default CardHeader;
