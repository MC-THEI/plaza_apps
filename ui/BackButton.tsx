import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
        >
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    text: {
        color: '#333',
    },
});

export default BackButton;
