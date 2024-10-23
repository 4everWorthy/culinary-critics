import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../../assets/images/Logo_Culinary_Critics.png';
import './navbar.css';

function NavigationBar() {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <div className="brand-container">
                    <img
                        src={logo}  // Dynamically imported logo
                        alt="Culinary Critics Logo"
                        className="nav-logo"
                    />
                    <Navbar.Brand className="brand-text">
                        Culinary Critics
                    </Navbar.Brand>
                </div>

                <Nav className="buttons-container">
                    <Nav.Link className="review-link">Write a Review</Nav.Link>
                    <div className="auth-buttons">
                        <Button className="login-btn">Log In</Button>
                        <Button className="signup-btn">Sign Up</Button>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
