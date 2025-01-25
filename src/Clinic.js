import React, { useState } from 'react';
import './Clinic.css';

export const Clinic = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const geocodeZipCode = async (zip) => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: zip }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setDefaultMap({ lat: location.lat(), lng: location.lng() });
        searchNearbyClinics(location);
      } else {
        alert('Geocode failed: ' + status);
      }
    });
  };

  const searchNearbyClinics = (location) => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    const request = {
      location: location,
      radius: 5000, // 5 km radius
      keyword: 'abortion clinic',
    };

    service.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        setClinics(results);
      } else {
        alert('No clinics found nearby.');
      }
    });
  };

  const handleSearch = () => {
    if (!zipCode) {
      alert('Please enter a valid zip code');
      return;
    }
    geocodeZipCode(zipCode);
  };

  return (
    <div className="clinic-container">
      <div className="clinic_title">Clinics</div>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search Clinics
        </button>
      </div>

      {/* Map Integration */}
      <LoadScript googleMapsApiKey={mapsApiKey} libraries={['places']}>
        <GoogleMap mapContainerStyle={containerStyle} center={defaultMap} zoom={15}>
          {clinics.map((clinic, index) => (
            <Marker
              key={index}
              position={clinic.geometry.location}
              onClick={() => setClinicFound(clinic)}
            />
          ))}

          {clinicFound && (
            <InfoWindow
              position={clinicFound.geometry.location}
              onCloseClick={() => setClinicFound(null)}
            >
              <div>
                <h4>{clinicFound.name}</h4>
                <p>{clinicFound.vicinity}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>

      {/* Clinic List */}
      <div id="results" style={{ marginTop: '20px' }}>
        {clinics.length > 0 ? (
          <div>
            <h3>Closest Clinics:</h3>
            <ul>
              {clinics.map((clinic, i) => (
                <li key={i}>
                  <strong>{clinic.name}</strong>
                  <br />
                  {clinic.vicinity}
                  <br />
                  <br />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No clinics found</p>
        )}
      </div>
    </div>
  );
};

export default Clinic;
