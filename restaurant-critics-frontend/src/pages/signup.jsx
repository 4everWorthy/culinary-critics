// signup.jsx

import { useState } from 'react';
import { signup } from '../services/authService'; // Using named export

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        try {
            const result = await signup({
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });

            // Log the response to further inspect the data structure
            console.log('Signup response:', result);

            // Adjust this based on the message returned from the backend
            if (result && result.message === 'User registered successfully') {
                setSuccess(true);
                setError('');
            } else {
                setError(result.message || 'Signup failed. Please try again.');
            }
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {success ? (
                <p>Signup successful!</p>
            ) : (
                <>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <button type="submit" disabled={formData.password !== formData.confirmPassword}>
                            Sign Up
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Signup;
