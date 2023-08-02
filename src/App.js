import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hours from './components/Hours';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hours" element={<Hours />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;