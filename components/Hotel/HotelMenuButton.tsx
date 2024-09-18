import { Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci, IcoMoon_pwai } from '../../ui/IcoMoon';

function HotelMenuButton({
  title: title,
  onPress,
  iconName,
  iconSet = 'mci',
}: {
  title: string;
  onPress: () => void;
  iconName: string;
  iconSet?: 'mci' | 'pwai';
}) {
  const IconComp = iconSet === 'pwai' ? IcoMoon_pwai : IcoMoon_mci;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <IconComp
        name={iconName}
        color={GlobalStyles.colors.accentGold}
        size={25}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export default HotelMenuButton;

const styles = StyleSheet.create({
  container: {
    flexBasis: '30%',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    height: 80,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'lato-v16-latin-900',
    fontSize: GlobalStyles.fontSize.cardFontSize,
    color: GlobalStyles.colors.accentGold,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  icon: {
    color: GlobalStyles.colors.accentGold,
    textAlign: 'center',
  },
});
