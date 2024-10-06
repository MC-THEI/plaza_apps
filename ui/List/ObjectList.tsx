import { View, StyleSheet, Text } from 'react-native';
import Accordion from '../Accordion';
import ListItem from './ListItem';
import { useState } from 'react';
import { IcoMoon_pwai } from '../IcoMoon';
import { GlobalStyles } from '../../constants/styles';
import { IHotel } from '../../types/HotelTypes';
import { IOffer } from '../../types/OfferTypes';
import { NavigationTypes } from '../../types/NavigationTypes';

function ObjectList({
  children,
  data,
  listType,
}: {
  children: React.ReactNode;
  data: IHotel[] | IOffer[];
  listType: NavigationTypes;
}) {
  const [openAccordion, setOpenAccordion] = useState(false);
  function handleClickOpenAccordion() {
    setOpenAccordion((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {children}
        <IcoMoon_pwai
          name="arrow-back"
          size={20}
          onPress={() => handleClickOpenAccordion()}
          style={[
            styles.icon,
            {
              transform: [{ rotate: openAccordion ? '90deg' : '-90deg' }],
            },
          ]}
        />
      </View>

      <Accordion open={openAccordion} minVisibleHeight={170}>
        {data.map((item, index) => (
          <ListItem
            key={item.id}
            item={item as IHotel | IOffer}
            listType={listType as NavigationTypes}
            bgColor={index % 2 === 0 ? 'light' : 'dark'}
          />
        ))}
      </Accordion>
    </View>
  );
}

export default ObjectList;

const styles = StyleSheet.create({
  container: {
    gap: 3,
    paddingTop: 40,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: GlobalStyles.colors.accentGold,
    height: 20,
    width: 20,
    marginRight: 20,
  },
});
