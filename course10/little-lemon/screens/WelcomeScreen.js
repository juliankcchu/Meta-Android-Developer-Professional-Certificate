import React from 'react';
import { 
  View,
  Image,
  Pressable,
  StyleSheet,
  Text
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.regularText}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <View style={styles.containerFooter}>
        <Pressable
            onPress={() => navigation.navigate('Subscribe')}
            style={styles.button}>
            <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFFFFF'
  },
  containerContent: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  containerFooter: {
    justifyContent: 'center'
  },
  button: {
    fontSize: 22,
    padding: 10,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
  },
  image: {
    width: 109,
    height: 192,
    borderRadius: 0,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#000000',
    textAlign: 'center',
  },
});
