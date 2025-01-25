import React, { useState } from 'react'; 
import './Clinic.css';
import ClinicFinder from ".//Components/ClinicFinder.js";

export const Clinic = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // You can add logic to filter or search clinics based on the search term
    console.log("Searching for clinics:", searchTerm);
  };

  return (
    
    <div className="clinic-container">
        <div className="clinic_title">Clinics</div>
        
        
        
        {/* Search Bar */}
        <div className="search-container">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Search for clinics..." 
              value={searchTerm}
              onChange={handleSearchChange} 
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

        {/* Buttons */}
        <div className="button-container">
            <button className="button">Find Clinics Near Me</button>
            <button className="button">Contact</button>
        </div>

        {/* Clinic Info */}
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
