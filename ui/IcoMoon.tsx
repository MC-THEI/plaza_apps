import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig_pwai from '../assets/fonts/icomoon/pwai/selection.json';
import IcoMoonConfig_mci from '../assets/fonts/icomoon/mci/selection.json';

export const IcoMoon_pwai = createIconSetFromIcoMoon(
  icoMoonConfig_pwai,
  'IcoMoon_pwai',
  'PLAZA-PWA.ttf'
);

export const IcoMoon_mci = createIconSetFromIcoMoon(
  IcoMoonConfig_mci,
  'IcoMoon_mci',
  'plazahotels.ttf'
);
