import React , { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; 
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
interface Props {
  username: string;
  entries: JournalEntry[]; // Adjust this type based on your actual data structure
}

interface JournalEntry {
  date: string;
  title: string;
  content: string;
}

const MainAppScreen: React.FC<Props> = ({ username: initialUsername, entries }) => {
  const [username, setUsername] = useState(initialUsername);
  const [userEntries, setUserEntries] = useState<JournalEntry[]>(entries);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('@auth_token');
        const storedUsername = await AsyncStorage.getItem('@auth_username');
        setUsername(storedUsername || '');

        const response = await axios.get(`${process.env.BACKEND_URL}/api/user/entries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserEntries(response.data.entries);
      } catch (error) {
        console.error('Error fetching user entries:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Top section with logo overlaying infographic */}
      <View style={styles.header}>
        {/* Your logo component or image */}
        <Text style={styles.logo}>Logo</Text>
        {/* Infographic or other content */}
        <Text style={styles.infographic}>Infographic</Text>
      </View>

      {/* Greeting and new entry button */}
      <View style={styles.content}>
        <Text style={styles.greeting}>Hi {username},</Text>
        <Text style={styles.subText}>What's on your mind?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JournalEntry')}>
          <Text style={styles.buttonText}>New Journal Entry</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable list of journal entries */}
      <ScrollView style={styles.entriesContainer}>
        {userEntries.map((entry, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.entryDate}>{entry.date}</Text>
            <Text style={styles.entryTitle}>{entry.title}</Text>
            <Text style={styles.entryContent}>{entry.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infographic: {
    fontSize: 18,
  },
  content: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  entriesContainer: {
    flex: 1,
  },
  entry: {
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  entryDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  entryContent: {
    fontSize: 14,
  },
});

export default MainAppScreen;
