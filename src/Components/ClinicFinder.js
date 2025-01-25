import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const MapComponent = ({ defaultMap, clinics }) => {
  const [clinicFound, setClinicFound] = useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBaE61HadXfnURwrXP7uk9hM16qJNiyivk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultMap}
        zoom={15}
      >
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
  );
};

export default MapComponent;
