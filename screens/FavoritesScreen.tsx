import { View, StyleSheet, Image, Text } from 'react-native';
import ScreenHeader from '../ui/ScreenHeader';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import { mainTitleFavorites } from '../assets/languages';
import MainTitle from '../components/Home/MainTitle';
import { GlobalStyles } from '../constants/styles';
import FilterButtons from '../components/Favorites/FilterButtons';
import ObjectList from '../ui/List/ObjectList';

function FavoritesScreen() {
  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        {/* Header*/}
        <ScreenHeader bgImg="favorite" isUrl={false}>
          <Image
            style={styles.logo}
            source={require('../assets/images/plaza-logo-weiss.png')}
          />

          <MainTitle title={mainTitleFavorites[1]} />
        </ScreenHeader>

        {/* Search Buttons*/}
        <FilterButtons />

        {/* List*/}
        <View style={styles.listContainer}>
          <ObjectList />
        </View>
      </View>
    </ScreenScrollableWrapper>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  listContainer: {
    marginTop: 30,
  },
  cardInnerContainer: {
    overflow: 'scroll',
  },
  logo: {
    marginLeft: 20,
    marginTop: 50,
    width: 130,
    height: 70,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleIcon: {
    color: GlobalStyles.colors.accentGold,
    paddingTop: 30,
    fontSize: 20,
  },
});
