import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link>
        <Link to="/auth">Login/Signup</Link>
        <Link to="/account">Account</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Router>
  );
}

export default App;
