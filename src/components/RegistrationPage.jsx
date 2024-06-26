import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, form);
            alert('Registration successful');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="mb-4 p-2 border rounded w-full" />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="mb-4 p-2 border rounded w-full" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="mb-4 p-2 border rounded w-full" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} className="mb-4 p-2 border rounded w-full" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
        </form>
    );
};

export default RegistrationPage;
