import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

let sectionCount = 0;

function SectionWrapper({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding?: number;
}) {
  sectionCount += 1;
  const isEven = sectionCount % 2 === 0;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !isEven ? GlobalStyles.colors.neutralWhite : 'white',
          paddingVertical: padding ? padding : 40,
        },
      ]}
    >
      {children}
    </View>
  );
}

export default SectionWrapper;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});
