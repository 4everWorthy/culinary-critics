const Review = require('../models/Review');
const path = require('path'); // For handling file paths

// Get all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new review with image handling
exports.addReview = async (req, res) => {
  console.log('Received review data:', req.body); // Log the received data

  // Retrieve text fields from req.body
  const { restaurantName, reviewerName, rating, reviewText } = req.body;

  // Retrieve file data from req.file if an image was uploaded
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Use relative URL

  // Validation checks for required fields
  if (!restaurantName || !reviewText || !rating) {
    return res.status(400).json({ message: 'Restaurant name, review text, and rating are required.' });
  }

  // Ensure the rating is within the expected range (1-5)
  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: 'Rating must be between 1 and 5.' });
  }

  // Create new review document with or without imageUrl
  const review = new Review({ restaurantName, reviewerName, rating, reviewText, imageUrl });

  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing review with image handling
exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { restaurantName, reviewerName, rating, reviewText } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : req.body.imageUrl; // Use new image if uploaded

  try {
    const updatedReview = await Review.findByIdAndUpdate(
        id,
        { restaurantName, reviewerName, rating, reviewText, imageUrl },
        { new: true } // Return the updated document
    );

    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a review
exports.deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
