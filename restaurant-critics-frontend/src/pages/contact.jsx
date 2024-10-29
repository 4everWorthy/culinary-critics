import React, { useState } from 'react';
//import './index.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle form submission, such as sending data to a server
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container" style={{ margin: '40px 0' }}>
            <h2>Contact Us</h2>
            {submitted ? (
                <p className="thank-you-message">Thank you for reaching out! We'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="form-button" style={{ width: 'auto', padding: '10px 20px' }}>Submit</button>
                </form>
            )}
        </div>
    );
}

export default Contact;
