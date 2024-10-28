import { useState } from 'react';
import './formStyles.css'; // Ensure that this path is correct
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

            if (result && result.message === 'User registered successfully') {
                setSuccess(true);
                setError('');
            } else {
                setError(result.message || 'Signup failed. Please try again.');
            }
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-header">Sign Up</h2>
            {success ? (
                <p className="success-message">Signup successful!</p>
            ) : (
                <>
                    {error && <p className="error-message">{error}</p>}
                    <form className="auth-form" onSubmit={handleSubmit}>
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-input"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-input"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <button
                            className="form-button"
                            type="submit"
                            disabled={formData.password !== formData.confirmPassword}
                        >
                            Sign Up
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Signup;
