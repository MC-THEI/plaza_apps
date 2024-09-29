import { StyleSheet, ScrollView } from 'react-native';
import Facility from './Facility';
import useHotels from '../../hooks/useHotels';
import { IHotel } from '../../types/HotelTypes';
import { getCurrentObject } from '../../utils/helper';

function FacilitiesContainer() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel: IHotel = getCurrentObject(hotels, currentHotelId);

  console.log(currentHotel?.hopaProperties);

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {currentHotel?.hopaProperties.map((facility) => (
        <Facility key={facility.description} facility={facility} />
      ))}
    </ScrollView>
  );
}

export default FacilitiesContainer;

const styles = StyleSheet.create({
  container: {},
});
