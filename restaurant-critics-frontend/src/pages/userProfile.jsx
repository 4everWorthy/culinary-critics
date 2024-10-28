// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import reviewService from '../services/reviewService';
import ReviewForm from '../components/ReviewForm/reviewForm';
import './formStyles.css'; // Ensure styling consistency

const UserProfile = () => {
    const [reviews, setReviews] = useState([]);
    const [editingReview, setEditingReview] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await reviewService.getAllReviews();
                setReviews(response.data); 
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []);

    const handleDelete = async (reviewId) => {
        try {
            await reviewService.deleteReview(reviewId, token);
            setReviews(reviews.filter((review) => review._id !== reviewId));
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };

    const handleEdit = (review) => {
        setEditingReview(review);
    };

    const handleFormSubmit = async (reviewData) => {
        if (editingReview) {
            try {
                await reviewService.updateReview(editingReview._id, reviewData, token);
                setReviews(reviews.map((r) => (r._id === editingReview._id ? { ...r, ...reviewData } : r)));
                setEditingReview(null);
            } catch (error) {
                console.error('Error updating review:', error);
            }
        } else {
            try {
                const newReview = await reviewService.addReview(reviewData, token);
                setReviews([...reviews, newReview.data]);
            } catch (error) {
                console.error('Error adding review:', error);
            }
        }
    };

    return (
        <div className="profile-container">
            <h2>Your Reviews</h2>
            <ReviewForm onSubmit={handleFormSubmit} review={editingReview} />

            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review._id} className="review-item">
                        <h3>{review.restaurantName}</h3>
                        <p>{review.reviewText}</p>
                        <button className="edit-button" onClick={() => handleEdit(review)}>Edit</button>
                        <button className="delete-button" onClick={() => handleDelete(review._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
