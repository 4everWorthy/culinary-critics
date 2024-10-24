import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { login } from '../services/authService'; // Using named export

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate(); // Initialize navigate for redirection

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
        } catch (err) {
            setError('Invalid login credentials. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {success ? (
                <p>Login successful! Redirecting...</p>
            ) : (
                <>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Login;
