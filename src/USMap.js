import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './App.css';
import mapData from './gadm41_USA_1.json'; // GeoJSON data for the map

const laws = {
  "Alabama": "Alabama is enforcing its total abortion ban.",
  "Alaska": "Abortion will remain legal in Alaska.",
  "Arizona": "In 2024, voters approved an amendment to the Arizona Constitution that protects abortion rights and, as a result of litigation, the fifteen week ban is not in effect.",
  "Arkansas": "Arkansas is enforcing its trigger ban to prohibit abortion entirely.",
  "California": "Abortion will remain legal in California.",
  "Colorado": "Abortion will remain legal in Colorado",
  "Connecticut": "Abortion will remain legal in Connecticut.",
  "Delaware": "Abortion will remain legal in Delaware.",
  "District of Columbia": "Abortion is protected in the District of Columbia.",
  "Florida": "Florida is enforcing a six-week ban.",
  "Georgia": "Georgia is enforcing a 6-week abortion ban.",
  "Hawaii": "Abortion will remain legal in Hawaii.",
  "Idaho": "Idaho argues that it can enforce its trigger ban, which criminalizes abortion.",
  "Illinois": "Abortion will remain legal in Illinois.",
  "Indiana": "Indiana enacted a new total ban on abortion.",
  "Iowa": "Iowa will likely try to prohibit abortion. As of July 2024, the state is enforcing a 6-week ban.",
  "Kansas": "Abortion will remain legal in Kansas as long as the state constitution is not amended.",
  "Kentucky": "Kentucky argues that the state can enforce its trigger ban to prohibit abortion; the trigger ban is currently in effect.",
  "Louisiana": "Louisiana is enforcing its trigger ban which prohibits abortion entirely and includes civil and criminal penalties.",
  "Maine": "Abortion will remain legal in Maine.",
  "Maryland": "Abortion will remain legal in Maryland. In 2024, voters decided to amend the Maryland Constitution to create a right to reproductive freedom.",
  "Massachusetts": "Abortion will remain legal in Massachusetts.",
  "Michigan": "Michiganders have approved Prop 3, which enshrines reproductive freedom in the Michigan constitution.",
  "Minnesota": "Abortion will remain legal in Minnesota.",
  "Mississippi": "Mississippi is enforcing its trigger ban, which prohibits abortion in nearly all situations.",
  "Missouri": "On December 23, 2024, a state circuit court held that the state’s trigger ban and other abortion restrictions were unconstitutional and enjoined those laws.",
  "Montana": "Abortion will remain legal in Montana.",
  "Nebraska": "Nebraska is enforcing a 12-week abortion ban, with limited exceptions.",
  "Nevada": "Abortion will remain legal in Nevada.",
  "New Hampshire": "Abortion will remain accessible in New Hampshire but without legal protection.",
  "New Jersey": "Abortion will remain legal in New Jersey.",
  "New Mexico": "Abortion will remain accessible in New Mexico. New Mexico courts have not determined whether the state constitution protects the right to abortion.",
  "New York": "Abortion will remain legal in New York.",
  "North Carolina": "North Carolina has enacted a twelve-week abortion ban.",
  "North Dakota": "North Dakota argues that it can enforce its total abortion ban with limited exceptions, which a trial court found unconstitutional in September 2024.",
  "Ohio": "Ohioans have approved Issue 1, which protects reproductive decision making. ",
  "Oklahoma": "Oklahoma is enforcing a pre-Roe ban that prohibits abortion entirely, except when “necessary to preserve” the life of a pregnant person.",
  "Oregon": "Abortion will remain legal in Oregon.",
  "Pennsylvania": "Abortion will likely remain accessible in Pennsylvania, but without legal protection.",
  "Rhode Island": "Abortion will remain legal in Rhode Island.",
  "South Carolina": "South Carolina is enforcing a six-week abortion ban.",
  "South Dakota": "The state has criminalized abortion and voters failed to approve an amendment to the state constitution that would have protected abortion rights in the first trimester.",
  "Tennessee": "Tennessee is enforcing its trigger ban, which criminalizes abortion.",
  "Texas": "Texas is enforcing its trigger ban, which prohibits abortion and includes civil and criminal penalties.",
  "Utah": "Utah is enforcing its 18 week ban while its trigger ban is enjoined.",
  "Vermont": "Abortion will remain legal in Vermont.",
  "Virginia": "Abortion will remain accessible in Virginia, but without legal protection.",
  "Washington": "Abortion will remain legal in Washington.",
  "West Virginia": "West Virginia has enacted a total ban on abortion. ",
  "Wisconsin": "Wisconsin legislators will try to prohibit abortion.",
  "Wyoming": "Wyoming argues that the state can enforce its total ban, which is currently enjoined."
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
