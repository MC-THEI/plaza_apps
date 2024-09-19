import ContactButton from './ContactButton';
import { View, StyleSheet } from 'react-native';

function ContactButtons() {
  return (
    <View style={styles.container}>
      <ContactButton
        iconType="mci"
        iconName="marker"
        data={'Montaunusstarße. 100, D-41515 Grevenbroich'}
        onPress={() => console.log('location')}
      />
      <ContactButton
        iconType="mci"
        iconName="phone"
        data={'+49 2181 609 0'}
        onPress={() => console.log('phone')}
      />
      <ContactButton
        iconType="pwai"
        iconName="envelope"
        data={'dQpD1@example.com'}
        onPress={() => console.log('mail')}
      />
    </View>
  );
}
export default ContactButtons;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
