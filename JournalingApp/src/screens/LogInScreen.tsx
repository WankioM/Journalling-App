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

      // Assuming your backend responds with a token on successful login
      const { token } = response.data;

      // Save the token securely (e.g., AsyncStorage for React Native)
      await AsyncStorage.setItem('@auth_token', token);
      
      // Navigate to the main app screen or do any other post-login actions
      Alert.alert('Success', 'Login successful');
      
      // Example navigation to another screen
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
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
});

export default LoginScreen;
