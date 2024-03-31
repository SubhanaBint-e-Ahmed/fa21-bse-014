import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const StudentRecordsApp = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const addStudent = () => {
    if (name.trim() === '' || gpa.trim() === '') {
      return;
    }
    setStudents([...students, { id: Date.now().toString(), name: name, gpa: gpa }]);
    setName('');
    setGPA('');
  };

  const searchStudent = () => {
    // Filter students based on search query
    return students.filter(student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const deleteStudent = id => {
    setStudents(students.filter(student => student.id !== id));
  };

  const clearAllStudents = () => {
    setStudents([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Records</Text>
      
      {/* Add Student Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter student name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.label}>GPA:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter GPA"
          value={gpa}
          onChangeText={text => setGPA(text)}
        />
        <Button title="Add" onPress={addStudent} />
      </View>
      
      {/* Search Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search students..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <Button title="Search" onPress={() => {}} />
      </View>
      
      {/* Display Students */}
      <Text style={styles.label}>Records:</Text>
      <FlatList
        style={styles.list}
        data={searchStudent()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.name} - GPA: {item.gpa}</Text>
            <Button title="Delete" onPress={() => deleteStudent(item.id)} />
          </View>
        )}
        keyExtractor={item => item.id}
      />

      {/* Clear All Button */}
      <TouchableOpacity style={styles.clearButton} onPress={clearAllStudents}>
        <Text style={styles.clearButtonText}>Clear All</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
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
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  clearButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  clearButtonText: {
    color: 'white',
  },
});

export default StudentRecordsApp;
