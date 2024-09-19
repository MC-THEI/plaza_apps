import { View, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_pwai } from '../../ui/IcoMoon';

function MapButton({
  iconName,
  onPress,
}: {
  iconName: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.container} onPress={() => onPress()}>
      <IcoMoon_pwai
        name={iconName}
        color={GlobalStyles.colors.accentGold}
        size={25}
      />
    </Pressable>
  );
}

export default MapButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
