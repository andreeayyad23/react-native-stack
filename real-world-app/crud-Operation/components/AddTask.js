// components/AddTask.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddTask = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button
        title="Add Task"
        onPress={handleAddTask}
        color="#4a90e2"
        disabled={!taskText.trim()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default AddTask;
