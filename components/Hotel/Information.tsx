import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { informationTitle } from '../../assets/languages';
import InformationCards from './InformationCards';
import useHotels from '../../hooks/useHotels';
import { IHotel } from '../../types/HotelTypes';
import { getCurrentObject } from '../../utils/helper';

function Information() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel: IHotel = getCurrentObject(hotels, currentHotelId);

  const props = Object.values(currentHotel.properties);
  console.log(props);

  const information = (
    <SectionWrapper>
      <SectionTitle title={informationTitle[1]} />
      <InformationCards />
    </SectionWrapper>
  );

  return props.length > 0 && information;
}

export default Information;
