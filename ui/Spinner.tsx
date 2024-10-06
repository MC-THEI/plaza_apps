import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { IcoMoon_mci } from './IcoMoon';

const Spinner = ({ size, color }: { size: number; color: string }) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startRotation();
  }, []);

  const rotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: rotateAnimation }] }}>
      <IcoMoon_mci name="loading" size={size} color={color} />
    </Animated.View>
  );
};

export default Spinner;
