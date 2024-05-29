import React, { useEffect, useState } from 'react';
import { 
  View,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  const [subscribeEnabled, setSubscribeEnabled] = useState(false);
  const [email, onChangeEmail] = useState('');
  // @ref https://stackoverflow.com/questions/56247433/how-to-use-setstate-callback-on-react-hooks
  useEffect(() => {
    setSubscribeEnabled(validateEmail(email)); 
    console.log(email);
    return;
  }, [email])

  //  @ref https://reactnative.dev/docs/alert
  const createSubscribeAlert = () =>
      // Alert.prompt('hi', 'Thanks for subscribing,\nstay tuned!', text =>
      //   console.log('You entered ' + text)
      // );
      Alert.alert(null, 'Thanks for subscribing,\nstay tuned!', [
        {
          text: 'OK', 
          onPress: () => console.log('OK Pressed')},
      ]);

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo-grey.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={styles.regularText}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      </View>
      <View style={styles.containerFooter}>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeEmail}
          placeholder={'Input your email'}
          keyboardType={'email-address'}
        />
        <Pressable disabled={!subscribeEnabled}
            onPress={() => {
              console.log('onPressed.');
              createSubscribeAlert();
            }}
            style={subscribeEnabled? styles.button : styles.buttonDisabled}>
            <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'top' 
  },
  containerContent: {
    flex: 0, 
    alignItems: 'center', 
    justifyContent: 'top' 
  },
  containerFooter: {
    justifyContent: 'top'
  },
  button: {
    fontSize: 22,
    margin: 10,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonDisabled: {
    fontSize: 22,
    margin: 10,
    backgroundColor: '#888888',
    borderColor: '#888888',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
  },
  image: {
    width: 100,
    height: 160,
    borderRadius: 0,
  },
  inputBox: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#495E57',
    backgroundColor: '#FFFFFF',
  },
  regularText: {
    fontSize: 24,
    padding: 10,
    color: '#000000',
    textAlign: 'center',
  },
});
