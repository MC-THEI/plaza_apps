import { View, StyleSheet } from 'react-native';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import Rating from '../components/Hotel/Rating';
import Information from '../components/Hotel/Information';
import Facilities from '../components/Hotel/Facilities';
import HotelHero from '../components/Hotel/HotelHero';

function HotelScreen() {
  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        <HotelHero />
        <Rating />
        <Information />
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
});
