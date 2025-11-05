import React, { useState } from 'react';
import './Contact.css'; // Import the new styles

const Contact = () => {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a server
    alert('Thank you for your message. We will get back to you soon.');
    // Clear the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact & Locations</h1>
        
        <div className="contact-layout">
          {/* --- Left Column --- */}
          <div className="contact-left-col">
            {/* Google Maps Embed */}
            <div className="map-container">
              <iframe
                title="Mirins Main Hospital Location"
                src="https://www.google.com/maps?q=10.4286451,79.3146717&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
              Address: No 125, AVK Street, Pattukottai-614601 —
              <a href="https://www.google.com/maps/place/New+Rajamani+theatre/@10.4286504,79.3120968,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00009789ee10b3:0xd4872446268070f9!8m2!3d10.4286451!4d79.3146717!16s%2Fg%2F1tg_vj2m?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </p>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>General Inquiries</h2>
              <p>For non-urgent matters, please use the form below.</p>
              
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>

          {/* --- Right Column --- */}
          <div className="contact-right-col">
            {/* Key Phone Numbers */}
            <div className="key-numbers">
              <h2>Key Phone Numbers</h2>
              <ul>
                <li className="emergency">
                  Emergency <span>108</span>
                </li>
                <li>
                  Patient Relations <span>+91 1234567890</span>
                </li>
                <li>
                  Main Switchboard <span>+91 1234567890</span>
                </li>
              </ul>
            </div>
            
            {/* Location Cards */}
            <div className="location-card">
              <h3>Mirins Main Hospital</h3>
              <p>
                <strong>Address:</strong> No 125, AVK Street, Pattukottai-614601<br />
                <strong>Phone:</strong> +91 1234567890<br />
                <strong>Hours:</strong> Open 24/7 for Emergency
              </p>
            </div>
            {/*
            <div className="location-card">
              <h3>Mirins Urgent Care - North</h3>
              <p>
                <strong>Address:</strong> 456 Clinic Ave, Northside, 45680<br />
                <strong>Phone:</strong> (123) 555-0200<br />
                <strong>Hours:</strong> 8:00 AM - 9:00 PM Daily
              </p>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;