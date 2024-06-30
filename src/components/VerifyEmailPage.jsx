import React, { useState } from 'react';
import axios from 'axios';

const VerifyEmailPage = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const [email, setEmail] = useState(''); // Assuming you have the email available somehow, maybe passed down as a prop or stored in localStorage/sessionStorage

    const handleChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://airruppies-backend.onrender.com/api/v1/verify-email',
                { email, verificationCode },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            console.log('Email verification successful:', response.data);
            alert('Email verification successful');
            // Handle successful verification (e.g., redirect to login page)
        } catch (error) {
            console.error('Email verification failed:', error);
            alert('Email verification failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Verify Email</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Verification Code</label>
                        <input
                            type="text"
                            name="verificationCode"
                            value={verificationCode}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
                    >
                        Verify
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyEmailPage;
