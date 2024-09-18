import { View, StyleSheet, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import SearchButtons from '../components/Home/SearchButtons';
import ScreenHeader from '../ui/ScreenHeader';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import Cards from '../ui/Cards';
import {
  hotelCardsTitle,
  mainTitleHome,
  offersCardsTitle,
} from '../assets/languages';
import MainTitle from '../components/Home/MainTitle';
import { GlobalStyles } from '../constants/styles';
import { IcoMoon_pwai } from '../ui/IcoMoon';

function HomeScreen() {
  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Header*/}
        <ScreenHeader bgImg="home" isUrl={false}>
          <Image
            style={styles.logo}
            source={require('../assets/images/plaza-logo-weiss.png')}
          />

          <MainTitle title={mainTitleHome[1]} />

          {/* Icon */}
          <View style={styles.iconContainer}>
            <IcoMoon_pwai
              name="search"
              size={45}
              color={GlobalStyles.colors.accentGold}
            />
          </View>
        </ScreenHeader>

        {/* Search Buttons*/}
        <SearchButtons />

        <View style={styles.cardsContainer}>
          {/* Hotels*/}
          <SectionWrapper bgColor={'light'}>
            <View style={styles.cardInnerContainer}>
              <SectionTitle title={hotelCardsTitle[1]} />
              <Cards />
            </View>
          </SectionWrapper>

          {/* Offers*/}
          <SectionWrapper bgColor={'dark'}>
            <SectionTitle title={offersCardsTitle[1]} />
            <Cards />
          </SectionWrapper>
        </View>
      </View>
    </ScreenScrollableWrapper>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  cardsContainer: {
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
