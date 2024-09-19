import { View, StyleSheet, FlatList } from 'react-native';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../types/NavigationTypes';

function Cards({ openScreen }: { openScreen: string }) {
  const cardData = [{ id: '1' }, { id: '2' }, { id: '3' }];
  const navigation = useNavigation();

  function handleClick() {
    let navigateScreen;

    if (openScreen === NavigationTypes.Hotel)
      navigation.navigate(NavigationTypes.Hotel);
    if (openScreen === NavigationTypes.Offer)
      navigation.navigate(NavigationTypes.Offer);
  }

  const renderItem = ({ item }: any) => (
    <Card
      onPress={() => {
        handleClick();
      }}
    />
  );

  return (
    <FlatList
      data={cardData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
