import { View, StyleSheet, FlatList } from 'react-native';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../types/NavigationTypes';
import { IHotel } from '../types/HotelTypes';
import { IOffer } from '../types/OfferTypes';

function Cards({
  openScreen,
  cardData,
}: {
  openScreen: string;
  cardData: IHotel[] | IOffer[];
}) {
  console.log(cardData);
  const navigation = useNavigation();

  function handleClick() {
    if (openScreen === NavigationTypes.Hotel)
      navigation.navigate(NavigationTypes.Hotel);
    if (openScreen === NavigationTypes.Offer)
      navigation.navigate(NavigationTypes.Offer);
  }

  const renderItem = ({ item }: { item: IHotel | IOffer }) => (
    <Card
      cardData={item}
      onPress={() => {
        handleClick();
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
