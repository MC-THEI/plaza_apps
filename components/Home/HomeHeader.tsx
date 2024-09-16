import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet } from 'react-native';
import MainTitle from './MainTitle';

function TitleHeader({ title }: { title: { 1: string; 2: string } }) {
  return (
    <LinearGradient
      colors={['#3d3d3d', '#3d3d3d']}
      style={styles.imageContainer}
    >
      <ImageBackground
        source={require('../../assets/images/PLAZA_App_Home.png')}
        resizeMode="cover"
        style={styles.imageContainer}
        imageStyle={styles.backgroundImage}
      >
        <MainTitle title={title} />
      </ImageBackground>
    </LinearGradient>
  );
}

export default TitleHeader;

const styles = StyleSheet.create({
  imageContainer: {
    height: 550,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
