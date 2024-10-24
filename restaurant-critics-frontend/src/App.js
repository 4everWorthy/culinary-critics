// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';  // Import the Signup component
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />  {/* Add the Signup route */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
