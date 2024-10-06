import { useDispatch, useSelector } from 'react-redux';
import { setCameraPosition } from '../../store/redux/map';
import { useAppDispatch, useAppSelector } from '../../store/redux/store';
import useMap from '../getDataHooks/useMap';

const useZoomIntoCluster = () => {
  const dispatch = useAppDispatch();
  const { cameraPosition } = useMap();

  const zoomIntoCluster = (clusterFeature) => {
    if (!clusterFeature || !clusterFeature.geometry) {
      return;
    }

    const [longitude, latitude] = clusterFeature.geometry.coordinates;

    try {
      const newZoom = cameraPosition.zoomLevel + 2;

      dispatch(
        setCameraPosition({
          zoomLevel: newZoom,
          centerCoordinate: [longitude, latitude],
        })
      );
    } catch (error) {
      console.error('Fehler beim Abrufen des aktuellen Zoom-Levels:', error);
    }
  };

  return { zoomIntoCluster };
};

export default useZoomIntoCluster;
