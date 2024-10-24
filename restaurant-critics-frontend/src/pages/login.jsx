// login.jsx

import { useState } from 'react';
import { login } from '../services/authService'; // Using named export

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        try {
            const result = await login({
                email: formData.email,
                password: formData.password,
            });
            if (result && result.message === 'Login successful') {
                setSuccess(true);
                setError('');
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
                <p>Login successful!</p>
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
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button type="submit">Login</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default Login;
