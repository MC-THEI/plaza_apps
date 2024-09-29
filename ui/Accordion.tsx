import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

function AccordionItem({
  isExpanded,
  children,
  viewKey,
  duration = 250,
  minVisibleHeight = 50, // The height corresponding to 2 visible lines
}: {
  isExpanded: boolean;
  children: React.ReactNode;
  viewKey: string;
  duration?: number;
  minVisibleHeight?: number;
}) {
  const [contentHeight, setContentHeight] = useState(0);

  const accordionHeight = useSharedValue(
    isExpanded ? contentHeight : minVisibleHeight
  );

  const gradientHeight = useSharedValue(isExpanded ? 0 : 30);

  React.useEffect(() => {
    accordionHeight.value = withTiming(
      isExpanded ? contentHeight : minVisibleHeight,
      { duration }
    );
    gradientHeight.value = withTiming(isExpanded ? 0 : 30, { duration });
  }, [isExpanded, contentHeight]);

  const accHeight = useAnimatedStyle(() => ({
    height: accordionHeight.value,
  }));

  const animatedGradient = useAnimatedStyle(() => ({
    height: gradientHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedView, accHeight]}
    >
      <View
        style={styles.wrapper}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setContentHeight(height);
        }}
      >
        {children}
      </View>
      <Animated.View style={[styles.bottomOverlay, animatedGradient]}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </Animated.View>
  );
}

function Accordion({
  open,
  children,
  minVisibleHeight,
}: {
  open: boolean;
  children: React.ReactNode;
  minVisibleHeight?: number;
}) {
  return (
    <AccordionItem
      minVisibleHeight={minVisibleHeight}
      isExpanded={open}
      viewKey="Accordion"
    >
      {children}
    </AccordionItem>
  );
}

export default Accordion;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  animatedView: {
    width: '100%',
    overflow: 'hidden',
  },
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
