import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert, ImageBackground, Image } from 'react-native';

const LoginScreen: React.FC = ({navigation}:any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    
    navigation.navigate("TabNavigation");
  };
const handleForgotPasswordClick = () =>{
  Alert.alert('Forgot Password', 'You clicked "Forgot Password"');
};
const handelSignup =()=>{
  navigation.navigate("Signup");
};
  return (
    <ImageBackground
    source={require('../assets/login.png')} // Replace with your image URL
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
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
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:22}} onPress={handleForgotPasswordClick}>
        <Text style={{fontSize:17,color:"white"}}>
          Forgot Password?
        </Text>
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
        <Text style={{fontSize:17,color:"white"}}>Dont have account?</Text>
        <TouchableOpacity style={{}} onPress={handelSignup}> 
        <Text style={{fontSize:17,color:"blue"}}> Sign Up</Text>
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
