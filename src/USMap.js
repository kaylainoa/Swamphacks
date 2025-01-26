import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './App.css';
import mapData from './gadm41_USA_1.json'; // Assuming this file is in the same folder
import ReactDOM from 'react-dom';

const USAMap = () => {
  return (
    <div className= 'map-container'>
      <ComposableMap>
        <ZoomableGroup>
        <Geographies geography={mapData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#ffffff", // Default color
                    outline: "none", // Remove outline for a cleaner look
                  },
                  hover: {
                    fill: "#fb6f92", // Color on hover
                    cursor: "pointer", // Show pointer cursor on hover
                  },
                }}
              />
            ))
          }
        </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<USAMap />, document.getElementById("app"));
});

export default USAMap;
