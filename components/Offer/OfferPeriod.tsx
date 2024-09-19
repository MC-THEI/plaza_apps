import { View, StyleSheet, Text, Pressable } from 'react-native';
import SectionWrapper from '../../ui/SectionWrapper';
import { GlobalStyles } from '../../constants/styles';

function OfferPeriod() {
  return (
    <SectionWrapper bgColor={'light'}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.textBold]}>Angebotszeitraum</Text>
        <Text style={styles.text}>27.09.2024 - 31.12.2024</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Verfügbarkeit prüfen</Text>
          </Pressable>
        </View>
      </View>
    </SectionWrapper>
  );
}

export default OfferPeriod;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.successGreen_light,
    gap: 5,
    padding: 12,
    paddingBottom: 38,
    borderRadius: 8,
    marginBottom: 15,
  },
  text: {
    fontFamily: 'lato-v16-latin-regular',
    fontSize: GlobalStyles.fontSize.offerPeriodFontSize,
    color: GlobalStyles.colors.successGreen_primary,
    textAlign: 'center',
  },
  textBold: {
    fontFamily: 'lato-v16-latin-900',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: -65,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: GlobalStyles.colors.successGreen_primary,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'lato-v16-latin-900',
    textTransform: 'uppercase',
  },
});
