import React, { useState } from 'react';

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
            <div style={{ width: '100%', maxWidth: '600px' }}>
                <h2>Contact Us</h2>
                {submitted ? (
                    <p className="thank-you-message">Thank you for reaching out! We'll get back to you soon.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="form-group" style={{ width: '30%', maxWidth: '400px' }}>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div className="form-group" style={{ width: '30%', maxWidth: '400px' }}>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div className="form-group" style={{ width: '30%', maxWidth: '400px' }}>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            ></textarea>
                        </div>

                        <button type="submit" className="form-button" style={{ width: 'auto', padding: '10px 20px' }}>Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contact;
