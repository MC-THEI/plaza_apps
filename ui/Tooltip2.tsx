import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  Pressable,
} from 'react-native';
import { GlobalStyles } from '../constants/styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Tooltip = ({
  visible,
  text,
  onClose,
  anchorRef,
}: {
  visible: boolean;
  text: string;
  onClose: () => void;
  anchorRef: React.RefObject<TouchableOpacity>;
}) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (visible && anchorRef.current) {
      anchorRef.current.measure((x, y, width, height, pageX, pageY) => {
        const newTop = pageY + height + 10;
        const newLeft = pageX + width / 2;

        const adjustedTop = Math.min(newTop, screenHeight - 100);
        const adjustedLeft = Math.max(
          0,
          Math.min(newLeft - 125, screenWidth - 250)
        );

        setTooltipPosition({
          top: adjustedTop,
          left: adjustedLeft,
        });
      });
    }
  }, [visible, anchorRef]);

  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="fade" visible={visible}>
        <Pressable style={styles.overlay} onPress={onClose}>
          <View
            style={[
              styles.tooltip,
              { top: tooltipPosition.top, left: tooltipPosition.left },
            ]}
          >
            <Text style={styles.tooltipText}>{text}</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  tooltip: {
    position: 'absolute',
    padding: 10,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.accentGold,
    maxWidth: 250,
    alignItems: 'center',
  },
  tooltipText: {
    fontFamily: 'lato-v16-latin-700',
    fontSize: 15,
    color: GlobalStyles.colors.neutralGray_dark,
    textAlign: 'center',
  },
});

export default Tooltip;
