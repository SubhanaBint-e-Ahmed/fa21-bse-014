import React, { useState } from "react";
import { Text, TextInput, Button, View, StyleSheet, FlatList } from "react-native";

export default function ToDoApp() {
  const [enteredTodoText, setEnteredTodoText] = useState('');
  const [todoList, setTodosList] = useState([]);

  function enterText(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addText() {
    if (enteredTodoText !== "") {
      setTodosList([...todoList, { text: enteredTodoText, id: Math.random().toString() }]);
      
    }
  }

  function deleteTodo(id) {
    setTodosList(todoList.filter(todo => todo.id !== id));
  }

  function updateTodoText(id, newText) {
    setTodosList(todoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={enterText}
            value={enteredTodoText}
            placeholder='Add Your Todo'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Add Todo' color='#e75480' onPress={addText} />
        </View>
      </View>

      <FlatList
        style={styles.todosList}
        data={todoList}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Text style={styles.todo}>{item.text}</Text>
            <View style={styles.todoButtonsContainer}>
              <View style={styles.buttonWrapper}>
                <Button title='Update' onPress={() => updateTodoText(item.id, enteredTodoText)} color='#e75480' />
              </View>
              <View style={styles.buttonWrapper}>
                <Button title='Delete' onPress={() => deleteTodo(item.id)} color='red' />
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#e75480",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#cccc",
    borderRadius: 200,
    fontSize: 20,
    color: "black",
    paddingLeft: 10,
    height: 30,
  },
  buttonContainer: {
    minWidth: 100,
  },
  todosList: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    borderColor: "#cccccc",
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  todo: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccc",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#e75480",
    color: "white",
    borderRadius: 200,
    marginRight: 10,
  },
  todoButtonsContainer: {
    flexDirection: "row",
  },
  buttonWrapper: {
    marginLeft: 10, 
  },
});
