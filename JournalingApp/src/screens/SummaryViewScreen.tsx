import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary View</Text>
      <Text>Summary of entries over a selected period will be displayed here.</Text>
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
});

export default SummaryViewScreen;
