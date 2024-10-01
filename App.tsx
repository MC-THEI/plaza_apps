import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import HotelScreen from './screens/HotelScreen';
import OfferScreen from './screens/OfferScreen';
import FavoriteScreen from './screens/FavoritesScreen';
import NavBar from './ui/NavBar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationTypes } from './types/NavigationTypes';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import FavoritesScreen from './screens/FavoritesScreen';
import { Provider } from 'react-redux';
import { store, useAppDispatch } from './store/redux/store';
import {
  HOTEL_URL,
  HOTELS_URL,
  OFFER_URL,
  OFFERS_URL,
} from './constants/constants';
import useFetchData from './services/getDataFromApi';
import { loadFonts } from './utils/helper';
import { addHotels } from './store/redux/hotels';
import { addOffers } from './store/redux/offers';
import { IHotel } from './types/HotelTypes';
import { IOffer } from './types/OfferTypes';
import {
  clearTable,
  createTable,
  getDataFromDb,
  insertData,
} from './store/database';
import { getData, getDataAsync } from './store/redux/favorites';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        animationDuration: 100,
      }}
    >
      <Stack.Screen
        name={NavigationTypes.Home}
        component={HomeScreen}
        options={{
          title: NavigationTypes.Home,
        }}
      />
      <Stack.Screen
        name={NavigationTypes.Map}
        component={MapScreen}
        options={{
          title: NavigationTypes.Map,
        }}
      />
      <Stack.Screen
        name={NavigationTypes.Registration}
        component={RegistrationScreen}
        options={{ title: NavigationTypes.Registration }}
      />
      <Stack.Screen
        name={NavigationTypes.Login}
        component={LoginScreen}
        options={{ title: NavigationTypes.Login }}
      />
      <Stack.Screen
        name={NavigationTypes.Favorite}
        component={FavoritesScreen}
        options={{ title: NavigationTypes.Favorite }}
      />
      <Stack.Screen
        name={NavigationTypes.Hotel}
        component={HotelScreen}
        options={{ title: NavigationTypes.Hotel }}
      />
      <Stack.Screen
        name={NavigationTypes.Offer}
        component={OfferScreen}
        options={{ title: NavigationTypes.Offer }}
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

function Root() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [dbLoading, setDbLoading] = useState(false);

  const dispatch = useAppDispatch();

  const {
    data: fetchedHotelsData,
    loading: hotelsLoading,
    error: hotelsError,
  } = useFetchData(HOTELS_URL, HOTEL_URL);

  const {
    data: fetchedOffersData,
    loading: offersLoading,
    error: offersError,
  } = useFetchData(OFFERS_URL, OFFER_URL);

  async function setData() {
    const hotelsJSON = await getDataFromDb('hotels');
    const offersJSON = await getDataFromDb('offers');

    if (hotelsJSON && offersJSON) {
      const hotels = await JSON.parse(hotelsJSON[0].hotels);
      const offers = await JSON.parse(offersJSON[0].offers);
      dispatch(addHotels(hotels));
      dispatch(addOffers(offers));
    }
  }

  useEffect(() => {
    const init = async () => {
      if (fetchedHotelsData && fetchedOffersData) {
        try {
          dispatch(getDataAsync());

          // hotels
          await createTable('hotels');
          await clearTable('hotels');
          await insertData(fetchedHotelsData as IHotel[], 'hotels');

          // offers
          await createTable('offers');
          await clearTable('offers');
          await insertData(fetchedOffersData as IOffer[], 'offers');

          await setData();
        } catch (error) {
          console.error('Error saving new data:', error);
        }
      } else if (!fetchedHotelsData && !fetchedOffersData) {
        setDbLoading(true);
        try {
          await setData();
        } catch (error) {
          console.error(error);
        } finally {
          setDbLoading(false);
        }
      }
    };
    init();
  }, [fetchedHotelsData, fetchedOffersData]);

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
  }, [fetchedHotelsData, fetchedOffersData]);

  if (!fontsLoaded || hotelsLoading || offersLoading || dbLoading) {
    return (
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '50%',
        }}
      >
        Loading....
      </Text>
    );
  }

  return (
    <NavigationContainer>
      <HomeStackNavigator />
      <NavBar />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}
