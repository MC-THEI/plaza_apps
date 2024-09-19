import { Pressable, Text, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function MainButton({ title }: { title: string }) {
  return (
    <View style={[styles.buttonOuterContainer, { overflow: 'hidden' }]}>
      <Pressable style={(pressed) => [styles.buttonInnerContainer]}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

export default MainButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.accentGold,
    height: 50,
    padding: 13,
    borderRadius: 6,
    overflow: 'hidden',
  },
  buttonOuterContainer: {
    backgroundColor: GlobalStyles.colors.accentGold,
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: GlobalStyles.colors.neutralGray_dark,
    fontFamily: 'lato-v16-latin-700',
    fontSize: GlobalStyles.fontSize.mainButtonFontSize,
  },
  pressed: {
    backgroundColor: GlobalStyles.colors.accentGold_pressed,
  },
});
