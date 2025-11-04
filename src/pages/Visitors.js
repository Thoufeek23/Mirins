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
              [Interactive Map Placeholder]
            </div>
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