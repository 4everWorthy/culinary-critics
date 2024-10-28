/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from '../../CardHeader/cardHeader'; // Adjusted relative path
import CardImage from '../../CardImage/cardImage'; // Adjusted relative path
import RatingStar from '../../RatingStar/ratingStar'; // Adjusted relative path
import ReviewAlert from '../../ReviewAlert/reviewAlert'; // Adjusted relative path
import ReviewCounter from '../../ReviewCounter/reviewCounter'; // Adjusted relative path
import UserBadge from '../../UserBadge/userBadge'; // Adjusted relative path
import ReviewTextbox from '../../ReviewTextbox/reviewTextbox'; // Adjusted relative path
import './reviewCard.css'; // Stay in the same folder for CSS
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
