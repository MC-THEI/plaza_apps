import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { hotelCardsTitle } from '../../assets/languages';
import Cards from '../../ui/Cards';
import { NavigationTypes } from '../../types/NavigationTypes';
import { useAppSelector } from '../../store/redux/store';
import { IHotel } from '../../types/HotelTypes';

function HotelsSlider() {
  const { hotels } = useAppSelector((state) => state.hotels);

  return (
    <SectionWrapper bgColor={'light'}>
      <SectionTitle title={hotelCardsTitle[1]} />
      <Cards cardType={NavigationTypes.Hotel} cardData={hotels as IHotel[]} />
    </SectionWrapper>
  );
}

export default HotelsSlider;
