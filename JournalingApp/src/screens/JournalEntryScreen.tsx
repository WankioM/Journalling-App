import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const JournalEntryScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = async () => {
    try {
      const token = await AsyncStorage.getItem('@auth_token');
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/journal/add`,
        { title, content, category },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Journal entry added:', response.data);
      
    } catch (error) {
      console.log(`lets eat ${title}, ${content} , ${category}`)
      console.error('Error saving journal entry:', error);
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.contentinput}
        value={content}
        onChangeText={setContent}
        placeholder="..."
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 20,
  },
  contentinput: {
    flex: 1, // Take up all available space
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top', // Ensure text starts at the top
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
});

export default JournalEntryScreen;
