import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { hotelCardsTitle } from '../../assets/languages';
import Cards from '../../ui/Cards';
import { NavigationTypes } from '../../types/NavigationTypes';

function HotelsSlider() {
  return (
    <SectionWrapper bgColor={'light'}>
      <SectionTitle title={hotelCardsTitle[1]} />
      <Cards openScreen={NavigationTypes.Hotel} />
    </SectionWrapper>
  );
}

export default HotelsSlider;
