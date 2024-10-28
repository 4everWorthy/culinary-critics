// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images/Logo_Culinary_Critics.png';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>© Culinary Critics</p>
                    <img src={logo} alt="Culinary Critics Logo" className="footer-logo"/>
                </div>
                <div className="footer-right">
                    <a href="/about-us" className="footer-link">About Us</a>
                    <a href="/contact" className="footer-link">Contact</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;