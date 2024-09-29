import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { ratingTitle } from '../../assets/languages';
import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import useHotels from '../../hooks/useHotels';
import { getCurrentObject } from '../../utils/helper';
import { IHotel } from '../../types/HotelTypes';

function Rating() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel: IHotel = getCurrentObject(hotels, currentHotelId);

  const rating = (
    <SectionWrapper bgColor={'light'}>
      <SectionTitle title={ratingTitle[1]} />
      <View style={styles.ratingContainer}>
        <View style={styles.numberContainer}>
          <Text style={styles.ratingBumber}>{currentHotel?.rating.toTen}</Text>
        </View>
        <View>
          <Text style={styles.ratingText}>{currentHotel?.rating.inWords}</Text>
          <Text>{currentHotel?.rating.TotalParticipantsText}</Text>
        </View>
      </View>
    </SectionWrapper>
  );

  return currentHotel.rating.TotalParticipants > 0 && rating;
}

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ratingText: {
    fontFamily: 'lato-v16-latin-700',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.accentGold,
  },
  ratingBumber: {
    fontSize: 16,
    color: GlobalStyles.colors.accentGold,
  },
});
