// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../../assets/images/Logo_Culinary_Critics.png'; // Adjust the path as needed
import './navbar.css';

function NavigationBar() {
  return (
    <Navbar  variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light">
          <img
            src={logo} // Use the correct imported path
            alt="Culinary Critics Logo"
            className="logo"
          />
          <span className="brand-text">Culinary Critics</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about-us" className="text-light">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">Contact</Nav.Link>
            <Nav.Link as={Link} to="/write-review" className="text-light">Write a Review</Nav.Link>
            <Nav.Link as={Link} to="/login">
              <Button variant="outline-light" className="me-2">Log In</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              <Button variant="warning">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;