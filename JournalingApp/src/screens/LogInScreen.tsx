import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      
      const response = await axios.post(`${process.env.BACKEND_URL}/api/auth/login`, {
        username,
        password,
      });

  
      const { token } = response.data;


      await AsyncStorage.setItem('@auth_token', token);
      await AsyncStorage.setItem('@auth_username', username);
      
 
      Alert.alert('Success', 'Login successful');
      
    
      navigation.navigate('MainApp');
    } catch (error: any) {
      console.error('Error logging in:', error);
      Alert.alert('Error', `Error logging in: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
         <View style={styles.buttonContainer}>
      <Button title="Log In" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  buttonContainer: {
    margin: 8,
  },
});

export default LoginScreen;
