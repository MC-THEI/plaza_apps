import { TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { useState } from 'react';

function SearchButton() {
  const [input, setInput] = useState();

  return <TextInput style={styles.input} placeholder={'Hotel suchen ...'} />;
}

export default SearchButton;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '60%',
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.accentGold,
    fontFamily: 'lato-v16-latin-700',
    fontSize: GlobalStyles.fontSize.inputFontSize,
    borderRadius: 8,
  },
});
