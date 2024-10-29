/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';
import CardHeader from '../../CardHeader/cardHeader';
import CardImage from '../../CardImage/cardImage';
import RatingStar from '../../RatingStar/ratingStar';
import ReviewAlert from '../../ReviewAlert/reviewAlert';
import UserBadge from '../../UserBadge/userBadge';
import ReviewTextbox from '../../ReviewTextbox/reviewTextbox';
import './reviewCard.css';

const BASE_URL = 'http://localhost:5000'; // Update to your server URL if deployed

const ReviewCard = ({ restaurantName, user, reviewText, rating, alertText, reviewCount, imageSrc, reviewDate }) => {
    // Construct the full URL for the image source
    const imageUrl = imageSrc ? `${BASE_URL}${imageSrc}` : '/default-image.png';

    return (
        <Card className="review-card">
            <div className="user-badge-header">
                <UserBadge user={user} />
                <ReviewAlert user={user} reviewDate={reviewDate} />
            </div>
            <CardImage imageSrc={imageUrl} />
            <CardHeader restaurantName={restaurantName} />
            <div className="rating-stars">
                {Array(rating).fill().map((_, index) => (
                    <RatingStar className="filled" key={`filled-${index}`} />
                ))}
                {Array(5 - rating).fill().map((_, index) => (
                    <RatingStar className="empty" key={`empty-${index}`} />
                ))}
            </div>
            <ReviewTextbox reviewText={reviewText} />
        </Card>
    );
};

export default ReviewCard;
