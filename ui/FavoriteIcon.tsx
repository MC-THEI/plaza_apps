import { GlobalStyles } from '../constants/styles';
import { IcoMoon_pwai } from './IcoMoon';
import { useState } from 'react';
import { Pressable } from 'react-native';

function FavoriteIcon({ size }: { size?: number }) {
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <Pressable>
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
