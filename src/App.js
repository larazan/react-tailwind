import React, { useState, useEffect } from 'react';
import Pages from './pages';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  
      return (
        <div className="font-poppins">
            <Router>
                <Navbar />
                <Pages />
                <Footer />
            </Router>
        </div>  
        
  );
};

export default App;