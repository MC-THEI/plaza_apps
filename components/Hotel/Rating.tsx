import SectionWrapper from '../../ui/SectionWrapper';
import SectionTitle from '../../ui/SectionTitle';
import { ratingTitle } from '../../assets/languages';
import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Rating() {
  return (
    <SectionWrapper bgColor={'light'}>
      <SectionTitle title={ratingTitle[1]} />
      <View style={styles.ratingContainer}>
        <View style={styles.numberContainer}>
          <Text style={styles.ratingBumber}>8.4</Text>
        </View>
        <View>
          <Text style={styles.ratingText}>Sehr Gut</Text>
          <Text>824 Bewertungen auf iiQ</Text>
        </View>
      </View>
    </SectionWrapper>
  );
}

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ratingText: {
    fontFamily: 'lato-v16-latin-700',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  numberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: GlobalStyles.colors.accentGold,
  },
  ratingBumber: {
    fontSize: 16,
    color: GlobalStyles.colors.accentGold,
  },
});
