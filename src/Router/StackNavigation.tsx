import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Login/LoginScreen';
import SignupScreen from '../Login/SignupScreen';
import TabNavigation from './TabNavigation';
import DetailsScreen from '../Dashboard/DetailsScreen';

const Stack = createStackNavigator();

const StackNavigation: React.FC = () => {
    const defaultOptions = { headerShown: false,  orientation: "portrait" };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ ...defaultOptions}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ ...defaultOptions}} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ ...defaultOptions}} />
        {/* <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerBackTitle:"Home"}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
