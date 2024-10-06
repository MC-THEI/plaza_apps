import ContactButton from './ContactButton';
import { View, StyleSheet, Text, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../../types/NavigationTypes';
import { getCurrentObject, sendEmail } from '../../utils/helper';
import useOffers from '../../hooks/getDataHooks/useOffers';
import useHotels from '../../hooks/getDataHooks/useHotels';
import { useAppDispatch } from '../../store/redux/store';
import { setCameraPosition } from '../../store/redux/map';

function ContactButtons() {
  const navigation = useNavigation();
  const { currentOfferId, offers } = useOffers();
  const { hotels } = useHotels();

  const currentOffer = getCurrentObject(offers, currentOfferId);
  const offerHotel = getCurrentObject(hotels, currentOffer?.hotel.id);

  const dispatch = useAppDispatch();
  function handlePressMap() {
    (navigation.navigate as (routeName: string) => void)(NavigationTypes.Map);
    dispatch(
      setCameraPosition({
        zoomLevel: 14,
        centerCoordinate: [
          offerHotel?.location.longitude,
          offerHotel?.location.latitude,
        ],
      })
    );
  }

  return (
    <View style={styles.container}>
      <ContactButton
        iconType="mci"
        iconName="marker"
        data={
          <Text>
            {offerHotel?.location.street} {'\n'}
            {offerHotel?.location.postal}
            {offerHotel?.location.city}
          </Text>
        }
        onPress={() => handlePressMap()}
      />
      <ContactButton
        iconType="mci"
        iconName="phone"
        data={offerHotel?.contact.telephone}
        onPress={() => Linking.openURL(`tel:${offerHotel?.contact.telephone}`)}
      />
      <ContactButton
        iconType="pwai"
        iconName="envelope"
        data={offerHotel?.contact.email}
        onPress={() => sendEmail(offerHotel?.contact.email)}
      />
    </View>
  );
}
export default ContactButtons;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
