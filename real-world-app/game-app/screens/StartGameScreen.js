// screens/StartGameScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StartGameScreen = ({ onStartGame, onShowBestGame, bestScore }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number</Text>
      <View style={styles.buttonContainer}>
        <Button title="Start Game" onPress={onStartGame} color="#2ecc71" />
        <View style={{ marginTop: 10 }} />
        <Button title="Best Game" onPress={onShowBestGame} color="#3498db" />
      </View>
      <Text style={styles.footer}>Best Score: {bestScore}</Text>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "60%",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
  },
  footer: {
    position: "absolute",
    bottom: 40,
    color: "#7f8c8d",
    fontSize: 14,
  },
});

export default StartGameScreen;