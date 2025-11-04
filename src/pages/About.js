import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import the new styles

// Placeholder images
const historyImg = 'https://images.unsplash.com/photo-1580281657527-47f249e0f90a?w=600';
const leader1 = 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400';
const leader2 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400';
const leader3 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400';
const leader4 = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400';

const About = () => {
  return (
    <div className="about-page">
      {/* --- 1. Mission Section --- */}
      <div className="mission-section">
        <div className="container">
          <h1>Our Mission & Values</h1>
          <p>
            "To provide compassionate, accessible, high-quality care to our community,
            advancing medicine through research and education, and treating every
            patient with the dignity and respect they deserve."
          </p>
        </div>
      </div>

      <div className="container">
        {/* --- 2. History Section --- */}
        <section className="history-section">
          <div className="history-content">
            <h2>Our History: 50 Years of Care</h2>
            <p>
              Founded in 1974 as a small community clinic, Mirins Multispeciality Hospital has grown into a regional leader in healthcare. From our humble beginnings, our goal has remained the same: to be a place of healing and hope.
            </p>
            <p>
              With the opening of our Advanced Technology Wing in 2021, we continue to blend compassionate, patient-first care with the latest medical innovations.
            </p>
            <Link to="/contact" className="btn btn-primary">Join Our Team</Link>
          </div>
          <div className="history-image">
            <img src={historyImg} alt="Mirins Hospital original building" />
          </div>
        </section>

        {/* --- 3. Leadership Section --- */}
        <section className="leadership-section">
          <h2>Meet Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <img src={leader1} alt="Michael R." />
              <h3>Michael R.</h3>
              <p>Chief Executive Officer (CEO)</p>
            </div>
            <div className="leader-card">
              <img src={leader2} alt="Dr. Sarah Chen" />
              <h3>Dr. Sarah Chen</h3>
              <p>Chief Medical Officer (CMO)</p>
            </div>
            <div className="leader-card">
              <img src={leader3} alt="David Kim" />
              <h3>David Kim</h3>
              <p>Chief Financial Officer (CFO)</p>
            </div>
            <div className="leader-card">
              <img src={leader4} alt="Priya Singh" />
              <h3>Priya Singh, RN</h3>
              <p>Chief Nursing Officer (CNO)</p>
            </div>
          </div>
        </section>

        {/* --- 4. Awards & Accreditations --- */}
        <section className="awards-section">
          <h2>Awards & Accreditations</h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <p>#1 Hospital in Cardiology</p>
            </div>
            <div className="award-item">
              <div className="award-icon">⭐</div>
              <p>Magnet Recognized (Nursing)</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🥇</div>
              <p>Top Performer, Patient Safety</p>
            </div>
            <div className="award-item">
              <div className="award-icon">✅</div>
              <p>Joint Commission Accredited</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;