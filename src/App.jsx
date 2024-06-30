import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import VerifyEmailPage from './components/VerifyEmailPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}

export default App;
