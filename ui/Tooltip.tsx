import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { GlobalStyles } from '../constants/styles';

const Tooltip = ({
  visible,
  text,
  onClose,
}: {
  visible: boolean;
  text: string;
  onClose: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Modal transparent={true} animationType="fade" visible={visible}>
        <TouchableOpacity style={styles.overlay} onPress={onClose}>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>{text}</Text>
          </View>
        </TouchableOpacity>
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
    padding: 10,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.accentGold,
    maxWidth: 250,
    alignItems: 'center',
  },
  tooltipText: {
    fontFamily: 'lato-v16-latin-700',
    fontSize: 16,
    color: GlobalStyles.colors.neutralGray_dark,
    textAlign: 'center',
  },
});

export default Tooltip;
