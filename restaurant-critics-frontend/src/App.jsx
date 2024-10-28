// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import UserProfile from './pages/userProfile'; // Ensure this is imported
import WriteReview from './pages/writeReview';
import AboutUs from './pages/aboutUs'; // Import the About Us component
import Contact from './pages/contact.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile />} /> {/* Add this route */}
          <Route path="/write-review" element={<WriteReview />} />
          <Route path="/about-us" element={<AboutUs />} /> {/* Add this route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
