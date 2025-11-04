import React, { useState } from 'react';
import './Accordion.css'; // We'll create this next

// This component takes a 'title' and the 'content' as props
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // This function toggles the state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={toggleAccordion}
        aria-expanded={isOpen} // Important for accessibility
      >
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
        {title}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;