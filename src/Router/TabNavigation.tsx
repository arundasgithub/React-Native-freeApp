// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Dashboard/Home';
import ProfileScreen from '../Dashboard/Profile';
import { Image } from 'react-native';
import DetailsScreen from '../Dashboard/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack =()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerBackTitle:"Home"}} />
      {/* <Stack.Screen name={navigationStrings.PRODUCT_DETAILS} component={ProductDetails} /> */}
    </Stack.Navigator>
  );
}

const TabNavigation = () => {
  return (
   
<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;
            
            if (route.name === 'Home') {
                iconSource=   require('../assets/home.png')
               
            } else if (route.name === 'Profile') {
                iconSource =  require('../assets/profile.png')
            };

            return (
              <Image
                source={iconSource}
                style={{
                  width: 32,
                  height: 32,
                  //tintColor: 'rgba(0, 0, 0, 0)' // Transparent color
                  tintColor:focused?"green":"pink",
                }}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>


    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={HomeScreen} 
    //     options={{
    //         tabBarIcon: ({ focused }) => (
    //           <Image
    //             source={require('../assets/home.png')}
    //             style={{ width:30, height: 30, }}
    //           />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen name="Profile" component={ProfileScreen}
    //      options={{
    //         tabBarIcon: ({ focused }) => (
    //           <Image
    //             source={require('../assets/Profile.png')}
    //             style={{ width:30, height: 30, tintColor:"traspatent" }}
    //           />
    //         ),
    //       }}
    //     />
    //   </Tab.Navigator>
   
  );
}

export default TabNavigation;
