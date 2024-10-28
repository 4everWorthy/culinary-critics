import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './formStyles.css'; // Ensure that this path is correct
import { login } from '../services/authService'; // Using named export

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await login({
                email: formData.email,
                password: formData.password,
            });

            if (result && result.message === 'Login successful') {
                setSuccess(true);
                setError('');
                localStorage.setItem('token', result.token); // Save the JWT token in localStorage
                navigate('/profile'); // Redirect to profile page after successful login
            } else {
                setError('Invalid login credentials. Please try again.');
            }
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Invalid login credentials. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-header">Login</h2>
            {success ? (
                <p className="success-message">Login successful! Redirecting...</p>
            ) : (
                <>
                    {error && <p className="error-message">{error}</p>}
                    <form className="auth-form" onSubmit={handleSubmit}>
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
                        <button className="form-button" type="submit">Login</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Login;
