import SectionTitle from '../../ui/SectionTitle';
import SectionWrapper from '../../ui/SectionWrapper';
import { toHotel } from '../../assets/languages';
import Card from '../../ui/Card';
import { NavigationTypes } from '../../types/NavigationTypes';
import { useAppDispatch } from '../../store/redux/store';
import { useNavigation } from '@react-navigation/native';
import { IHotel } from '../../types/HotelTypes';
import { setCurrentHotel } from '../../store/redux/hotels';
import { getCurrentObject } from '../../utils/helper';
import useOffers from '../../hooks/useOffers';
import useHotels from '../../hooks/useHotels';

function ToHotel() {
  const { currentOfferId, offers } = useOffers();
  const { hotels } = useHotels();

  const currentOffer = getCurrentObject(offers, currentOfferId);
  const offerHotel = getCurrentObject(hotels, currentOffer?.hotel.id);

  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  function handlePress() {
    dispatch(setCurrentHotel(offerHotel?.id as number));
    (navigation.navigate as (routeName: string) => void)(NavigationTypes.Hotel);
  }

  return (
    <SectionWrapper>
      <SectionTitle title={toHotel[1]} />
      <Card
        cardType={NavigationTypes.Hotel}
        cardData={offerHotel as IHotel}
        onPress={() => handlePress()}
        fullSize={true}
      />
    </SectionWrapper>
  );
}

export default ToHotel;
