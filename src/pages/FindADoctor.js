import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './FindADoctor.css'; // Import the new CSS file

// Use centralized data from src/data/doctors.js
import { allDoctors, specialties } from '../data/doctors';


// --- 2. The Page Component ---
const FindADoctor = () => {
  // --- 3. State for Filters ---
  const [filterName, setFilterName] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');
  const [filterVirtual, setFilterVirtual] = useState(false);

  // --- 4. Filtering Logic ---
  // useMemo ensures this only recalculates when filters change
  const filteredDoctors = useMemo(() => {
    return allDoctors.filter(doctor => {
      // Check Name
      const nameMatch = doctor.name.toLowerCase().includes(filterName.toLowerCase());
      
      // Check Specialty
      const specialtyMatch = filterSpecialty === '' || doctor.specialty === filterSpecialty;
      
      // Check Virtual Visits
      const virtualMatch = !filterVirtual || doctor.virtual === true;
      
      return nameMatch && specialtyMatch && virtualMatch;
    });
  }, [filterName, filterSpecialty, filterVirtual]);


  return (
    <div className="doctor-search-page">
      <div className="container">
        <h1>Find Your Doctor</h1>
        
        {/* --- 5. Search Bar Form --- */}
        <div className="search-bar">
          <div className="form-group">
            <label htmlFor="doc-name">Doctor's Name</label>
            <input
              type="text"
              id="doc-name"
              placeholder="e.g., Dr. Irshath Nasreen"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="doc-specialty">Specialty</label>
            <select
              id="doc-specialty"
              value={filterSpecialty}
              onChange={(e) => setFilterSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group toggle-group">
            {/* Accessible toggle button replacing the checkbox for a nicer UI */}
            <button
              type="button"
              className={`toggle-btn ${filterVirtual ? 'active' : ''}`}
              aria-pressed={filterVirtual}
              onClick={() => setFilterVirtual(prev => !prev)}
            >
              <span className="toggle-knob" aria-hidden="true"></span>
              <span className="toggle-label">Offers Virtual Visits</span>
            </button>
          </div>
        </div>
        
        {/* --- 6. Results Grid --- */}
        <div className="results-info">
          <strong>Showing {filteredDoctors.length}</strong> of {allDoctors.length} doctors
        </div>
        
        <div className="doctor-grid">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p>No doctors match your criteria. Please try broadening your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};


// --- 7. Doctor Card Sub-Component ---
// (As designed in your blueprint)
const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={`Dr. ${doctor.name}`} className="doctor-card-image" />
      <div className="doctor-card-content">
        <h3>{doctor.name}</h3>
        <span className="specialty">{doctor.specialty}</span>
        <p className="philosophy">"{doctor.philosophy}"</p>
        <Link 
          to={`/doctor/${doctor.id}`} // This link won't work yet, but sets up the structure
          className="btn btn-primary"
        >
          View Full Profile
        </Link>
      </div>
    </div>
  );
};

export default FindADoctor;