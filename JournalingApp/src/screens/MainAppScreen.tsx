import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const MainAppScreen = ({ username, entries }: { username: string; entries: any[] }) => {
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>New Journal Entry</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable list of journal entries */}
      <ScrollView style={styles.entriesContainer}>
        {entries.map((entry, index) => (
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
