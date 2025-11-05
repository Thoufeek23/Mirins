import React from 'react';
//import { Link } from 'react-router-dom';
import './Services.css'; // Uses the updated CSS file below

// 1. Data array for services
// In a real app, this might come from an API
const servicesData = [
  {
    id: 'cardiology',
    title: 'The Mirins Heart Institute',
    description: 'Comprehensive heart care including diagnostics, interventions, and rehabilitation.',
  image: '/heart.png',
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics & Sports Medicine',
    description: 'Advanced care for bone, joint, and muscular disorders, helping you get back to your peak.',
  image: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=500',
  },
  {
    id: 'oncology',
    title: 'Oncology & Cancer Care',
    description: 'Combining breakthrough research with compassionate, personalized treatment plans.',
  image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500',
  },
  {
    id: 'womens-health',
    title: "Women's Health & Maternity",
    description: 'A lifetime of specialized care, from maternity to wellness and beyond.',
  image: '/imageplaceholder.png',
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    description: 'Partnering with parents to provide gentle, comprehensive care for happy, healthy kids.',
  image: '/imageplaceholder.png',
  },
  {
    id: 'neurology',
    title: 'Neurology',
    description: 'Expert treatment for complex conditions of the brain, spine, and nervous system.',
  image: '/imageplaceholder.png',
  },
  {
    id: 'emergency',
    title: 'Emergency Medicine',
    description: '24/7 emergency services with experienced trauma and acute care teams.',
  image: '/imageplaceholder.png',
  },
  // Add more service items as needed
];


// 2. Main component
const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <div className="container">
          <h1>Services & Departments</h1>
          <p>Explore our specialist departments and the world-class services we provide.</p>
        </div>
      </header>

      <div className="container">
        <section className="services-list-container">
          {/* 3. Map over the data array */}
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>
      </div>
    </div>
  );
};


// 4. ServiceCard sub-component
const ServiceCard = ({ service }) => {
  return (
    // This card uses the 'lift-on-hover' class from index.css
    <div className="service-card lift-on-hover">
      <img src={service.image} alt={service.title} className="service-card-image" />
      <div className="service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Services;