import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import HotelScreen from './screens/HotelScreen';
import OfferScreen from './screens/OfferScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import NavBar from './ui/NavBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationTypes } from './types/NavigationTypes';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 150,
      }}
    >
      <Stack.Screen
        name={NavigationTypes.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name={NavigationTypes.Map}
        component={MapScreen}
        options={{
          title: 'Karte',
        }}
      />
      <Stack.Screen
        name={NavigationTypes.Registration}
        component={RegistrationScreen}
        options={{ title: 'Registrieren' }}
      />
      <Stack.Screen
        name={NavigationTypes.Login}
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name={NavigationTypes.Favorite}
        component={FavoriteScreen}
        options={{ title: 'Favorites' }}
      />
      <Stack.Screen
        name={NavigationTypes.Hotel}
        component={HotelScreen}
        options={{ title: 'Hotel' }}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="Hotels"
        component={HotelScreen}
        options={{ title: 'Hotels' }}
      />
      <Drawer.Screen
        name="Offers"
        component={OfferScreen}
        options={{ title: 'Angebote' }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: 'Favoriten' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = () =>
    Font.loadAsync({
      'lato-v16-latin-100': require('./assets/fonts/lato/lato-v16-latin-100.ttf'),
      'lato-v16-latin-300': require('./assets/fonts/lato/lato-v16-latin-300.ttf'),
      'lato-v16-latin-700': require('./assets/fonts/lato/lato-v16-latin-700.ttf'),
      'lato-v16-latin-900': require('./assets/fonts/lato/lato-v16-latin-900.ttf'),
      'lato-v16-latin-regular': require('./assets/fonts/lato/lato-v16-latin-regular.ttf'),
      IcoMoon_pwai: require('./assets/fonts/icomoon/pwai/PLAZA-PWA.ttf'),
      IcoMoon_mci: require('./assets/fonts/icomoon/mci/plazahotels.ttf'),
    });

  useEffect(() => {
    async function loadAllFonts() {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    }
    loadAllFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading....</Text>;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <HomeStackNavigator />
        <NavBar />
      </NavigationContainer>
    </>
  );
}
