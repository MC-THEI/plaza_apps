import { StyleSheet, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci } from '../../ui/IcoMoon';
import { useRef, useState } from 'react';
import Tooltip from '../../ui/Tooltip3';

function Facility({
  facility,
  buttonRef,
}: {
  facility: { icomoon_key: string; description: string };
  buttonRef: React.RefObject<any>;
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Pressable
      style={styles.container}
      onPress={() => setTooltipVisible(true)}
      ref={buttonRef}
    >
      <Tooltip
        visible={tooltipVisible}
        text={facility.description}
        onClose={() => setTooltipVisible(false)}
        anchorRef={buttonRef}
      />
      <IcoMoon_mci
        name={facility.icomoon_key}
        color={GlobalStyles.colors.accentGold}
        size={22}
      />
    </Pressable>
  );
}

export default Facility;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
    width: 56,
    height: 56,
    borderRadius: 6,
    marginRight: 22,
  },
});
