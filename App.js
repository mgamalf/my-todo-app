import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState("");

  // Add or Edit Task
  const addOrEditTaskHandler = (taskText) => {
    if (taskText.trim().length === 0) return;

    if (editTaskId) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editTaskId ? { ...task, value: taskText } : task
        )
      );
      setEditTaskId(null);
      setTaskToEdit("");
    } else {
      setTasks((currentTasks) => [
        ...currentTasks,
        { id: Math.random().toString(), value: taskText },
      ]);
    }
  };

  // Delete Task
  const deleteTaskHandler = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  };

  // Edit Task
  const editTaskHandler = (task) => {
    setTaskToEdit(task.value);
    setEditTaskId(task.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List - Mahmoud Gamal Fareed</Text>
      <TaskInput onAddTask={addOrEditTaskHandler} editTaskId={editTaskId} taskToEdit={taskToEdit} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onEdit={editTaskHandler} onDelete={deleteTaskHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#6200ea",
  },
});


