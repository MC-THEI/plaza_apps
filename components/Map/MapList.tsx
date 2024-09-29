import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import ListItem from '../../ui/List/ListItem';
import { useCallback } from 'react';

const dummyData = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 6 },
  { id: 7 },
];

const screenHeight = Dimensions.get('window').height;
const finalHeight = screenHeight * 0.6 - 110;

function MapList() {
  const renderItem = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const bgColor = index % 2 === 0 ? 'light' : 'dark';
      return <ListItem bgColor={bgColor} data={item} key={item.id} />;
    },
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default MapList;

const styles = StyleSheet.create({
  container: {
    height: finalHeight,
  },
});
