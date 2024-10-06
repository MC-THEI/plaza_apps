import { View, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci, IcoMoon_pwai } from '../../ui/IcoMoon';
import Spinner from '../../ui/Spinner';

function MapButton({
  iconName,
  onPress,
  isLoading = false,
}: {
  iconName: string;
  onPress: () => void;
  isLoading?: boolean;
}) {
  return (
    <Pressable style={styles.container} onPress={() => onPress()}>
      {!isLoading && (
        <IcoMoon_pwai
          name={iconName}
          color={GlobalStyles.colors.accentGold}
          size={25}
        />
      )}
      {isLoading && (
        <Spinner color={GlobalStyles.colors.accentGold} size={25} />
      )}
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
