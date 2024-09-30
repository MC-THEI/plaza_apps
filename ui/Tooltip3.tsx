import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Dimensions,
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
  anchorRef: React.RefObject<Pressable>;
}) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (visible && anchorRef.current) {
      anchorRef.current.measure((x, y, width, height, pageX, pageY) => {
        // Berechnung der Position
        const newTop = pageY - 10; // Tooltip 10 Pixel über dem Button
        const newLeft = pageX + width / 2 - 125; // Tooltip zentriert über dem Button (125 ist die Hälfte von 250)

        // Grenzen überprüfen
        const adjustedTop = Math.max(0, Math.min(newTop, screenHeight - 100)); // Tooltip muss im sichtbaren Bereich bleiben
        const adjustedLeft = Math.max(0, Math.min(newLeft, screenWidth - 250)); // Tooltip muss im sichtbaren Bereich bleiben

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
