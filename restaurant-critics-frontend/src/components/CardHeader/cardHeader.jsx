// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const CardHeader = ({ restaurantName }) => {
    return (
        <h4 className="card-header">
            {restaurantName}
        </h4>
    );
};

export default CardHeader;
