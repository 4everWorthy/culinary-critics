// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './formStyles.css'; // Use the shared styles
import reviewService from '../services/reviewService';

const WriteReview = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [reviewerName, setReviewerName] = useState('Anonymous'); // New state for reviewer name
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // State for success messages

  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError('You need to be logged in to submit a review.');
      return;
    }

    const reviewData = {
      restaurantName,
      reviewerName, // Include reviewerName in the data
      reviewText,
      rating,
    };

    console.log('Submitting review data:', reviewData); // Check the data before sending

    try {
      // Make sure token is included in the addReview request
      const response = await reviewService.addReview(reviewData, token);

      console.log('Review added successfully:', response.data); // Log the successful response

      // Reset form fields after successful submission
      setRestaurantName('');
      setReviewerName('Anonymous');
      setReviewText('');
      setRating(0);

      // Clear any previous errors and set success message
      setError('');
      setSuccess('Review submitted successfully!');
    } catch (error) {
      console.error('Error adding review:', error.response?.data || error.message);
      setError('Failed to submit the review. Please try again.');
      setSuccess(''); // Clear any previous success message
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">Write a Review</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>} {/* Success message */}

      <form onSubmit={handleSubmit}>
        <label className="form-label">Restaurant Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter the restaurant name"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          required
        />

        <label className="form-label">Your Name (Optional)</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter your name"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value || 'Anonymous')}
        />

        <label className="form-label">Review</label>
        <textarea
          className="form-input"
          placeholder="Write your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        />

        <label className="form-label">Rating</label>
        <input
          type="number"
          className="form-input"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          min="1"
          max="5"
          required
        />

        <button type="submit" className="form-button">Submit Review</button>
      </form>
    </div>
  );
};

export default WriteReview;
