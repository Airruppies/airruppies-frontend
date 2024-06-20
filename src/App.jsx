import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import VerifyEmailPage from './components/VerifyEmailPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage />
    <RegistrationPage />
    <VerifyEmailPage />
    </>
  )
}

export default App
