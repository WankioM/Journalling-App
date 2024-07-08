import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/LogInScreen';
import JournalEntryScreen from '../screens/JournalEntryScreen';
import JournalViewScreen from '../screens/JournalViewScreen';
import CategorizationScreen from '../screens/CategorizationScreen';
import SummaryViewScreen from '../screens/SummaryViewScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="JournalEntry" component={JournalEntryScreen} />
        <Stack.Screen name="JournalView" component={JournalViewScreen} />
        <Stack.Screen name="Categorization" component={CategorizationScreen} />
        <Stack.Screen name="SummaryView" component={SummaryViewScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

