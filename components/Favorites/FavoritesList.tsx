import { View, StyleSheet } from 'react-native';
import ObjectList from '../../ui/List/ObjectList';
import SectionTitle from '../../ui/SectionTitle';
import {
  mainTitleHotelFavorites,
  mainTitleOfferFavorites,
} from '../../assets/languages';
import useFavorites from '../../hooks/getDataHooks/useFavorites';
import useHotels from '../../hooks/getDataHooks/useHotels';
import useOffers from '../../hooks/getDataHooks/useOffers';
import { filterObjectsByIds } from '../../utils/helper';
import { IOffer } from '../../types/OfferTypes';
import { IHotel } from '../../types/HotelTypes';
import { NavigationTypes } from '../../types/NavigationTypes';

function FavoritesList() {
  const {
    favoritesHotelIds,
    favoritesOfferIds,
    hotelsBtnActivated,
    offersBtnActivated,
  } = useFavorites();
  const { hotels } = useHotels();
  const { offers } = useOffers();

  const favHotels = filterObjectsByIds(hotels, favoritesHotelIds);
  const favOffers = filterObjectsByIds(offers, favoritesOfferIds);

  const hotelsList = (
    <ObjectList data={favHotels as IHotel[]} listType={NavigationTypes.Hotel}>
      <View style={styles.title}>
        <SectionTitle title={mainTitleHotelFavorites[1]} />
      </View>
    </ObjectList>
  );

  const offersList = (
    <ObjectList data={favOffers as IOffer[]} listType={NavigationTypes.Offer}>
      <View style={styles.title}>
        <SectionTitle title={mainTitleOfferFavorites[1]} />
      </View>
    </ObjectList>
  );

  return (
    <View style={styles.listContainer}>
      {favHotels.length > 0 && hotelsBtnActivated && hotelsList}
      {favOffers.length > 0 && offersBtnActivated && offersList}
    </View>
  );
}

export default FavoritesList;

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 30,
  },
  title: {
    paddingHorizontal: 20,
  },
});
