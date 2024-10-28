/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import UserProfile from './pages/userProfile'; // Ensure this is imported
import WriteReview from './pages/writeReview';
import AboutUs from './pages/aboutUs'; // Import the About Us component

import './App.css';

// Protected Route component
function ProtectedRoute({ element }) {
  const token = localStorage.getItem('token');
  return token ? element : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/profile" 
            element={<ProtectedRoute element={<UserProfile />} />} // Protect Profile route
          />
          <Route 
            path="/write-review" 
            element={<ProtectedRoute element={<WriteReview />} />} // Protect Write Review route
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
