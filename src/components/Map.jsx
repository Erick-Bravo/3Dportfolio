import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [117.5931, -34.1064, 0], // Rotate the map to the longitude and latitude of Rancho Cucamonga
        center: [0, 0], // Center the map
        scale: 1200, // You might need to adjust the scale to suit your needs
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-117.5931, 34.1064]} // Coordinates of Rancho Cucamonga
        dx={-90} // You might need to adjust these values (dx, dy) to position the text correctly
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {"Rancho Cucamonga, CA"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
