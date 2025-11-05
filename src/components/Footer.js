// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // We'll create this next

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">Mirins <strong>Multispeciality Hospital</strong></h3>
            <p>Compassionate Care. Advanced Medicine.</p>
            <div className="social-links">
              {/* Add social media icons here */}
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/find-a-doctor">Find a Doctor</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>For Patients</h4>
            <ul>
              <li><Link to="/patients-visitors">Patients & Visitors</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <p>No 125, AVK Street, Pattukottai-614601</p>
            <p><strong>Phone:</strong> +91 1234567890</p>
            <p><strong>Emergency:</strong> 108</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mirins Multispeciality Hospital. All rights reserved.</p>
          {/*
          <p>
            <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link>
          </p>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;