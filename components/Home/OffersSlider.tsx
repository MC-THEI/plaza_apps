import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { offersCardsTitle } from '../../assets/languages';
import Cards from '../../ui/Cards';
import { NavigationTypes } from '../../types/NavigationTypes';

function OffersSlider() {
  return (
    <SectionWrapper bgColor={'dark'}>
      <SectionTitle title={offersCardsTitle[1]} />
      <Cards openScreen={NavigationTypes.Offer} />
    </SectionWrapper>
  );
}

export default OffersSlider;
