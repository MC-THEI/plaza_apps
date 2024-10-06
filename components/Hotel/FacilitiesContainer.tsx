import { StyleSheet, ScrollView } from 'react-native';
import Facility from './Facility';
import useHotels from '../../hooks/getDataHooks/useHotels';
import { IHotel } from '../../types/HotelTypes';
import { getCurrentObject } from '../../utils/helper';
import { useRef } from 'react';

function FacilitiesContainer() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel: IHotel = getCurrentObject(hotels, currentHotelId);
  const buttonRef = useRef(null);

  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ref={buttonRef}
    >
      {currentHotel?.hopaProperties.map((facility) => (
        <Facility
          key={facility.description}
          facility={facility}
          buttonRef={buttonRef}
        />
      ))}
    </ScrollView>
  );
}

export default FacilitiesContainer;

const styles = StyleSheet.create({
  container: {},
});
