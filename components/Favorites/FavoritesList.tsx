import { View, StyleSheet } from 'react-native';
import ObjectList from '../../ui/List/ObjectList';
import SectionTitle from '../../ui/SectionTitle';
import {
  mainTitleHotelFavorites,
  mainTitleOfferFavorites,
} from '../../assets/languages';

function FavoritesList() {
  return (
    <View style={styles.listContainer}>
      <ObjectList>
        <View style={styles.title}>
          <SectionTitle title={mainTitleHotelFavorites[1]} />
        </View>
      </ObjectList>
      <ObjectList>
        <View style={styles.title}>
          <SectionTitle title={mainTitleOfferFavorites[1]} />
        </View>
      </ObjectList>
    </View>
  );
}

export default FavoritesList;

const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 30,
  },
  title: {
    paddingHorizontal: 20,
  },
});
