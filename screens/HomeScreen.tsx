import { View, StyleSheet, Image, Text } from 'react-native';
import SearchButtons from '../components/Home/SearchButtons';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import OffersSlider from '../components/Home/OffersSlider';
import HotelsSlider from '../components/Home/HotelsSlider';
import HomeHero from '../components/Home/HomeHero';

function HomeScreen() {
  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        <HomeHero />
        <SearchButtons />
        <View style={styles.cardsContainer}>
          <HotelsSlider />
          <OffersSlider />
        </View>
      </View>
    </ScreenScrollableWrapper>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardsContainer: {
    marginTop: 30,
  },
});
