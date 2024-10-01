import { GlobalStyles } from '../constants/styles';
import { IcoMoon_pwai } from './IcoMoon';
import { Pressable } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/redux/store';
import {
  storeDataAsync,
  toggleFavoriteHotel,
  toggleFavoriteOffer,
} from '../store/redux/favorites';

function FavoriteIcon({
  size,
  id,
  favName,
}: {
  size?: number;
  id: number;
  favName: string;
}) {
  const { favoritesHotelIds, favoritesOfferIds } = useAppSelector(
    (state) => state.favorites
  );

  const dispatch = useAppDispatch();

  const isHotelFav = favName === 'Hotel';
  const favoriteIds = isHotelFav ? favoritesHotelIds : favoritesOfferIds;
  const isFavorite = favoriteIds.indexOf(id) !== -1;

  function toggleFavorite() {
    if (isHotelFav) {
      dispatch(toggleFavoriteHotel(id as number));
      dispatch(storeDataAsync());
    } else {
      dispatch(toggleFavoriteOffer(id as number));
      dispatch(storeDataAsync());
    }
  }

  return (
    <Pressable onPress={() => toggleFavorite()}>
      {isFavorite && (
        <IcoMoon_pwai
          name="heart"
          size={size}
          color={GlobalStyles.colors.accentRed}
        />
      )}
      {!isFavorite && (
        <IcoMoon_pwai
          name="heart-contour"
          size={size}
          color={GlobalStyles.colors.accentRed}
        />
      )}
    </Pressable>
  );
}

export default FavoriteIcon;
