import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.value}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => onEdit(task)} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#6200ea",
    borderRadius: 5,
  },
  taskText: {
    color: "#fff",
    fontSize: 18,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  editButton: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TaskItem;
