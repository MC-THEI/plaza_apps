import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';

function ScreenHeader({
  children,
  bgImg,
  isUrl,
}: {
  bgImg: string;
  children?: React.ReactNode;
  isUrl?: boolean;
}) {
  const images = {
    home: require('../assets/images/PLAZA_App_Home.png'),
    favorite: require('../assets/images/PLAZA_App_Favoriten.png'),
  };

  return (
    <LinearGradient
      colors={['#3d3d3d', '#3d3d3d']}
      style={styles.imageContainer}
    >
      <ImageBackground
        source={isUrl ? { uri: bgImg } : images[bgImg]}
        resizeMode="cover"
        style={styles.imageContainer}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  imageContainer: {
    height: 580,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
