// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';


const DATA = [
  { id: '1', title: 'Item 1',des:"First Item", image: require('../assets/apple.png') },
  { id: '2', title: 'Item 2',des:"second Item", image: require('../assets/apple.png') },
  { id: '3', title: 'Item 3',des:"Third Item", image: require('../assets/apple.png') },
  // Add more items as needed
];

console.log("This is Home screenn ==");
console.log("This is Home data",DATA);
const HomeScreen = ({navigation}:any) => {
  const renderItem = ({ item }:any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', { item })}
    >
      <View style={{margin:10,width:200,height:100,backgroundColor:""}}>
        <Text>{item.title}</Text>
        <Text>{item.des}</Text>
       <View style={{justifyContent:"flex-end", alignItems:"flex-end",bottom:40,}}><Image source={item.image} style={{ width: 50, height: 50, }} /></View> 
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}

export default HomeScreen;


