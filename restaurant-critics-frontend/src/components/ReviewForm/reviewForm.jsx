/* eslint-disable react/prop-types */
// components/ReviewForm/reviewForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "../../pages/formStyles.css";

const ReviewForm = ({ onSubmit, review = {}, setError, setSuccess }) => {
  const [restaurantName, setRestaurantName] = useState(review.restaurantName || '');
  const [reviewerName, setReviewerName] = useState(review.reviewerName || 'Anonymous');
  const [reviewText, setReviewText] = useState(review.reviewText || '');
  const [rating, setRating] = useState(review.rating || 0);
  const [image, setImage] = useState(null); // New state for image file

  useEffect(() => {
    // Update form fields if a different review is being edited
    setRestaurantName(review.restaurantName || '');
    setReviewerName(review.reviewerName || 'Anonymous');
    setReviewText(review.reviewText || '');
    setRating(review.rating || 0);
    setImage(null); // Reset image when switching reviews
  }, [review]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Set selected image file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Using FormData to include image
    const reviewData = new FormData();
    reviewData.append('restaurantName', restaurantName);
    reviewData.append('reviewerName', reviewerName);
    reviewData.append('reviewText', reviewText);
    reviewData.append('rating', rating);
    if (image) {
      reviewData.append('image', image); // Add image if selected
    }

    try {
      await onSubmit(reviewData); // Call onSubmit with the FormData object
      setError('');
      setSuccess(review._id ? 'Review updated successfully!' : 'Review submitted successfully!');

      // Reset fields if it’s a new review (not editing)
      if (!review._id) {
        setRestaurantName('');
        setReviewerName('Anonymous');
        setReviewText('');
        setRating(0);
        setImage(null); // Reset image input
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Failed to submit the review. Please try again.');
      setSuccess('');
    }
  };

  return (
      <div className="form-container">
        <h2 className="form-header">{review._id ? 'Edit Review' : 'Write a Review'}</h2>

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

          <button type="submit" className="form-button">{review._id ? 'Update Review' : 'Submit Review'}</button>
        </form>
      </div>
  );
};

export default ReviewForm;
