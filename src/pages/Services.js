import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <div className="container">
        <header className="services-header">
          <h1>Services & Departments</h1>
          <p>Explore our specialist departments and the services we provide.</p>
        </header>

        <section className="services-list">
          <div className="service-item">
            <h3>Cardiology</h3>
            <p>Comprehensive heart care including diagnostics, interventions, and rehabilitation.</p>
          </div>

          <div className="service-item">
            <h3>Orthopedics</h3>
            <p>Advanced care for bone, joint and muscular disorders.</p>
          </div>

          <div className="service-item">
            <h3>Emergency Medicine</h3>
            <p>24/7 emergency services with experienced trauma and acute care teams.</p>
          </div>

          {/* Add more service items as needed */}
        </section>
      </div>
    </div>
  );
};

export default Services;
