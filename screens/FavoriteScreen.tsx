import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

function FavoriteScreen() {
    return (
        <>
            <View style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.container}>
                    <Text>FavoriteScreen</Text>
                </View>
            </View>
        </>
    )
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});