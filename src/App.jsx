import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import VerifyEmailPage from './components/VerifyEmailPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        </Routes>
      </Router>
  );
}

export default App;
