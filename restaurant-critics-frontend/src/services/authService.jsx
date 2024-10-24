import axios from 'axios';

const API_AUTH_URL = 'http://localhost:5000/api/users';

// Login a user
const loginUser = async (credentials) => {
  return await axios.post(`${API_AUTH_URL}/login`, credentials);
};

// Register a new user
const registerUser = async (userData) => {
  return await axios.post(`${API_AUTH_URL}/register`, userData);
};

export default {
  loginUser,
  registerUser,
};
