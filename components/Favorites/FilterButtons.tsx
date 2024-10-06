import { View, StyleSheet } from 'react-native';
import MainButton from '../../ui/MainButton';
import { filterButtonsTitle } from '../../assets/languages';
import {
  toggleHotelsFilter,
  toggleOffersFilter,
} from '../../store/redux/favorites';
import { useAppDispatch } from '../../store/redux/store';
import useFavorites from '../../hooks/getDataHooks/useFavorites';

function FilterButtons() {
  const dispatch = useAppDispatch();

  const { hotelsBtnActivated, offersBtnActivated } = useFavorites();

  function handleClickHotelsFilterBtn() {
    dispatch(toggleHotelsFilter());
  }

  function handleClickOffersFilterBtn() {
    dispatch(toggleOffersFilter());
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <View style={styles.buttonInnerContainer}>
        <MainButton
          inverted={!hotelsBtnActivated}
          title={filterButtonsTitle.hotels[1]}
          onPress={handleClickHotelsFilterBtn}
        />
        <MainButton
          inverted={!offersBtnActivated}
          title={filterButtonsTitle.offers[1]}
          onPress={handleClickOffersFilterBtn}
        />
      </View>
    </View>
  );
}

export default FilterButtons;

const styles = StyleSheet.create({
  buttonOuterContainer: {},
  buttonInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    gap: 10,
    top: -25,
  },
});
