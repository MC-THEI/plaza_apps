import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const storeDataInAsyncStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export const getDataFromAsyncStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export const clearDataFromAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export const clearAllDataFromAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export const storeMultipleDataInAsyncStorage = async (
  key1: string,
  key2: string,
  value1: any,
  value2: any
) => {
  try {
    const firstPair = [key1, JSON.stringify(value1)];
    const secondPair = [key2, JSON.stringify(value2)];
    const multiset = [firstPair, secondPair];

    await AsyncStorage.multiSet(multiset);
  } catch (e) {
    Alert.alert('Error', e.message);
  }
};

export const getMultipleDataFromAsyncStorage = async (keys) => {
  try {
    const values = await AsyncStorage.multiGet(keys);

    const parsedValues = values.map(([key, value]) => [key, JSON.parse(value)]);

    return parsedValues;
  } catch (e) {
    Alert.alert('Error', e.message);
    return null;
  }
};
