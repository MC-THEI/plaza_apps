import { StyleSheet, FlatList } from 'react-native';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../types/NavigationTypes';
import { IHotel } from '../types/HotelTypes';
import { IOffer } from '../types/OfferTypes';
import { useAppDispatch } from '../store/redux/store';
import { setCurrentHotel } from '../store/redux/hotels';
import { setCurrentOffer } from '../store/redux/offers';
import { useMemo, useCallback } from 'react';
import React from 'react';

function Cards({
  cardType,
  cardData,
}: {
  cardType: string;
  cardData: IHotel[] | IOffer[];
}) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    (id: number) => {
      if (cardType === NavigationTypes.Hotel) {
        (navigation.navigate as (routeName: string) => void)(
          NavigationTypes.Hotel
        );
        dispatch(setCurrentHotel(id));
      } else if (cardType === NavigationTypes.Offer) {
        (navigation.navigate as (routeName: string) => void)(
          NavigationTypes.Offer
        );
        dispatch(setCurrentOffer(id));
      }
    },
    [cardType, dispatch, navigation]
  );

  const renderItem = useMemo(
    () =>
      ({ item }: { item: IHotel | IOffer }) => (
        <Card
          cardType={cardType}
          cardData={item}
          onPress={() => {
            handleClick(item.id);
          }}
        />
      ),
    [cardType, handleClick]
  );

  const keyExtractor = useCallback(
    (item: IHotel | IOffer) => item.id.toString(),
    []
  );

  return (
    <FlatList
      data={cardData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      alwaysBounceHorizontal={false}
    />
  );
}

export default React.memo(Cards);

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 10,
  },
});
