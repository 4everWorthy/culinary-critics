import axios from 'axios';

const API_REVIEWS_URL = 'http://localhost:5000/api/reviews';

// Fetch all reviews
const getAllReviews = async () => {
  return await axios.get(API_REVIEWS_URL);
};

// Add a new review
const addReview = async (reviewData, token) => {
  const config = {
    headers: {
      'x-auth-token': token,  // JWT token for protected routes
    },
  };
  return await axios.post(API_REVIEWS_URL, reviewData, config);
};

export default {
  getAllReviews,
  addReview,
};
