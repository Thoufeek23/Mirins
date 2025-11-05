// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import FindADoctor from './pages/FindADoctor';
import Services from './pages/Services';
import Visitors from './pages/Visitors';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 1. ADD THIS IMPORT
import DoctorProfile from './pages/DoctorProfile'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/find-a-doctor" element={<FindADoctor />} />
          
          {/* 2. ADD THIS NEW DYNAMIC ROUTE */}
          <Route path="/doctor/:id" element={<DoctorProfile />} /> 

          <Route path="/services" element={<Services />} />
          <Route path="/patients-visitors" element={<Visitors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;