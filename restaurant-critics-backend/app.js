const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import DB connection function
const cors = require('cors');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS to allow requests from different origins

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

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Listen on all network interfaces to allow access from other devices on the network
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://<your-ip>:${PORT}`);
});
