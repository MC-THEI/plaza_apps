import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function SectionWrapper({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor: string;
  padding?: number;
}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            bgColor === 'dark' ? GlobalStyles.colors.neutralWhite : 'white',
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
