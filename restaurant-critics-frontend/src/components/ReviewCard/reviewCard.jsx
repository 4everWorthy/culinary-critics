import React from 'react';
import { Card } from 'react-bootstrap'; // Assuming you're using React Bootstrap

const ReviewCard = ({ review }) => {
    return (
        <Card className="mb-4 shadow-sm" style={{ width: '18rem' }}>
            {/* Add a fallback image if no image URL is provided */}
            <Card.Img variant="top" src={review?.imageUrl || 'default-image.jpg'} />
            <Card.Body>
                {/* Provide a fallback for review title and restaurant name */}
                <Card.Title>{review?.restaurantName || 'Restaurant Name'}</Card.Title>
                <Card.Text>{review?.reviewText || 'No review available.'}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;
