// screens/GameOverScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GameOverScreen = ({ attempts, onRestart, onShowBestGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.message}>You guessed the number in {attempts} attempts!</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Play Again" onPress={onRestart} color="#2ecc71" />
        <View style={{ marginTop: 10 }} />
        <Button title="Best Game" onPress={onShowBestGame} color="#3498db" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f6fa",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "#7f8c8d",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    width: "60%",
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default GameOverScreen;