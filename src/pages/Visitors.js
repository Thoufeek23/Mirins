import React from 'react';
import Accordion from '../components/Accordion'; // Import the new component
import './Visitors.css'; // Import the page styles

const Visitors = () => {
  return (
    <div className="visitors-page">
      <div className="container">
        <div className="visitors-header">
          <h1>Patients & Visitors</h1>
          <p>All the practical information you need for a smooth and comfortable visit, all in one place.</p>
        </div>

        <div className="accordion-container">
          {/* --- Accordion Item 1 --- */}
          <Accordion title="Locations & Parking">
            <p>Our main campus is conveniently located downtown. We also have several clinics to serve you closer to home.</p>
            <div className="map-placeholder">
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
            <p style={{ marginTop: '0.5rem' }}>
              No 125, AVK Street, Pattukottai-614601 — <a href="https://www.google.com/maps/place/New+Rajamani+theatre/@10.4286504,79.3120968,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00009789ee10b3:0xd4872446268070f9!8m2!3d10.4286451!4d79.3146717!16s%2Fg%2F1tg_vj2m?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </p>
          </Accordion>

          {/* --- Accordion Item 2 --- */}
          <Accordion title="Visiting Hours & Guidelines">
            <div className="visitor-content-container">
              <div>
                <h4>General Visiting Hours</h4>
                <ul>
                  <li>Daily: 10:00 AM – 8:00 PM</li>
                </ul>
                
                <h4>ICU Visiting Hours</h4>
                <ul>
                  <li>By appointment only.</li>
                  <li>Please speak to the nursing station.</li>
                </ul>
              </div>
              <div>
                <h4>Visitor Guidelines</h4>
                <ul>
                  <li>Visitors must be 12 or older.</li>
                  <li>Please limit visitors to two at a time.</li>
                  <li>Masks are required in all patient rooms.</li>
                  <li>Do not visit if you are feeling unwell.</li>
                </ul>
              </div>
            </div>
          </Accordion>

          {/* --- Accordion Item 3 --- */}
          <Accordion title="Hospital Amenities">
            <div className="visitor-content-container">
              <div>
                <h4>Dining</h4>
                <ul>
                  <li>The Mirins Cafe (Main Lobby): 7 AM - 7 PM</li>
                  <li>Skyline Coffee (Floor 3): 6 AM - 2 PM</li>
                  <li>Vending machines available 24/7.</li>
                </ul>
              </div>
              <div>
                <h4>For Your Convenience</h4>
                <ul>
                  <li>Free Wi-Fi ("Mirins-Guest")</li>
                  <li>Gift Shop (Main Lobby)</li>
                  <li>Interfaith Chapel (Floor 1)</li>
                  <li>Outpatient Pharmacy (Floor 1)</li>
                </ul>
              </div>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Visitors;