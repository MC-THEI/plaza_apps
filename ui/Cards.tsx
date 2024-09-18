import { View, StyleSheet, FlatList } from 'react-native';
import Card from './Card';

function Cards() {
  const cardData = [{ id: '1' }, { id: '2' }, { id: '3' }];

  const renderItem = ({ item }: any) => <Card />;

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
