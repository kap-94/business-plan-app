import { useEffect, useState, useRef, useCallback } from "react";
import { v4 } from "uuid";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2FwOTQiLCJhIjoiY2t2c2o4NHJhMmpmODJwdXB2ejJtbnVxMSJ9.WQg9LZOIa8lFVcWvxmoSZw";

export const useMapbox = (initialLocation) => {
  // Map div reference
  const mapDiv = useRef();
  const setRef = useCallback((node) => {
    mapDiv.current = node;
  }, []);

  // Markers reference
  const markers = useRef({});

  const mapa = useRef();
  const [coords, setCoords] = useState(initialLocation);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialLocation.lng, initialLocation.lat],
      zoom: initialLocation.zoom,
    });

    // setMapa(map);
    mapa.current = map;
  }, [initialLocation]);

  // When the map moves
  useEffect(() => {
    mapa.current?.on("move", () => {
      const { lng, lat } = mapa.current.getCenter();
      setCoords({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: mapa.current.getZoom().toFixed(2),
      });
    });

    // return mapa?.off("move");
  }, []);

  // Add markers when click
  useEffect(() => {
    mapa.current?.on("click", (e) => {
      const { lng, lat } = e.lngLat;

      const marker = new mapboxgl.Marker();
      marker.id = v4();

      marker.setLngLat([lng, lat]).addTo(mapa.current).setDraggable(true);

      markers.current[marker.id] = marker;
    });
  }, []);

  return {
    coords,
    markers,
    setRef,
  };
};
