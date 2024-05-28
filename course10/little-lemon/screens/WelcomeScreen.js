import React from 'react';
import { 
  View,
  Image,
  Pressable,
  StyleSheet,
  Text
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
return (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('../assets/little-lemon-logo.png')}
      resizeMode="cover"
      accessible={true}
      accessibilityLabel={'Little Lemon Logo'}
    />
    <Text style={styles.regularText}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable
        onPress={() => navigation.navigate('Subscribe')}
        style={styles.button}>
        <Text style={styles.buttonText}>Newsletter</Text>
    </Pressable>
</View>);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    justifyContent: 'center',
    margin: 10,
},
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  image: {
    width: 210,
    height: 384,
    borderRadius: 20,
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
