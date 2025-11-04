// src/components/Header.js
import React from 'react';
// Import NavLink instead of Link to get the "active" class for styling
import { NavLink, Link } from 'react-router-dom';
import './Header.css'; // Your NEWLY updated CSS file

const Header = () => {
  return (
    <header className="site-header">      
      {/* --- 2. MAIN NAVIGATION --- */}
      <nav className="main-nav">
        <div className="container">
          {/* Use Link for the logo as it's not a nav item */}
          <Link to="/" className="logo">
            Mirins <strong>Multispeciality Hospital</strong>
          </Link>
          
          {/* Use NavLink here for the active class styling */}
          <ul className="nav-links">
            <li><NavLink to="/find-a-doctor">Our Doctors</NavLink></li>
            <li><NavLink to="/services">Departments</NavLink></li>
            <li><NavLink to="/patients-visitors">Visitors</NavLink></li>
            <li><NavLink to="/about">About us</NavLink></li>
            <li><NavLink to="/contact">Contact us</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;