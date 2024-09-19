import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function MapScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>MapScreen</Text>
        </View>
      </View>
    </>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
