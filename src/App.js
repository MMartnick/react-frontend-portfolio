import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />          {/* Home Page */}
        <Route path="/about" element={<About />} />    {/* About Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
