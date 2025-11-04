// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create this CSS file next

const Header = () => {
  return (
    <header className="site-header">      
      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <Link to="/" className="logo">
            Mirins <strong>Multispeciality Hospital</strong>
          </Link>
          <ul className="nav-links">
            <li><Link to="/find-a-doctor">Find a Doctor</Link></li>
            <li><Link to="/services">Services & Departments</Link></li>
            <li><Link to="/patients-visitors">Patients & Visitors</Link></li>
            <li><Link to="/about">About Mirins</Link></li>
            <li><Link to="/contact">Contact & Locations</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;