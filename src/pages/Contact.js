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
            {/* Google Maps Embed Placeholder */}
            <div className="map-container">
              [Google Maps Embed Placeholder]
            </div>

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
                  Emergency <span>911</span>
                </li>
                <li>
                  Patient Relations <span>(123) 456-7892</span>
                </li>
                <li>
                  Main Switchboard <span>(123) 555-0100</span>
                </li>
              </ul>
            </div>
            
            {/* Location Cards */}
            <div className="location-card">
              <h3>Mirins Main Hospital</h3>
              <p>
                <strong>Address:</strong> 123 Health St, Wellness City, 45678<br />
                <strong>Phone:</strong> (123) 555-0100<br />
                <strong>Hours:</strong> Open 24/7 for Emergency
              </p>
            </div>
            
            <div className="location-card">
              <h3>Mirins Urgent Care - North</h3>
              <p>
                <strong>Address:</strong> 456 Clinic Ave, Northside, 45680<br />
                <strong>Phone:</strong> (123) 555-0200<br />
                <strong>Hours:</strong> 8:00 AM - 9:00 PM Daily
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;