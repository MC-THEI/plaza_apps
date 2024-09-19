import { View, StyleSheet } from 'react-native';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import FilterButtons from '../components/Favorites/FilterButtons';
import FavoritesHero from '../components/Favorites/FavoritesHero';
import FavoritesList from '../components/Favorites/FavoritesList';

function FavoritesScreen() {
  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        <FavoritesHero />
        <FilterButtons />
        <FavoritesList />
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
});
