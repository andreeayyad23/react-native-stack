// components/TaskItem.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const TaskItem = ({ task, onToggle, onDelete, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      onEditTask(task.id, editedText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.task}>
        <Icon
          name={task.completed ? "check-box" : "check-box-outline-blank"}
          size={24}
          color={task.completed ? "#4a90e2" : "#ccc"}
        />
        {isEditing ? (
          <TextInput
            style={[styles.taskText, styles.editInput]}
            value={editedText}
            onChangeText={setEditedText}
            autoFocus
            onSubmitEditing={handleEdit}
          />
        ) : (
          <Text
            style={[
              styles.taskText,
              task.completed && styles.completedTaskText,
            ]}
          >
            {task.text}
          </Text>
        )}
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity onPress={handleEdit} style={styles.actionButton}>
          <Icon
            name={isEditing ? "save" : "edit"}
            size={20}
            color={isEditing ? "#4a90e2" : "#666"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(task.id)}
          style={styles.actionButton}
        >
          <Icon name="delete" size={20} color="#e74c3c" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
    flexShrink: 1,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  editInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#4a90e2",
    paddingVertical: 5,
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    marginLeft: 10,
  },
  actionButton: {
    padding: 8,
    marginLeft: 5,
  },
});

export default TaskItem;
