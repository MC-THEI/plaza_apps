import { View, StyleSheet } from 'react-native';
import MainButton from '../../ui/MainButton';
import useOffers from '../../hooks/getDataHooks/useOffers';
import { getCurrentObject } from '../../utils/helper';

function PriceButton() {
  const { currentOfferId, offers } = useOffers();
  const currentOffer = getCurrentObject(offers, currentOfferId);

  return (
    <View style={styles.buttonOuterContainer}>
      <View style={styles.buttonInnerContainer}>
        <MainButton title={currentOffer?.info.bestPriceText} />
      </View>
    </View>
  );
}

export default PriceButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {},
  buttonInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    gap: 10,
    top: -25,
  },
});
