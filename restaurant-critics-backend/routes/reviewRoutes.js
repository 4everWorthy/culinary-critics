const express = require('express');
const multer = require('multer'); // Import multer for file uploads
const path = require('path'); // Import path for absolute directory handling
const {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware'); // Import JWT authentication middleware

const router = express.Router();

// Set up multer storage and file filter with an absolute path for the uploads directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // Use absolute path for 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename with timestamp
  },
});

const fileFilter = (req, file, cb) => {
  // Only accept image file types
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter }); // Create multer instance

// Routes
router.get('/', getReviews); // Public route to get all reviews
router.post('/', authMiddleware, upload.single('image'), addReview); // Protected route to add a review with image upload
router.put('/:id', authMiddleware, upload.single('image'), updateReview); // Protected route to update a review with image upload
router.delete('/:id', authMiddleware, deleteReview); // Protected route to delete a review

module.exports = router;
