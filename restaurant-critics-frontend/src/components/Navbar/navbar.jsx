// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/images/Logo.png'; // Adjust the path as needed
import './navbar.css';

function NavigationBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/login'); // Redirect to login page
  };

  return (
    <Navbar  variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <img
            src={logo}
            alt="Culinary Critics Logo"
            className="logo"
        />
        <Navbar.Brand as={Link} to="/" className="text-light">
          <span className="brand-text">Culinary Critics</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about-us" className="text-light">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>
            <Nav.Link as={Link} to="/write-review" className="text-light">Write a Review</Nav.Link>
            {token ? (
                // Display Logout button if user is logged in
                <Nav.Link>
                  <Button variant="outline-light" className="me-2" onClick={handleLogout}>Logout</Button>
                </Nav.Link>
            ) : (
                // Display Login and Sign Up buttons if user is not logged in
                <>
                  <Nav.Link as={Link} to="/login">
                    <Button variant="outline-light" className="me-2">Log In</Button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <Button variant="warning">Sign Up</Button>
                  </Nav.Link>
                </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
