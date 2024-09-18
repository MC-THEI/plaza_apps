import { Text, View, StyleSheet } from 'react-native';

function FavoriteIcon({ style }: { style?: {} }) {
  return (
    <View style={styles.container}>
      <Text>F</Text>
    </View>
  );
}

export default FavoriteIcon;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
});
