// ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfileScreen = ({navigation}:any) => {
    const handelLogout = ()=>{
        navigation.navigate('Login')
    };
  return (
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
      <Text>Welcome to the Profile Screen!</Text>
      <Button 
      title='Logout'
      onPress={handelLogout}
      />
    </View>
  );
}

export default ProfileScreen;
