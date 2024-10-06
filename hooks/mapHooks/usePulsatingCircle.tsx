import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

const usePulsatingCircle = (
  initialRadius = 18,
  pulseTo = 25,
  duration = 1000
) => {
  const animatedRadius = useRef(new Animated.Value(initialRadius)).current;
  const [circleRadius, setCircleRadius] = useState(initialRadius);

  const startPulsating = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedRadius, {
          toValue: pulseTo,
          duration: duration,
          useNativeDriver: false,
        }),
        Animated.timing(animatedRadius, {
          toValue: initialRadius,
          duration: duration,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startPulsating();

    const listenerId = animatedRadius.addListener(({ value }) => {
      setCircleRadius(value);
    });

    return () => {
      animatedRadius.removeListener(listenerId); // Bereinigen
    };
  }, [animatedRadius, initialRadius, pulseTo, duration]);

  return circleRadius;
};

export default usePulsatingCircle;
