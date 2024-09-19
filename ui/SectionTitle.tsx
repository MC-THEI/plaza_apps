import { Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/styles';

function SectionTitle({
  title,
}: {
  title: { mainTitle?: string; subTitle?: string };
}) {
  return (
    <Text style={styles.container}>
      {title.mainTitle} <Text style={styles.subtitle}>{title.subTitle}</Text>
    </Text>
  );
}

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    textTransform: 'uppercase',
    marginBottom: 15,
    fontSize: GlobalStyles.fontSize.sectionTitleFontSize,
    fontFamily: 'lato-v16-latin-700',
  },
  subtitle: {
    color: GlobalStyles.colors.accentGold,
  },
});
