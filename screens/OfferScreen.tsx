import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import ScreenHeader from '../ui/ScreenHeader';
import ScreenScrollableWrapper from '../ui/ScreenScrollableWrapper';
import MainTitle from '../components/Home/MainTitle';
import { GlobalStyles } from '../constants/styles';
import PriceButton from '../components/Offer/PriceButton';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { ourOfferTitle } from '../assets/languages';
import { useSharedValue } from 'react-native-reanimated';
import Accordion from '../ui/Accordion';
import { IcoMoon_pwai } from '../ui/IcoMoon';
import { useState } from 'react';

const deviceWidth = Dimensions.get('window').width;

function OfferScreen() {
  const [openAccordion, setOpenAccordion] = useState(false);
  function handleClickOpenAccordion() {
    setOpenAccordion((prev) => !prev);
  }

  return (
    <ScreenScrollableWrapper>
      <View style={styles.container}>
        {/* Header*/}
        <ScreenHeader
          bgImg={'https://preview.plazahotels.de/media/210_dz-komfort.jpg'}
          isUrl={true}
          height={400}
        >
          <Image
            style={styles.logo}
            source={{ uri: 'https://placehold.co/50.png' }}
          />

          <MainTitle
            title={{ mainTitle: 'Plaza Weekend Angebot' }}
            height={{ height: '60%' }}
          />
        </ScreenHeader>

        {/* Search Buttons*/}
        <PriceButton />

        {/* Subtitle*/}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subTitleText}>PLaza Weekend Offer</Text>
          <Text style={styles.subTitleText}>
            Best Western Hotel Braunschweig
          </Text>
        </View>

        {/* Accordion */}
        <SectionWrapper bgColor={'light'}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <SectionTitle title={ourOfferTitle[1]} />
            <IcoMoon_pwai
              name="arrow-back"
              size={20}
              onPress={() => handleClickOpenAccordion()}
              style={{
                color: GlobalStyles.colors.accentGold,
                height: 20,
                width: 20,
                transform: [{ rotate: openAccordion ? '90deg' : '-90deg' }],
              }}
            />
          </View>

          <Accordion open={openAccordion}>
            <Text>Lorem ipsum dolor sit amet Lorem</Text>
            <Text>Lorem ipsum dolor sit amet Lorem</Text>
            <Text>Lorem ipsum dolor sit amet Lorem</Text>
            <Text>Lorem ipsum dolor sit amet Lorem</Text>
          </Accordion>
        </SectionWrapper>
      </View>
    </ScreenScrollableWrapper>
  );
}

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  subtitleContainer: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
    zIndex: -1,
  },
  subTitleText: {
    fontSize: deviceWidth > 500 ? 22 : 20,
    color: 'white',
  },
  logo: {
    borderRadius: 50,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 50,
    left: 20,
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
  icon: {},
});
