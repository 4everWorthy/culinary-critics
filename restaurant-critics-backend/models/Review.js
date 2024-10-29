const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true
  },
  reviewerName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  reviewText: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: '', // Stores the relative path or URL of the uploaded image
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', reviewSchema);
