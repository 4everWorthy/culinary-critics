//import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/" className="mx-3">Culinary Critics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/aboutUs">About Us</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Button variant="outline-light" className="mx-2" href="/login">Log In</Button>
                    <Button variant="light" href="/signup">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;