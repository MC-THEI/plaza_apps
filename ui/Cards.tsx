import { View, StyleSheet, FlatList } from 'react-native';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../types/NavigationTypes';
import { IHotel } from '../types/HotelTypes';
import { IOffer } from '../types/OfferTypes';
import { useAppDispatch } from '../store/redux/store';
import { setCurrentHotel } from '../store/redux/hotels';
import { setCurrentOffer } from '../store/redux/offers';

function Cards({
  cardType,
  cardData,
}: {
  cardType: string;
  cardData: IHotel[] | IOffer[];
}) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function handleClick(id: number) {
    if (cardType === NavigationTypes.Hotel)
      navigation.navigate(NavigationTypes.Hotel);
    dispatch(setCurrentHotel(id));

    if (cardType === NavigationTypes.Offer)
      navigation.navigate(NavigationTypes.Offer);
    dispatch(setCurrentOffer(id));
  }

  const renderItem = ({ item }: { item: IHotel | IOffer }) => (
    <Card
      cardType={cardType}
      cardData={item}
      onPress={() => {
        handleClick(item.id);
      }}
    />
  );

  return (
    <FlatList
      data={cardData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}
    />
  );
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 10,
  },
});
