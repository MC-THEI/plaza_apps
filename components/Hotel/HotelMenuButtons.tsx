import { Alert, Linking, StyleSheet, View } from 'react-native';
import HotelMenuButton from './HotelMenuButton';
import { hotelMenuButtonTitles } from '../../assets/languages';
import useHotels from '../../hooks/useHotels';
import { getCurrentObject } from '../../utils/helper';
import { IHotel } from '../../types/HotelTypes';
import { NavigationTypes } from '../../types/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/redux/store';
import { setCameraPosition } from '../../store/redux/map';

function HotelMenuButtons() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel: IHotel = getCurrentObject(hotels, currentHotelId);

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  console.log(currentHotel);

  function handlePressMap() {
    (navigation.navigate as (routeName: string) => void)(NavigationTypes.Map);
    dispatch(
      setCameraPosition({
        zoomLevel: 14,
        centerCoordinate: [
          currentHotel?.location.longitude,
          currentHotel?.location.latitude,
        ],
      })
    );
  }

  function handlePressLink(url: string) {
    if (url) {
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Link is not available');
    }
  }

  return (
    <View style={styles.menuButtonContainer}>
      <HotelMenuButton
        title={hotelMenuButtonTitles.call[1]}
        onPress={() =>
          Linking.openURL(`tel:${currentHotel?.contact.telephone}`)
        }
        iconName={'phone'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.web[1]}
        onPress={() => handlePressLink(currentHotel?.linkDetailPage)}
        iconName={'earth'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.book[1]}
        onPress={() => handlePressLink(currentHotel?.wbe.link)}
        iconName={'arrow-right'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.map[1]}
        onPress={() => handlePressMap()}
        iconName={'map'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.door[1]}
        onPress={() => handlePressLink(currentHotel?.straiv.linkDoor)}
        iconName={'door'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.straiv[1]}
        onPress={() => handlePressLink(currentHotel?.straiv.linkStay)}
        iconName={'info'}
      />
    </View>
  );
}

export default HotelMenuButtons;

const styles = StyleSheet.create({
  menuButtonContainer: {
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    height: 'auto',
    width: '100%',
    gap: 10,
    paddingHorizontal: 10,
  },
});
