// Import required dependencies
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Loads environment variables from .env file

// Define the JWT secret and expiry duration
const jwtSecret = process.env.JWT_SECRET || 'yourSecretKey'; // Use a default secret if none is provided in .env
const jwtExpiry = process.env.JWT_EXPIRY || '1h'; // Default to 1 hour if not set in .env

/**
 * Generates a JWT token for a given user.
 * @param {Object} user - The user object. Should contain _id and email.
 * @returns {string} - The generated JWT token.
 */
const generateToken = (user) => {
  // Payload can include any necessary user data (id, email, roles, etc.)
  const payload = { id: user._id, email: user.email }; // If you have roles or other claims, you can include them here

  // NEW: Log a warning if the secret is the default value, for security awareness
  if (jwtSecret === 'yourSecretKey') {
    console.warn('Warning: Using default JWT secret. Consider setting a strong secret in the .env file.');
  }

  // Return the signed JWT
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiry });
};

/**
 * Verifies a given JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {Object} - The decoded token payload if verification is successful.
 * @throws {Error} - If the token is invalid or expired.
 */
const verifyToken = (token) => {
  try {
    // Verify the token and return the decoded payload
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    // UPDATED: Provide more detailed error handling without exposing sensitive info
    if (error.name === 'TokenExpiredError') {
      throw new Error('Token has expired');
    } else if (error.name === 'JsonWebTokenError') {
      throw new Error('Invalid token');
    } else {
      throw new Error('Token verification failed');
    }
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
