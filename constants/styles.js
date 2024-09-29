import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;

export const GlobalStyles = {
  colors: {
    neutralGray_light: '#707070',
    neutralGray_dark: '#3D3D3D',
    accentGold: '#D6CA90',
    accentGold_pressed: '#ece0a5',
    accentRed: '#B82959',
    neutralWhite: '#F9F9F9',
    successGreen_light: '#E6FAED',
    successGreen_primary: '#00AF8B',
  },
  fontSize: {
    titleFontSize: deviceWidth > 500 ? 60 : 37,
    mainButtonFontSize: 16,
    cardFontSize: 17,
    sectionTitleFontSize: 18,
    listFontSize: 14,
    offerPeriodFontSize: 18,
    inputFontSize: 18,
  },
};
