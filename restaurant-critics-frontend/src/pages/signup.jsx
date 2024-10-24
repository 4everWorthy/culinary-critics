import  { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import authService from '../services/authService.jsx';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.registerUser({
        username,
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/'; // Redirect to homepage after signup
    } catch (error) {
      console.error('Error registering user:', error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
      {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
