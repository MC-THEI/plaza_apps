import {
  View,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  Pressable,
} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci, IcoMoon_pwai } from '../../ui/IcoMoon';
import { IProperties } from '../../types/HotelTypes';
import { useRef, useState } from 'react';
import Tooltip from '../../ui/Tooltip';

const deviceWidth = Dimensions.get('window').width;

function InformationCard({ property }: { property: IProperties }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const buttonRef = useRef(null);
  let icon = '';

  switch (property.name.toLowerCase()) {
    case 'frühstück':
      icon = 'breakfast';
      break;
    case 'breakfast':
      icon = 'breakfast';
      break;
    case 'sauna':
      icon = 'sauna';
      break;
    case 'hunde':
      icon = 'pets';
      break;
    case 'dogs':
      icon = 'pets';
      break;
    case 'parken':
      icon = 'parking';
      break;
    case 'parking':
      icon = 'parking';
      break;
    case 'garage':
      icon = 'parking';
      break;
    case 'tiefgarage':
      icon = 'parking';
      break;
  }

  const infoTab = property.description !== '' && (
    <Pressable
      ref={buttonRef}
      style={styles.infoContainer}
      onPress={() => setTooltipVisible(true)}
    >
      <Tooltip
        visible={tooltipVisible}
        text={property.description}
        onClose={() => setTooltipVisible(false)}
      />
      <IcoMoon_pwai
        name={'info'}
        color={GlobalStyles.colors.neutralGray_dark}
        style={styles.infoIcon}
        size={16}
      />
    </Pressable>
  );

  return (
    <View style={[styles.container, styles.shadow]}>
      {infoTab}
      <View>
        <IcoMoon_mci
          name={icon}
          color={GlobalStyles.colors.neutralGray_dark}
          size={25}
        />
      </View>
      <View>
        <Text style={[styles.text, styles.textBold]}>{property.name}</Text>
      </View>
      <View>
        <Text style={styles.text}>
          {property.price} {property.quantityBaseText}
        </Text>
      </View>
    </View>
  );
}

export default InformationCard;

const styles = StyleSheet.create({
  container: {
    flexBasis: deviceWidth > 500 ? '30%' : '47%',
    height: 85,
    backgroundColor: 'white',
    borderRadius: 6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    position: 'relative',
    overflow: 'hidden',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  shadow: {
    elevation: 6,
    shadowColor: Platform.select({ ios: '#00000080', android: '#00000070' }),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  text: {
    fontFamily: 'lato-v16-latin-regular',
  },
  textBold: {
    fontFamily: 'lato-v16-latin-700',
  },
  infoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }],
    top: -35,
    right: -35,
    width: 70,
    height: 70,
    backgroundColor: GlobalStyles.colors.accentGold,
  },
  infoIcon: {
    color: GlobalStyles.colors.neutralGray_dark,
    position: 'absolute',
    bottom: 6,
    transform: [{ rotate: '-45deg' }],
  },
});
