import { TextInput, StyleSheet, View, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import React, { useState } from 'react';
import { searchInputPlaceholder } from '../../assets/languages';
import { useAppDispatch } from '../../store/redux/store';
import {
  centerMap,
  getObjectsThunk,
  setMapChanging,
  setSearchInputValue,
} from '../../store/redux/map';
import { IcoMoon_mci, IcoMoon_pwai } from '../../ui/IcoMoon';

function SearchButton() {
  const [input, setInput] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleSearchInput = (value: string) => {
    setInput(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeout = setTimeout(() => {
      dispatch(setSearchInputValue(value));
      dispatch(getObjectsThunk());
      dispatch(setMapChanging(true));
    }, 800);
    setDebounceTimeout(newTimeout as unknown as number);
  };

  function handlePressCLoseBtn() {
    setInput('');
    dispatch(setSearchInputValue(''));
    dispatch(getObjectsThunk());
    dispatch(centerMap());
  }

  const closeButton = (
    <Pressable
      style={styles.iconContainer}
      onPress={() => handlePressCLoseBtn()}
    >
      <IcoMoon_mci name="close" size={20} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={handleSearchInput}
        placeholder={searchInputPlaceholder[1]}
      />
      {input !== '' && closeButton}
    </View>
  );
}

export default SearchButton;

const styles = StyleSheet.create({
  container: {
    width: '60%',
    position: 'relative',
  },
  input: {
    height: 50,
    paddingRight: 45,
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.accentGold,
    fontFamily: 'lato-v16-latin-700',
    fontSize: GlobalStyles.fontSize.inputFontSize,
    borderRadius: 8,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});
