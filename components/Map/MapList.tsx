import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  Platform,
} from 'react-native';
import ListItem from '../../ui/List/ListItem';
import { useCallback, useEffect } from 'react';
import useMap from '../../hooks/getDataHooks/useMap';
import { IHotel } from '../../types/HotelTypes';
import { IOffer } from '../../types/OfferTypes';
import uuid from 'react-native-uuid';
import { NavigationTypes } from '../../types/NavigationTypes';
import { noResultsInfo } from '../../assets/languages';
import { GlobalStyles } from '../../constants/styles';
import Spinner from '../../ui/Spinner';

const screenHeight = Dimensions.get('window').height;
const finalHeight =
  screenHeight * 0.6 - (Platform.select({ ios: 115, android: 110 }) ?? 110);

function MapList() {
  const { visibleObjects, filteredObjects, selectedMapList, isMapChanging } =
    useMap();

  const fadeAnim = new Animated.Value(0);

  const renderItem = useCallback(
    ({ item, index }: { item: IHotel | IOffer; index: number }) => {
      const bgColor = index % 2 === 0 ? 'light' : 'dark';

      return (
        <ListItem
          bgColor={bgColor}
          item={item}
          listType={
            selectedMapList === NavigationTypes.Hotel
              ? NavigationTypes.Hotel
              : NavigationTypes.Offer
          }
        />
      );
    },
    [selectedMapList]
  );

  function NoResults() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>{noResultsInfo[1]}</Text>
      </View>
    );
  }

  useEffect(() => {
    if (!isMapChanging) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }, [isMapChanging, fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        {!isMapChanging && (
          <FlatList
            data={visibleObjects}
            renderItem={renderItem}
            keyExtractor={() => uuid.v4().toString()}
          />
        )}
      </Animated.View>

      {isMapChanging && (
        <View style={styles.textContainer}>
          <Spinner size={45} color={GlobalStyles.colors.neutralGray_dark} />
        </View>
      )}
      {visibleObjects.length === 0 && <NoResults />}
      {filteredObjects.length === 0 && <NoResults />}
    </View>
  );
}

export default MapList;

const styles = StyleSheet.create({
  container: {
    height: finalHeight,
  },
  textContainer: {
    height: finalHeight,
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'lato-v16-latin-700',
    fontSize: 20,
  },

  spinner: {
    color: GlobalStyles.colors.accentGold,
    fontSize: 40,
  },
});
