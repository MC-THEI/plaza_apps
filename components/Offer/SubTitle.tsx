import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getCurrentObject, splitLastWord } from '../../utils/helper';
import useOffers from '../../hooks/getDataHooks/useOffers';
import useHotels from '../../hooks/getDataHooks/useHotels';

const deviceWidth = Dimensions.get('window').width;

function Subtitle() {
  const { currentOfferId, offers } = useOffers();
  const { hotels } = useHotels();

  const currentOffer = getCurrentObject(offers, currentOfferId);
  const offerHotel = getCurrentObject(hotels, currentOffer?.hotel.id);

  const { lastWord, restOfText } = splitLastWord(currentOffer?.name);

  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitleText}>
        {restOfText && `${restOfText} `}
        <Text style={styles.subTitleLastWord}>{lastWord}</Text>
      </Text>
      <Text style={[styles.subTitleText, styles.smallText]}>
        {offerHotel?.name}
      </Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    height: 130,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
    zIndex: -1,
  },
  subTitleText: {
    fontSize: deviceWidth > 500 ? 22 : 20,
    color: 'white',
  },

  subTitleLastWord: {
    color: GlobalStyles.colors.accentGold,
  },
  smallText: {
    fontSize: 18,
  },
});
