import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import authService from '../services/authService.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.loginUser({ email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/'; // Redirect to homepage after login
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Log In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
