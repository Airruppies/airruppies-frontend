import { React, useState } from 'react'
import axios from 'axios'

const VerifyEmailPage = () => {

  const [code, setCode] = useState('')

  const handleChange = (e) => {
    setCode(e.target.value)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/api/v1/verify-email', { code });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <h1>Verify Email</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="code" id="code" placeholder="Code" onChange={handleChange} value={code} />
        <button type="submit">Verify</button>
      </form>
    </div>
  )
}

export default VerifyEmailPage;