import React, { useState } from 'react';
import './Clinic.css';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = { // map sizing
  width: '100%',
  height: '100%', 
};

const Clinic = () => {
  const [zipCode, setZipCode] = useState('');
  const [clinics, setClinics] = useState([]);
  const [clinicFound, setClinicFound] = useState(null);
  const [defaultMap, setDefaultMap] = useState({ lat: 27.994402, lng: -81.760254 });
  const [radius, setRadius] = useState(10);

  const mapsApiKey = 'AIzaSyBaE61HadXfnURwrXP7uk9hM16qJNiyivk';

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

    // Convert miles to meters for the API
    const radiusInMeters = radius * 1609.34;

    const request = {
      location: location,
      radius: radiusInMeters, // Dynamic radius
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
      <h2 className="clinic_head">Find a Clinic Near You</h2>

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

      {/* Radius Slider */}
      <div className="radius-slider">
        <label htmlFor="radius">Search Radius: {radius} miles</label>
        <input
          type="range"
          id="radius"
          min="10"
          max="31"
          step="1"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          list="radius-options"
        />
        <datalist id="radius-options">
          <option value="10" label="10" />
          <option value="20" label="20" />
          <option value="30" label="30" />
        </datalist>
      </div>

      <div className="content-container">
        {/* Clinic List on the left */}
        <div className="clinic-list">
          <h3>Closest Clinics:</h3>
          {clinics.length > 0 ? (
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
          ) : (
            <p>No clinics found</p>
          )}
        </div>

        {/* Map Integration on the right */}
        <div className="map-container">
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
        </div>
      </div>
    </div>
  );
};

export default Clinic;
