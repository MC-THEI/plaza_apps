import React from 'react';
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
  duration = 300,
  minVisibleHeight = 40, // The height corresponding to 2 visible lines
}: {
  isExpanded: boolean;
  children: React.ReactNode;
  viewKey: string;
  duration?: number;
  minVisibleHeight?: number;
}) {
  const animatedHeight = useSharedValue(isExpanded ? 1 : 0);

  // Update the animation when the isExpanded value changes
  React.useEffect(() => {
    animatedHeight.value = withTiming(isExpanded ? 1 : 0, { duration });
  }, [isExpanded]);

  const bodyStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value * (120 - minVisibleHeight) + minVisibleHeight,
    // opacity: animatedHeight.value, // Optional, to animate the opacity as well
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedView, bodyStyle]}
    >
      <View style={styles.wrapper}>{children}</View>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.bottomOverlay}
      />
    </Animated.View>
  );
}

function Accordion({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <AccordionItem isExpanded={open} viewKey="Accordion">
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
    height: 30,
    width: '100%',
  },
});
