import { View, StyleSheet, Image, Text } from 'react-native';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import ScreenHeader from '../ui/ScreenHeader';
import MainTitle from '../components/Home/MainTitle';
import FavoriteIcon from '../ui/FavoriteIcon';
import HotelMenuButtons from '../components/Hotel/HotelMenuButtons';
import SectionTitle from '../ui/SectionTitle';
import {
  facilitiesTitle,
  informationTitle,
  ratingTitle,
} from '../assets/languages';
import SectionWrapper from '../ui/SectionWrapper';
import { GlobalStyles } from '../constants/styles';
import Rating from '../components/Hotel/Rating';
import Information from '../components/Hotel/Information';
import Facilities from '../components/Hotel/Facilities';

function HotelScreen() {
  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        {/* Header*/}
        <ScreenHeader
          bgImg={'https://preview.plazahotels.de/media/210_dz-komfort.jpg'}
          isUrl={true}
        >
          <MainTitle
            title={{
              mainTitle: 'Best Western Plus Plaza Berlin Kurfürstendamm',
            }}
            fontSize={{ fontSize: 35 }}
            height={{ height: '60%' }}
          />
          <Image
            style={styles.logo}
            source={{ uri: 'https://placehold.co/50.png' }}
          />
          <FavoriteIcon style={{}} />
          <HotelMenuButtons />
        </ScreenHeader>

        {/* Rating*/}
        <Rating />

        {/* Information*/}
        <Information />

        {/* Facilities*/}
        <Facilities />
      </View>
    </ScreenScrollableWrapper>
  );
}

export default HotelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    borderRadius: 50,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 50,
    left: 20,
  },
  menuButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    height: 'auto',
    width: '100%',
    gap: 10,
    paddingHorizontal: 10,
  },
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
});
