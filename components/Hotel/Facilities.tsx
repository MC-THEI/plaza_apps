import SectionTitle from '../../ui/SectionTitle';
import { facilitiesTitle } from '../../assets/languages';
import SectionWrapper from '../../ui/SectionWrapper';
import FacilitiesContainer from './FacilitiesContainer';
import useHotels from '../../hooks/getDataHooks/useHotels';
import { IHotel } from '../../types/HotelTypes';
import { getCurrentObject } from '../../utils/helper';

function Facilities() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel: IHotel = getCurrentObject(hotels, currentHotelId);

  const facilities = (
    <SectionWrapper>
      <SectionTitle title={facilitiesTitle[1]} />
      <FacilitiesContainer />
    </SectionWrapper>
  );

  return currentHotel?.hopaProperties.length > 0 && facilities;
}

export default Facilities;
