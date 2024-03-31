
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddStudentScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const addStudent = () => {
    if (name.trim() === '' || age.trim() === '' || grade.trim() === '') {
      return;
    }

    const student = { name, age, grade };

    // Navigate to the StudentRecordsScreen with the student parameter
    navigation.navigate('StudentRecords', { student });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Student</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter student name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter student age"
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Grade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter student grade"
        value={grade}
        onChangeText={text => setGrade(text)}
        keyboardType="numeric"
      />
      <Button title="Add Student" onPress={addStudent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default AddStudentScreen;
