import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './App.css';
import mapData from './gadm41_USA_1.json'; // GeoJSON data for the map

const laws = {
  Alabama: "Banned",
  Alaska: "Generally Legal",
  Arizona: "Limited Ban",
  Arkansas: "Banned",
  California: "Legal",
  Colorado: "Legal",
  Connecticut: "Legal",
  Delaware: "Legal",
  "District of Columbia": "Legal",
  Florida: "Limited Ban",
  Georgia: "Limited Ban",
  Hawaii: "Legal",
  Idaho: "Banned",
  Illinois: "Legal",
  Indiana: "Banned",
  Iowa: "Limited Ban",
  Kansas: "Limited Ban",
  Kentucky: "Banned",
  Louisiana: "Banned",
  Maine: "Legal",
  Maryland: "Legal",
  Massachusetts: "Legal",
  Michigan: "Legal",
  Minnesota: "Legal",
  Mississippi: "Banned",
  Missouri: "Banned",
  Montana: "Banned",
  Nebraska: "Limited Ban",
  Nevada: "Legal",
  "New Hampshire": "Legal",
  "New Jersey": "Legal",
  "New Mexico": "Legal",
  "New York": "Legal",
  "North Carolina": "Limited Ban",
  "North Dakota": "Banned",
  Ohio: "Limited Ban",
  Oklahoma: "Banned",
  Oregon: "Legal",
  Pennsylvania: "Legal",
  "Rhode Island": "Legal",
  "South Carolina": "Limited Ban",
  "South Dakota": "Banned",
  Tennessee: "Banned",
  Texas: "Banned",
  Utah: "Limited Ban",
  Vermont: "Legal",
  Virginia: "Limited Ban",
  Washington: "Legal",
  "West Virginia": "Banned",
  Wisconsin: "Banned",
  Wyoming: "Banned",
};

const USAMap = () => {
  const [hoveredState, setHoveredState] = useState(null); // State to track hovered state name
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (stateName, evt) => {
    setHoveredState(stateName);
    setTooltipPosition({ x: evt.pageX + 10, y: evt.pageY + 10 }); // Offset to avoid overlapping the cursor
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };


  return (
    <div className="map-container">
      {/* Display hovered state's law */}
      <div className="info-box">
        {hoveredState ? (
          <p>
            <strong>{hoveredState}</strong>: {laws[hoveredState] || "No data available"}
          </p>
        ) : (
          <p>Hover over a state to see its law.</p>
        )}
      </div>

      <ComposableMap>
        <ZoomableGroup center={[-95, 37]} zoom={1} disableZooming={true} disablePanning={true}>
          <Geographies geography={mapData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo.properties.NAME_1; // Adjust based on your GeoJSON's state name field
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredState(stateName)} // Set the hovered state name
                    onMouseLeave={() => setHoveredState(null)} // Clear the state name on mouse leave
                    style={{
                      default: {
                        fill: "#ffffff", // Default color
                        outline: "none",
                      },
                      hover: {
                        fill: "#fb6f92", // Highlight color on hover
                        cursor: "pointer",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default USAMap;
