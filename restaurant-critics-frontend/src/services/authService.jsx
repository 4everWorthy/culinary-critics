// authService.jsx

export const signup = async (formData) => {
    try {
        const response = await fetch('http://localhost:5000/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        return data; // Returning the response to handle it in signup.jsx
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
};

export const login = async (formData) => {
    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        return data; // Returning the response to handle it in login.jsx
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};
