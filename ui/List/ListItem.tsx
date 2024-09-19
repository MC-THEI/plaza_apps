import { Image, View, StyleSheet, Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci, IcoMoon_pwai } from '../IcoMoon';

function ListItem({ item, bgColor }: { item: any; bgColor: string }) {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            bgColor === 'dark' ? GlobalStyles.colors.neutralWhite : 'white',
        },
      ]}
    >
      <View style={styles.imgTextContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://preview.plazahotels.de/media/210_dz-komfort.jpg',
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.textName}>Plaza Hotels Hanau</Text>
            <View style={styles.locationContainer}>
              <IcoMoon_mci
                name="marker"
                color={GlobalStyles.colors.accentGold}
                size={15}
              />
              <Text style={styles.locationText}>DE-Brunswick</Text>
            </View>
          </View>
          {/* Name*/}
          {/* Location*/}
        </View>
      </View>
      <View style={styles.favBtnContainer}>
        <IcoMoon_pwai
          name="heart"
          color={GlobalStyles.colors.accentGold}
          size={22}
        />
      </View>
    </Pressable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    height: 87,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgTextContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 120,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '97%',
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  textName: {
    fontSize: GlobalStyles.fontSize.listFontSize,
    fontFamily: 'lato-v16-latin-700',
    textTransform: 'uppercase',
  },
  locationText: {
    fontFamily: 'lato-v16-latin-700',
    color: GlobalStyles.colors.neutralGray_light,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  favBtnContainer: {
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingRight: 10,
  },
});
