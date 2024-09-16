import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function LoginScreen() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.container}>
          <Text>LoginScreen</Text>
        </View>
      </View>
    </>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
