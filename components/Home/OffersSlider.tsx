import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { offersCardsTitle } from '../../assets/languages';
import Cards from '../../ui/Cards';
import { NavigationTypes } from '../../types/NavigationTypes';
import { useAppSelector } from '../../store/redux/store';
import { IOffer } from '../../types/OfferTypes';

function OffersSlider({}) {
  const { offers } = useAppSelector((state) => state.offers);

  return (
    <SectionWrapper bgColor={'dark'}>
      <SectionTitle title={offersCardsTitle[1]} />
      <Cards cardType={NavigationTypes.Offer} cardData={offers as IOffer[]} />
    </SectionWrapper>
  );
}

export default OffersSlider;
