import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allDoctors } from '../data/doctors';
import './DoctorProfile.css'; // We'll create this next

const DoctorProfile = () => {
  // 1. Get the 'id' from the URL
  const { id } = useParams();
  
  // 2. Find the correct doctor from our data
  // Support both numeric ids (e.g. /doctor/1) and name-based slugs (e.g. /doctor/Dr.IrshathNasreen)
  const numericId = Number(id);
  let doctor = null;
  if (!Number.isNaN(numericId)) {
    doctor = allDoctors.find(doc => doc.id === numericId);
  }

  if (!doctor) {
    // Normalize the incoming id and doctor names to compare slugs
    const incomingSlug = String(id).toLowerCase().replace(/[^a-z0-9]/g, '');
    doctor = allDoctors.find(doc => String(doc.name).toLowerCase().replace(/[^a-z0-9]/g, '') === incomingSlug);
  }

  // 3. Handle case where no doctor is found
  if (!doctor) {
    return (
      <div className="container" style={{ padding: '4rem 0' }}>
        <h2>Doctor not found.</h2>
        <p>We couldn't find a profile for this doctor.</p>
        <Link to="/find-a-doctor" className="btn btn-primary">Back to Search</Link>
      </div>
    );
  }

  // 4. Render the profile if the doctor is found
  return (
    <div className="profile-page">
      {/* --- Profile Header --- */}
      <header className="profile-header">
        <div className="container">
          <div className="header-content">
            <img src={doctor.image} alt={`Dr. ${doctor.name}`} className="profile-photo" />
            <div className="header-info">
              <h1 className="doctor-name">{doctor.name}</h1>
              <p className="doctor-specialty">{doctor.specialty}</p>
              {doctor.virtual && <span className="virtual-badge">Offers Virtual Visits</span>}
              </div>
          </div>
        </div>
      </header>

      {/* --- Profile Body --- */}
      <div className="profile-body container">
        {/* --- Main Content Column --- */}
        <div className="main-content">
          <div className="video-placeholder">
            <p>1-Minute Intro Video Placeholder</p>
          </div>
          
          <h2>My Care Philosophy</h2>
          <p className="philosophy-text">"{doctor.philosophy}"</p>
          
          <h2>Biography</h2>
          <p>{doctor.bio}</p>
        </div>

        {/* --- Sidebar Column --- */}
        <aside className="sidebar">
          <div className="info-widget">
            <h3>Education & Certifications</h3>
            <ul>
              {doctor.education.map(edu => <li key={edu}>{edu}</li>)}
            </ul>
            <hr />
            <ul>
              {doctor.certifications.map(cert => <li key={cert}>{cert}</li>)}
            </ul>
          </div>
          
          <div className="info-widget">
            <h3>Accepted Insurance</h3>
            <ul>
              {doctor.insurance.map(ins => <li key={ins}>{ins}</li>)}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DoctorProfile;