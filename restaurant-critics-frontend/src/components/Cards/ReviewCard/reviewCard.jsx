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
const ReviewCard = ({ restaurantName, user, reviewText, rating, alertText, reviewCount, imageSrc ,reviewDate}) => {
    return (
        <Card className="review-card">
            <div className="user-badge-header">
                <UserBadge user={user}/>
                <ReviewAlert user={user} reviewDate={reviewDate} />
            </div>
            <CardImage imageSrc={imageSrc}/>
            <CardHeader restaurantName={restaurantName}/>
            <div className="rating-stars">
                {Array(rating).fill().map((_, index) => (
                    <RatingStar className="filled" key={`filled-${index}`} />
                ))}
                {Array(5 - rating).fill().map((_, index) => (
                    <RatingStar className="empty" key={`empty-${index}`} />
                ))}
                <ReviewCounter reviewCount={reviewCount} />
            </div>
            <ReviewTextbox reviewText={reviewText}/>
        </Card>
    );
};

export default ReviewCard;
