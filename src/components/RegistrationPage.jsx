import React from 'react'
import axios  from 'axios'

const RegistrationPage = () => {

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/api/v1/register', formData);
        }
        catch (error) {
            console.error(error);
        };
    }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} />
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} />
            <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange} value={formData.email} />
            <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={formData.password} />
            <button type="submit">Register</button>

        </form>
    </div>
  )
}

export default RegistrationPage;