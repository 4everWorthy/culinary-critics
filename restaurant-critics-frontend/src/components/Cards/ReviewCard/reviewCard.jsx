import React from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from '../../CardHeader/cardHeader';
import CardImage from '../../CardImage/cardImage';
import RatingStar from '../../RatingStar/ratingStar';
import ReviewAlert from '../../ReviewAlert/reviewAlert';
import ReviewCounter from '../../ReviewCounter/reviewCounter';
import UserBadge from '../../UserBadge/userBadge';
import ReviewTextbox from '../../ReviewTextbox/reviewTextbox';
import './reviewCard.css';


const ReviewCard = ({ user, imageSrc, restaurantName, reviewText, rating, reviewDate }) => {
    return (
        <Card className="review-card">
            <Card.Header className="review-card-header">
                <UserBadge user={user} />
                <ReviewAlert user={user} reviewDate={reviewDate} />
            </Card.Header>

            <CardImage imageSrc={imageSrc} />

            <Card.Body>
                <CardHeader title={restaurantName} />
                <RatingStar rating={rating} />
                <ReviewCounter count={rating} />
                <ReviewTextbox reviewText={reviewText} />
            </Card.Body>
        </Card>
    );
};

export default ReviewCard;
