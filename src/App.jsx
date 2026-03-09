import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import AccountSelection from './pages/AccountSelection';
import SignupForm from './pages/SignupForm';
import Explore from './pages/Explore';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<AccountSelection />} />
                    <Route path="/signup/form" element={<SignupForm />} />
                    <Route path="/explore" element={<Explore />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
