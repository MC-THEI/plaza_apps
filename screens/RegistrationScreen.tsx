import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function RegistrationScreen() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Text>RegistrationScreen</Text>
        </View>
      </View>
    </>
  );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
