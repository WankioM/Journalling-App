import React , { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet , Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'; 
import { useNavigation, NavigationProp, useIsFocused } from '@react-navigation/native';
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
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('@auth_token');
        const storedUsername = await AsyncStorage.getItem('@auth_username');
        setUsername(storedUsername || '');

        const response = await axios.get(`${process.env.BACKEND_URL}/api/journal/entries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserEntries(response.data.entries);
      } catch (error) {
        console.error('Error fetching user entries:', error);
      }
    };

    if (isFocused) {
      fetchUserData();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>

      <View style={styles.logoContainer}>
        
        <Image 
          source={require('../../assets/s3.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
        </View>
       
        <Image 
          source={require('../../assets/Meditation-amico.png')} 
          style={styles.infographic} 
          resizeMode="contain" 
        />
      </View>

  
      <View style={styles.content}>
        <Text style={styles.greeting}>Hi {username},</Text>
        <Text style={styles.subText}>What's on your mind?</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JournalEntry')}>
          <Text style={styles.buttonText}>New Journal Entry</Text>
        </TouchableOpacity>
      </View>

   
      <ScrollView style={styles.entriesContainer}>
        {userEntries.map((entry, index) => (
          <View key={index} style={styles.entry}>
           
            <Text style={styles.entryTitle}>{entry.title}</Text>
            <Text style={styles.entryContent}>{entry.content}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

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
    marginTop:20,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 20,
    zIndex: 1000,
  },
  logo: {
    width: 60,  
    height: 60, 
    maxWidth: '100%',
  },
  infographic: {
    width: 400,  
    height: 400, 
    maxWidth: '100%',
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
    backgroundColor: '#815355',
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
