import React from "react";

import { useMapbox } from "../../hooks/useMapbox";

const initialLocation = {
  lng: -98.1944,
  lat: 19.0466,
  zoom: 12.5,
};

const Map = () => {
  const { setRef, coords } = useMapbox(initialLocation);
  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 5,
          color: "#222",
          top: 10,
          left: 25,
          position: "absolute",
          padding: "1rem",
          zIndex: 1,
        }}
      >
        Lng: {coords.lng} | lat:{coords.lat} | zoom: {coords.zoom}
      </div>

      <div
        ref={setRef}
        className="mapContainer"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "#fff",
        }}
      ></div>
    </>
  );
};

export default Map;
