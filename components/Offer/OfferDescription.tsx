import SectionWrapper from '../../ui/SectionWrapper';
import { Text, View } from 'react-native';
import SectionTitle from '../../ui/SectionTitle';
import { ourOfferTitle } from '../../assets/languages';
import { IcoMoon_pwai } from '../../ui/IcoMoon';
import { GlobalStyles } from '../../constants/styles';
import Accordion from '../../ui/Accordion';
import { useState } from 'react';

function OfferDescription() {
  const [openAccordion, setOpenAccordion] = useState(false);
  function handleClickOpenAccordion() {
    setOpenAccordion((prev) => !prev);
  }

  return (
    <SectionWrapper bgColor={'light'}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
        <Text>Lorem ipsum dolor sit amet Lorem</Text>
      </Accordion>
    </SectionWrapper>
  );
}

export default OfferDescription;
