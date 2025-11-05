// src/pages/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; // We'll create this CSS file next

// Placeholder components for icons (you can replace these with an icon library like react-icons)
const Icon = ({ name }) => <span className="icon-placeholder">[{name}]</span>;

const Homepage = () => {
  return (
    <div className="homepage">
      {/* --- 1. Hero Section --- */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="container">
            <h1>Compassionate Care. Advanced Medicine. That's the Mirins Promise.</h1>
            <p>Providing world-class, patient-centered healthcare for you and your family.</p>
          </div>
        </div>
      </section>

      {/* --- 2. Trust Block --- */}
      <section className="trust-block">
        <div className="container">
          <h2>Why Choose Mirins?</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <h3><Icon name="Star" /> Top-Ranked Specialists</h3>
              <p>Our physicians are leaders in their fields, recognized for excellence in cardiology, oncology, and more.</p>
            </div>
            <div className="trust-item">
              <h3><Icon name="Heart" /> Patient-Centered Care</h3>
              <p>We treat you like family. Your health, comfort, and trust are our highest priorities.</p>
            </div>
            <div className="trust-item">
              <h3><Icon name="Microscope" /> Advanced Technology</h3>
              <p>Leading in robotic surgery, AI diagnostics, and state-of-the-art medical innovations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Core Services --- */}
      <section className="core-services">
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="services-grid">
            {/* These cards use the 'lift-on-hover' class from index.css */}
            <div className="service-card lift-on-hover">
              <img src="/heart.png" alt="Heart Care" />
              <div className="service-card-content">
                <h3>The Mirins Heart Institute</h3>
                <p>Comprehensive cardiac care, from prevention to advanced surgical procedures.</p>
                <Link to="/services/heart">Learn More</Link>
              </div>
            </div>
            <div className="service-card lift-on-hover">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500" alt="Cancer Care" />
              <div className="service-card-content">
                <h3>Oncology & Cancer Care</h3>
                <p>Combining breakthrough research with compassionate, personalized treatment plans.</p>
                <Link to="/services/oncology">Learn More</Link>
              </div>
            </div>
            <div className="service-card lift-on-hover">
              <img src="https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=500" alt="Orthopedics" />
              <div className="service-card-content">
                <h3>Orthopedics & Sports Medicine</h3>
                <p>Getting you back to your peak performance with expert surgical and rehab teams.</p>
                <Link to="/services/orthopedics">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* --- 4. Testimonial Block --- */}
      <section className="testimonial-block">
        <div className="testimonial-content">
          <div className="container">
            <blockquote>
              "The entire team at Mirins, from the nurses to the surgeons, gave me my life back. I've never felt so cared for."
            </blockquote>
            <cite>- Aarav Patel, Cardiology Patient</cite>
          </div>
        </div>
      </section>

      {/* --- 5. News & Events --- */}
      <section className="news-events">
        <div className="container">
          <h2>News & Community</h2>
          <div className="news-grid">
            <article className="news-item">
              <img src="/robot.png" alt="Robotic Surgery" />
              <div className="news-content">
                <span className="news-category">Hospital News</span>
                <h3>Mirins Opens New Robotic Surgery Wing</h3>
                <p>Our new state-of-the-art facility is now open, offering minimally invasive procedures.</p>
                {/*<Link to="/events/1">Learn More</Link>*/}
              </div>
            </article>
            <article className="news-item">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500" alt="Health Fair" />
              <div className="news-content">
                <span className="news-category">Community</span>
                <h3>Free Community Health Fair - Nov 15th</h3>
                <p>Join us for free screenings, wellness tips, and family-friendly activities.</p>
                {/*<Link to="/events/1">Learn More</Link>*/}
              </div>
            </article>
            <article className="news-item">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500" alt="Doctor Research" />
              <div className="news-content">
                <span className="news-category">Research</span>
                <h3>Dr. Karthikeya's Research Published</h3>
                <p>Dr. karthikeya's groundbreaking study on AI in diagnostics featured in top medical journal.</p>
                {/*<Link to="/events/1">Learn More</Link>*/}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;