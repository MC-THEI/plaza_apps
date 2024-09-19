import { View, StyleSheet, Text } from 'react-native';
import Accordion from '../Accordion';
import ListItem from './ListItem';
import { useState } from 'react';
import { IcoMoon_pwai } from '../IcoMoon';
import { GlobalStyles } from '../../constants/styles';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
];

function ObjectList({ children }: { children: React.ReactNode }) {
  const [openAccordion, setOpenAccordion] = useState(false);
  function handleClickOpenAccordion() {
    setOpenAccordion((prev) => !prev);
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
            item={item}
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
  icon: {
    color: GlobalStyles.colors.accentGold,
    height: 20,
    width: 20,
    marginRight: 20,
  },
});
