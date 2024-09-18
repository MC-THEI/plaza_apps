import { View, StyleSheet, ScrollView } from 'react-native';
import Facility from './Facility';

function FacilitiesContainer() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Facility />
      <Facility />
      <Facility />
      <Facility />
      <Facility />
      <Facility />
      <Facility />
      <Facility />
    </ScrollView>
  );
}

export default FacilitiesContainer;

const styles = StyleSheet.create({
  container: {},
});
