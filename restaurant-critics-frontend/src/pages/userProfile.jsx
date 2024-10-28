// pages/userProfile.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import reviewService from '../services/reviewService';
import ReviewForm from '../components/ReviewForm/reviewForm';
import './formStyles.css';

const UserProfile = () => {
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
      setSuccess('Review deleted successfully!');
      setError('');
    } catch (error) {
      console.error('Error deleting review:', error);
      setError('Failed to delete the review.');
      setSuccess('');
    }
  };

  const handleEdit = (review) => {
    setEditingReview(review);
    setError('');
    setSuccess('');
  };

  const handleFormSubmit = async (reviewData) => {
    try {
      if (editingReview) {
        const updatedReview = await reviewService.updateReview(editingReview._id, reviewData, token);
        setReviews(reviews.map((r) => (r._id === editingReview._id ? updatedReview.data : r)));
        setEditingReview(null);
        setSuccess('Review updated successfully!');
      } else {
        const newReview = await reviewService.addReview(reviewData, token);
        setReviews([...reviews, newReview.data]);
        setSuccess('Review submitted successfully!');
      }
      setError('');
    } catch (error) {
      console.error('Error adding/updating review:', error);
      setError('Failed to submit the review. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="profile-container">
      <h2>Your Reviews</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <ReviewForm 
        onSubmit={handleFormSubmit} 
        review={editingReview || {}} 
        setError={setError} 
        setSuccess={setSuccess} 
      />

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
