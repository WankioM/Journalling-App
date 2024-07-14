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
import MainAppScreen from '../screens/MainAppScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();




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
        <Stack.Screen
          name="MainApp"
          options={{ headerShown: false }} // Optional: Hide header if not needed
        >
          {props => (
            <MainAppScreen
              {...props}
              username="JohnDoe"
              entries={[
                { date: '2023-07-11', title: 'Entry 1', content: 'Content 1' },
                { date: '2023-07-12', title: 'Entry 2', content: 'Content 2' }
              ]}
            />
          )}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

