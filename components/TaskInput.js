import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TaskInput = ({ onAddTask, editTaskId, taskToEdit }) => {
  const [enteredTask, setEnteredTask] = useState(taskToEdit || "");

  // Update input when editing
  React.useEffect(() => {
    setEnteredTask(taskToEdit || "");
  }, [taskToEdit]);

  const inputHandler = (text) => {
    setEnteredTask(text);
  };

  const addTaskHandler = () => {
    onAddTask(enteredTask);
    setEnteredTask(""); // Clear input
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter task..."
        style={styles.input}
        onChangeText={inputHandler}
        value={enteredTask}
      />
      <Button title={editTaskId ? "UPDATE" : "ADD"} onPress={addTaskHandler} color="#6200ea" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6200ea",
    padding: 10,
    width: "75%",
    borderRadius: 5,
  },
});

export default TaskInput;
