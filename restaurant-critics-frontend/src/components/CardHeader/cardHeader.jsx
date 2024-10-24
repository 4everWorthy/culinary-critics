import React from 'react';

const CardHeader = ({ restaurantName }) => {
    return (
        <h4 className="card-header">
            {restaurantName}
        </h4>
    );
};

export default CardHeader;
