import React, { useState } from 'react';
import './formStyles.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container" style={{ margin: '40px 0', display: 'flex', justifyContent: 'center' }}>
            <div className="form-container" style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="form-header">Contact Us</h2>
                {submitted ? (
                    <p className="thank-you-message">Thank you for reaching out! We'll get back to you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                                style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                                style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="form-input"
                                style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
                            ></textarea>
                        </div>

                        <button type="submit" className="form-button" style={{ width: '100%', padding: '10px', backgroundColor: '#FF8C42', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contact;