import { ScrollView } from 'react-native';

function ScreenScrollableWrapper({ children }: { children: React.ReactNode }) {
  return <ScrollView>{children}</ScrollView>;
}
export default ScreenScrollableWrapper;
