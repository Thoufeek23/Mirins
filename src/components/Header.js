// src/components/Header.js
import React, { useState } from 'react';
// Import NavLink instead of Link to get the "active" class for styling
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css'; // Your NEWLY updated CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">      
      {/* --- 2. MAIN NAVIGATION --- */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Use Link for the logo as it's not a nav item */}
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            Mirins <strong>Multispeciality Hospital</strong>
          </Link>

          {/* Mobile menu toggle */}
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <FiX size={22} aria-hidden="true" /> : <FiMenu size={22} aria-hidden="true" />}
          </button>

          {/* Use NavLink here for the active class styling */}
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
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