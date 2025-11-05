import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import the new styles

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
            <img src="/mirinsbuilding.png" alt="Mirins Hospital original building" />
          </div>
        </section>

        {/* --- 3. Leadership Section --- */}
        <section className="leadership-section">
          <h2>Meet Our Leaders</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <img src="/profilemale.png" alt="Michael R." />
              <h3>Noufal Malik</h3>
              <p>Chief Executive Officer (CEO)</p>
            </div>
            <div className="leader-card">
              <img src="/profilefemale.png" alt="Dr. Sarah Chen" />
              <h3>Dr. Irshath Nasreen</h3>
              <p>Chief Medical Officer (CMO)</p>
            </div>
            <div className="leader-card">
              <img src="/profilemale.png" alt="David Kim" />
              <h3>Harish Kumar</h3>
              <p>Chief Financial Officer (CFO)</p>
            </div>
            <div className="leader-card">
              <img src="/profilefemale.png" alt="Priya Singh" />
              <h3>Priya Gopal</h3>
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