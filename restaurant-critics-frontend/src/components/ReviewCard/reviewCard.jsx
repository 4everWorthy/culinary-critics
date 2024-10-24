//import React from 'react'; // No need to import React in React 17+
import { Card } from 'react-bootstrap';
import './reviewCard.css';

const ReviewCard = ({ review }) => {
  return (
    <Card className="mb-4 shadow-sm" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={review?.imageUrl || 'default-image.jpg'} /> {/* Provide a fallback image */}
      <Card.Body>
        <Card.Title>{review?.restaurantName || 'Restaurant Name'}</Card.Title> {/* Provide fallback values */}
        <Card.Text>{review?.reviewText || 'No review available.'}</Card.Text>
        <div className="rating">{'★'.repeat(review?.rating || 0)}</div> {/* Provide default rating */}
        <footer className="blockquote-footer">
          <cite>{review?.reviewerName || 'Anonymous'}</cite> wrote a review {new Date(review?.date).toDateString()}
        </footer>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
