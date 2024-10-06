import { View, StyleSheet, Text, Pressable, Linking } from 'react-native';
import SectionWrapper from '../../ui/SectionWrapper';
import { GlobalStyles } from '../../constants/styles';
import { getCurrentObject } from '../../utils/helper';
import useOffers from '../../hooks/getDataHooks/useOffers';

function OfferPeriod() {
  const { currentOfferId, offers } = useOffers();
  const currentOffer = getCurrentObject(offers, currentOfferId);

  return (
    <SectionWrapper bgColor={'light'}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.textBold]}>
          {currentOffer?.info.validPeriodTitle}
        </Text>
        <Text style={styles.text}>
          {currentOffer?.info.validFrom} – {currentOffer?.info.validTo}
        </Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => Linking.openURL(currentOffer?.wbe.link ?? '')}
          >
            <Text style={styles.buttonText}>{currentOffer?.wbe.linkTitle}</Text>
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
