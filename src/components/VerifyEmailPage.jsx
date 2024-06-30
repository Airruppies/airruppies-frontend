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
            const response = await axios.post('https://airruppies-backend.onrender.com/api/users/verify-email', { email, verificationCode }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Email verification successful:', response.data);
            // Handle successful verification (e.g., redirect to login page)
        } catch (error) {
            console.error('Email verification failed:', error);
            alert('Email verification failed');
        }
    };

    return (
        <div>
            <h2>Verify Email</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="verificationCode" value={verificationCode} onChange={handleChange} placeholder="Enter verification code" required />
                <button type="submit">Verify</button>
            </form>
        </div>
    );
};

export default VerifyEmailPage;
