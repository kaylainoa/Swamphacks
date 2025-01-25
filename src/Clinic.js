import React from 'react'
import './Clinic.css';


export const Clinic = () => {
  return (
    <div>
        <h1>Clinic</h1>
        <div className="button-container">
        <button className="button">Find Clinics Near Me</button>
        <button className="button">Contact</button>
      </div>

        <div className="clinic-info">
        <div>Name: General Healthcare Clinic</div>
        <div>Phone: 123-456-7890</div>
        <div>Rating: 4.5 / 5</div>
        <div>Services: General Healthcare, Vaccinations, Lab Tests</div>
        <div>Hours: Mon-Fri: 9:00 AM - 5:00 PM</div>
        <div>
          Website: <a href="http://example.com" className="website-link">Visit Website</a>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
