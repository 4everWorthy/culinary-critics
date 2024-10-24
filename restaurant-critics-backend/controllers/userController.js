const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Received signup request with data:', { username, email, password });

  if (!username || !email || !password) {
    console.log('Validation failed: Missing fields');
    return res.status(400).json({ message: 'Please provide username, email, and password' });
  }

  try {
    const userExists = await User.findOne({ $or: [{ email }, { username }] });
    if (userExists) {
      console.log('User already exists:', userExists);
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('User registered successfully:', newUser);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request with data:', { email, password });

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log('User logged in successfully:', user);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
