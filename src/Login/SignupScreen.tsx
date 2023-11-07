import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const LoginScreen: React.FC = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
  };
  const handelLogin =()=>{
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
    source={require('../assets/signup.png')} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        placeholderTextColor="#fff"
        onChangeText={(text) => setName(text)}
      />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          placeholderTextColor="#fff"
        />
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
       
        

      <View>
      <Text style={{top:77}}>-Or Login With-</Text>
       
        </View>
        <View style={{flexDirection:'row',top:"30%",columnGap:40}}>
        <TouchableOpacity >
        <Image
        source={require('../assets/googl1.png')} // Replace with the path to your local image
        style={styles.logo}
      />
      </TouchableOpacity>
      <TouchableOpacity >
        <Image
        source={require('../assets/apple.png')} // Replace with the path to your local image
        style={styles.logo}
      />
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection:'row'}}>
          <Image
        source={require('../assets/facebook.png')} // Replace with the path to your local image
        style={styles.logo}
      />
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',top:"45%"}}>
        <Text style={{fontSize:17,color:"white"}}>You already have account?</Text>
        <TouchableOpacity style={{}} onPress={handelLogin}> 
        <Text style={{fontSize:17,color:"blue"}}> Login</Text>
        </TouchableOpacity> 
        </View>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'center', // You can customize this based on your image
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Background overlay
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: '#fff',
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo:{
    height:30,
    width:30,
  }
});

export default LoginScreen;


