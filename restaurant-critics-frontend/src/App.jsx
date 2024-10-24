import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BusinessDetails from './pages/BusinessDetails';
import UserProfile from './pages/UserProfile';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/business/:id" element={<BusinessDetails />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;  // Make sure to export App as default
