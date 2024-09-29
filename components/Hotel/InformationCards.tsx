import InformationCard from './InformationCard';
import { View, StyleSheet } from 'react-native';
import useHotels from '../../hooks/useHotels';
import { IHotel } from '../../types/HotelTypes';
import { getCurrentObject } from '../../utils/helper';

function InformationCards() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel: IHotel = getCurrentObject(hotels, currentHotelId);

  const properties = Object.values(currentHotel.properties);

  return (
    <View style={styles.container}>
      {properties.map((property) => (
        <InformationCard property={property} key={property.name} />
      ))}
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
