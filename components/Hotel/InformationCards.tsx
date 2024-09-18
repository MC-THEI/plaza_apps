import InformationCard from './InformationCard';
import { View, StyleSheet } from 'react-native';

function InformationCards() {
  return (
    <View style={styles.container}>
      <InformationCard />
      <InformationCard />
      <InformationCard />
    </View>
  );
}

export default InformationCards;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
  },
});
