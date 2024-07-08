import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const JournalViewScreen = () => {
  const entries = [
    { id: '1', title: 'Entry 1', content: 'Content 1' },
    { id: '2', title: 'Entry 2', content: 'Content 2' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal Entries</Text>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
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
  entry: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default JournalViewScreen;
