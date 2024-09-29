import { View, StyleSheet } from 'react-native';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import PriceButton from '../components/Offer/PriceButton';
import ContactButtons from '../components/Offer/ContactButtons';
import OfferDescription from '../components/Offer/OfferDescription';
import SubTitle from '../components/Offer/SubTitle';
import OfferHero from '../components/Offer/OfferHero';
import OfferPeriod from '../components/Offer/OfferPeriod';
import ToHotel from '../components/Offer/ToHotel';

function OfferScreen() {
  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        <OfferHero />
        <PriceButton />
        <SubTitle />
        <OfferDescription />
        <ContactButtons />
        <OfferPeriod />
        <ToHotel />
      </View>
    </ScreenScrollableWrapper>
  );
}

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
