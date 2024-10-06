import { useCallback } from 'react';

const useFitBounds = (cameraRef) => {
  const fitBounds = useCallback(
    (filteredCoordinates) => {
      if (cameraRef.current) {
        let neLat = -Infinity;
        let neLon = -Infinity;
        let swLat = Infinity;
        let swLon = Infinity;

        filteredCoordinates.forEach(([lon, lat]) => {
          if (lat > neLat) neLat = lat;
          if (lon > neLon) neLon = lon;
          if (lat < swLat) swLat = lat;
          if (lon < swLon) swLon = lon;
        });

        const neCoordinates = [neLon, neLat];
        const swCoordinates = [swLon, swLat];

        cameraRef.current.fitBounds(
          neCoordinates,
          swCoordinates,
          [65, 50],
          1000
        );
      }
    },
    [cameraRef]
  );

  return { fitBounds };
};

export default useFitBounds;
