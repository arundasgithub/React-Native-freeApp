// DetailsScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
// import TabNavigation from '../Router/TabNavigation';

const DetailsScreen = ({ route }:any) => {
  const { item } = route.params;

  return (
    <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <Text>{item.title}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default DetailsScreen;
