import React, { useState, useEffect } from 'react';
import reviewService from '../services/reviewService'; // To fetch, add, edit, delete reviews
import ReviewForm from '../components/ReviewForm/reviewForm.jsx'; // Form to add new review

const UserProfile = () => {
    const [reviews, setReviews] = useState([]);
    const [editingReview, setEditingReview] = useState(null); // Track review being edited
    const token = localStorage.getItem('token'); // Fetch JWT token from local storage

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await reviewService.getAllReviews();
                setReviews(response.data); // Load the user's reviews
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []);

    // Function to handle review deletion
    const handleDelete = async (reviewId) => {
        try {
            await reviewService.deleteReview(reviewId, token); // Call delete service
            setReviews(reviews.filter((review) => review._id !== reviewId)); // Update UI after deletion
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };

    // Function to handle review editing
    const handleEdit = (review) => {
        setEditingReview(review); // Set the selected review for editing
    };

    // Function to handle adding or updating review
    const handleFormSubmit = async (reviewData) => {
        if (editingReview) {
            // If editing, update the review
            try {
                await reviewService.updateReview(editingReview._id, reviewData, token);
                setReviews(reviews.map((r) => (r._id === editingReview._id ? reviewData : r))); // Update the review list
                setEditingReview(null); // Reset after editing
            } catch (error) {
                console.error('Error updating review:', error);
            }
        } else {
            // If adding a new review
            try {
                const newReview = await reviewService.addReview(reviewData, token);
                setReviews([...reviews, newReview.data]); // Add new review to list
            } catch (error) {
                console.error('Error adding review:', error);
            }
        }
    };

    return (
        <div>
            <h2>Your Reviews</h2>
            <ReviewForm token={token} onSubmit={handleFormSubmit} review={editingReview} />

            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review._id}>
                        <h3>{review.restaurantName}</h3>
                        <p>{review.reviewText}</p>
                        <button onClick={() => handleEdit(review)}>Edit</button>
                        <button onClick={() => handleDelete(review._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
