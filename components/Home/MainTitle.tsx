import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function MainTitle({
  title,
  fontSize,
  height,
}: {
  title?: { mainTitle?: string; subTitle?: string };
  fontSize?: {};
  height?: {};
}) {
  return (
    <View style={[styles.titleContainer, height]}>
      <Text style={[styles.title, fontSize]}>
        {title?.mainTitle}
        <Text style={styles.subTitle}> {title?.subTitle}</Text>
      </Text>
    </View>
  );
}

export default MainTitle;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '93%',
    marginTop: 125,
    paddingHorizontal: 25,
  },
  title: {
    fontFamily: 'lato-v16-latin-300',
    color: 'white',
    textAlign: 'center',
    fontSize: GlobalStyles.fontSize.titleFontSize,
  },
  subTitle: {
    color: GlobalStyles.colors.accentGold,
  },
});
