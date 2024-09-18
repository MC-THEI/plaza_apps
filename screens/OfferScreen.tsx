import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../ui/NavBar';

function OfferScreen() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Text>Titelbild</Text>
        </View>
      </View>
    </>
  );
}

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
