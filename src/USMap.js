import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import states from './states.json';


const USMap = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  // GeoJSON data for the U.S. map
  const geoUrl = './states.json';


  const handleStateClick = (stateName) => {
    alert(`Redirecting to abortion laws for ${stateName}`);
    // You can use window.location.href or React Router for navigation
  };

  return (
    <div>
      <h2>{tooltipContent || 'Hover over a state'}</h2>
      <ComposableMap
        projection="geoAlbersUsa"
        width={800}
        height={600}
        style={{ maxWidth: '100%', margin: '0 auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName = geo.properties.name; // Get state name from properties
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltipContent(stateName)}
                  onMouseLeave={() => setTooltipContent('')}
                  onClick={() => handleStateClick(stateName)}
                  style={{
                    default: { fill: '#D6D6DA', outline: 'none' },
                    hover: { fill: '#F53', outline: 'none' },
                    pressed: { fill: '#E42', outline: 'none' },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USMap;
