import React, {useState} from 'react';
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

const containerStyle = {
    width: '100%', 
    height: '500px',
};

const ClinicFinder = () => {
    const[zipCode, setZipCode] = useState('');
    const[clinic, setClinic] = useState([]);
    const [clinicFound, setClinicFound] = useState(null);
    const [defaultMap, setDefaultMap] = useState({lat: 27.994402, lng: -81.760254});

    const mapsApiKey = 'AIzaSyBaE61HadXfnURwrXP7uk9hM16qJNiyivk'

    //convert zipcode to latitude and longitude
    const geocodeZipCode = async (zip) => {
        const geocoder = new window.google.maps.Geocoder(); 

        geocoder.geocode({address: zip}, (results, status) => {
            if(status === 'OK'){
                const location = results[0].geometry.location; 
                setDefaultMap({lat: location.lat(), lng: location.lng()});
                searchNearbyClinics(location); 
            } else {
                alert('Geocode failed: '+ status);
            }
        });
    };

    const searchNearbyClinics = (location) => {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        
        const request = {
          location: location,
          radius: 5000,  // 5 km radius
          keyword: 'abortion clinic',
        };
    
        service.nearbySearch(request, (results, status) => {
          if (status === 'OK') {
            setClinic(results);
          } else {
            alert('No abortion clinics found nearby.');
          }
        });
      };

    const handleSearch = () => {
        if(!zipCode) {
            alert('Please enter a valid zip code');
            return;
        }
        geocodeZipCode(zipCode);
    };

    return (
        <div style = {{textAlign: 'center'}}>
        <hl>Find Abortion Clinics Closest To You</hl>
        
        <input 
            type = "text"
            value = {zipCode}
            onChange = {(e) => setZipCode(e.target.value)}
            placeholder = "Enter Zip Code"
        />
        <button onClick = {handleSearch}>Search</button>

        <LoadScript mapsApiKey={mapsApiKey}>
            <GoogleMap
            mapContainerStyle={containerStyle}
            center = {defaultMap}
            zoom = {15}
        >
            {clinic.map((clinic,index) =>(
                <Marker
                key = {index}
                position = {clinic.geometry.location}
                onClick={() => setClinicFound(clinic)}
            />
            ))}

            {clinicFound && (
                <InfoWindow
                position = {clinicFound.geometry.location}
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

        <div id = "results" style = {{marginTop: '20px'}}>
            {clinic.length > 0 ? (
                <div>
                    <h3>Closest Abortion Clinics:</h3>
                    <ul>
                        {clinic.map((clinic, i)=> (
                            <li key = {i}>
                                <strong>{clinic.name}</strong><br />
                                {clinic.vicinity}<br /><br />
                            </li>
                        ))}
                    </ul>
                </div>
            ): (
                <p>No clinics found</p>
            )}
        </div>
        </div>
    );
};

export default ClinicFinder; 