// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './formStyles.css'; // Use the shared styles
import reviewService from '../services/reviewService';

const WriteReview = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [reviewerName, setReviewerName] = useState('Anonymous'); // New state for reviewer name
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null); // State for the uploaded image
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // State for success messages

  const token = localStorage.getItem('token'); // Retrieve the token from local storage

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setError('You need to be logged in to submit a review.');
      return;
    }

    // FormData for both text and file data
    const reviewData = new FormData();
    reviewData.append('restaurantName', restaurantName);
    reviewData.append('reviewerName', reviewerName || 'Anonymous');
    reviewData.append('reviewText', reviewText);
    reviewData.append('rating', rating);

    if (image) {
      reviewData.append('image', image); // Append the image if there’s one
    }

    // Debugging: Log each entry in FormData
    console.log('Submitting review data:');
    for (let [key, value] of reviewData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      // Ensure token is included in the addReview request
      const response = await reviewService.addReview(reviewData, token);

      console.log('Review added successfully:', response.data); // Log successful response

      // Reset form fields after successful submission
      setRestaurantName('');
      setReviewerName('Anonymous');
      setReviewText('');
      setRating(0);
      setImage(null);

      // Clear any previous errors and set success message
      setError('');
      setSuccess('Review submitted successfully!');
    } catch (error) {
      console.error('Error adding review:', error.response?.data || error.message);
      setError('Failed to submit the review. Please try again.');
      setSuccess(''); // Clear any previous success message
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set the image file in the state
  };

  return (
      <div className="form-container">
        <h2 className="form-header">Write a Review</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>} {/* Success message */}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
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

          <label className="form-label">Upload Image</label>
          <input
              type="file"
              className="form-input"
              onChange={handleImageChange}
              accept="image/*"
          />

          <button type="submit" className="form-button">Submit Review</button>
        </form>
      </div>
  );
};

export default WriteReview;
