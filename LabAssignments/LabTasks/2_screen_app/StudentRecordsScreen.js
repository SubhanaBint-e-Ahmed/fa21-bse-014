// StudentRecordsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const StudentRecordsScreen = ({ route, navigation }) => {
  const { student } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Record</Text>
      {student ? (
        <View style={styles.recordContainer}>
          <Text>Name: {student.name}</Text>
          <Text>Age: {student.age}</Text>
          <Text>Grade: {student.grade}</Text>
        </View>
      ) : (
        <Text>No student record found.</Text>
      )}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  recordContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
});

export default StudentRecordsScreen;
