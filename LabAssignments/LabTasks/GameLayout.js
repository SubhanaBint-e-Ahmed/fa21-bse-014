import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function GameLayout() {
  const [inputValue, setInputValue] = useState("");

  function handleButtonPress  (number)  {
    setInputValue((prevValue) => prevValue + number.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Title</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        {[...Array(10).keys()].map((number) => (
          <Button
            key={number}
            title={number.toString()}
            onPress={() => handleButtonPress(number)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 20,
    width: 200,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
