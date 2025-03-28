import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoal = (goalText) => {
    if (goalText.trim().length < 2 || goalText.trim().length > 50) {
      alert("Goal must be between 2 and 50 characters long.");
      return;
    }
    setGoals((currentGoals) =>
      currentGoals.concat({ id: String(Math.random()), text: goalText })
    );
    setIsAddMode(false);
  };

  const onDelete = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        onPress={() => setIsAddMode(true)}
        color="#ff3e3e"
      />

      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoal}
        onCancel={() => setIsAddMode(false)}
      />

      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            key={itemData.item.id}
            text={itemData.item.text}
            onDelete={() => onDelete(itemData.item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "#e8f4f8",
    flex: 1,
  },
});
