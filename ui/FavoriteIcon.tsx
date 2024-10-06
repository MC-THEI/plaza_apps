import { GlobalStyles } from '../constants/styles';
import { IcoMoon_pwai } from './IcoMoon';
import { Pressable } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/redux/store';
import {
  storeDataAsync,
  toggleFavoriteHotel,
  toggleFavoriteOffer,
} from '../store/redux/favorites';
import { NavigationTypes } from '../types/NavigationTypes';

function FavoriteIcon({
  size,
  id,
  favName,
  color = GlobalStyles.colors.accentRed,
}: {
  color?: string;
  size?: number;
  id: number;
  favName: string;
}) {
  const { favoritesHotelIds, favoritesOfferIds } = useAppSelector(
    (state) => state.favorites
  );

  const dispatch = useAppDispatch();

  const isHotelFav = favName === NavigationTypes.Hotel;
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
        <IcoMoon_pwai name="heart-contour" size={size} color={color} />
      )}
    </Pressable>
  );
}

export default FavoriteIcon;
