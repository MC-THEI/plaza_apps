import { Text, View, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci, IcoMoon_pwai } from '../../ui/IcoMoon';

function ContactButton({
  iconType,
  iconName,
  data,
  onPress,
}: {
  iconType: string;
  iconName: string;
  data: string;
  onPress: () => void;
}) {
  const mci = iconType === 'mci';
  const pwai = iconType === 'pwai';

  return (
    <Pressable onPress={() => onPress()} style={styles.container}>
      {pwai && <IcoMoon_pwai name={iconName} style={styles.icon} size={23} />}
      {mci && <IcoMoon_mci name={iconName} style={styles.icon} size={23} />}
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

export default ContactButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 10,

    elevation: 5,
    shadowColor: GlobalStyles.colors.neutralGray_light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.15,
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 15,
    color: GlobalStyles.colors.accentGold,
  },
  text: {
    fontFamily: 'lato-v16-latin-700',
  },
});
