import { View, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
];

function ObjectList() {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <ListItem
          key={item.id}
          item={item}
          bgColor={index % 2 === 0 ? 'light' : 'dark'}
        />
      ))}
    </View>
  );
}

export default ObjectList;

const styles = StyleSheet.create({
  container: {
    gap: 3,
    paddingTop: 40,
  },
});
