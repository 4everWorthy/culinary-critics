const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import DB connection function
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Test Route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Import Routes
const businessRoutes = require('./routes/businessRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');

// Use Routes
app.use('/api/businesses', businessRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

// Set the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
