import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Image, View, Text } from 'react-native';

function ScreenHeader({
  children,
  bgImg,
  isUrl,
  height = 580,
}: {
  bgImg: string;
  children?: React.ReactNode;
  isUrl?: boolean;
  height?: number;
}) {
  const images: { [key: string]: any } = {
    home: require('../assets/images/PLAZA_App_Home.png'),
    favorite: require('../assets/images/PLAZA_App_Favoriten.png'),
  };

  return (
    <LinearGradient colors={['#3d3d3d', '#3d3d3d']} style={{ height: height }}>
      <ImageBackground
        source={isUrl ? { uri: bgImg } : bgImg ? images[bgImg] : images.home}
        resizeMode="cover"
        style={{ height: height }}
        imageStyle={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

export default ScreenHeader;

const styles = StyleSheet.create({
  imageContainer: {},
  backgroundImage: {
    opacity: 0.35,
  },
});
