import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

// ---------------------- client/src/pages/Home.jsx ----------------------
import React from 'react';

function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Welcome to CryptoP2P Market</h1>
      <p className="text-gray-600">Buy & Sell Crypto securely. Peer-to-Peer.</p>
    </div>
  );
}

export default Home;
