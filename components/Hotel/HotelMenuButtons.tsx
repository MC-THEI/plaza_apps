import { StyleSheet, View } from 'react-native';
import HotelMenuButton from './HotelMenuButton';
import { hotelMenuButtonTitles } from '../../assets/languages';

function HotelMenuButtons() {
  return (
    <View style={styles.menuButtonContainer}>
      <HotelMenuButton
        title={hotelMenuButtonTitles.call[1]}
        onPress={() => console.log('Pressed')}
        iconName={'phone'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.web[1]}
        onPress={() => console.log('Pressed')}
        iconName={'earth'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.book[1]}
        onPress={() => console.log('Pressed')}
        iconName={'arrow-right'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.map[1]}
        onPress={() => console.log('Pressed')}
        iconName={'map'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.door[1]}
        onPress={() => console.log('Pressed')}
        iconName={'door'}
      />
      <HotelMenuButton
        title={hotelMenuButtonTitles.straiv[1]}
        onPress={() => console.log('Pressed')}
        iconName={'info'}
      />
    </View>
  );
}

export default HotelMenuButtons;

const styles = StyleSheet.create({
  menuButtonContainer: {
    position: 'absolute',
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    height: 'auto',
    width: '100%',
    gap: 10,
    paddingHorizontal: 10,
  },
});
