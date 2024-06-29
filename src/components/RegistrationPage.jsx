import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/api/users/register`, form);
            alert('Registration successful');
        } catch (error) {
            console.error(error);
            setError('Registration failed');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
