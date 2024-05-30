import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

// Return a stack navigation to move between screens:
// a) welcome screen [initial route]
// b) subscribe screen
const RootNavigator = () => {
  return (
    // @reef https://stackoverflow.com/questions/43326705/how-can-we-center-title-of-react-navigation-header
    // for other style, check headerStyle, example:
    //   screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#FFFFFF' }}}
    <Stack.Navigator initialRouteName="Welcome" 
        screenOptions={{ headerTitleAlign: 'center' }} 
      >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
