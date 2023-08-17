import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Changed import name from BrowserRouter to Router
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CatFactTable from './CatFactTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table1" element={<CatFactTable />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
