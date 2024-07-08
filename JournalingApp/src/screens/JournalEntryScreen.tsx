import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const JournalEntryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Entry</Text>
      <TextInput style={styles.input} placeholder="Title" />
      <TextInput
        style={styles.input}
        placeholder="Content"
        multiline
        numberOfLines={4}
      />
      <Button title="Save Entry" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});

export default JournalEntryScreen;
