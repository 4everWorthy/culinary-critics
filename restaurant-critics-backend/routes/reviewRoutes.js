const express = require('express');
const {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware'); // Import JWT authentication middleware

const router = express.Router();

// Routes
router.get('/', getReviews); // Public route to get all reviews
router.post('/', authMiddleware, addReview); // Protected route to add a review
router.put('/:id', authMiddleware, updateReview); // Protected route to update a review
router.delete('/:id', authMiddleware, deleteReview); // Protected route to delete a review

module.exports = router;
