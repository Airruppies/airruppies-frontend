import React from 'react'
import axios  from 'axios'

const LoginPage = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <>
        <div className="container max-auto">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </>
  )
}

export default LoginPage