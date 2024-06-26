import React, { useState } from 'react';
import axios from 'axios';

const VerifyEmailPage = () => {
    const [code, setCode] = useState('');

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/verify`, { code });
            alert('Verification successful');
        } catch (error) {
            console.error(error);
            alert('Verification failed');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
            <input type="text" name="code" placeholder="6-digit code" onChange={handleChange} className="mb-4 p-2 border rounded w-full" />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Verify</button>
        </form>
    );
};

export default VerifyEmailPage;
