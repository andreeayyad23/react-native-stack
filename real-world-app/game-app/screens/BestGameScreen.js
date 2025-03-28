// screens/BestGameScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BestGameScreen = ({ bestScore, onBack }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best Game</Text>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreLabel}>Your Best Score:</Text>
        <Text style={styles.scoreValue}>{bestScore || "No games played yet"}</Text>
        <Text style={styles.scoreDescription}>Lower is better!</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>Back to Main</Text>
      </TouchableOpacity>
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
    marginBottom: 40,
  },
  scoreContainer: {
    alignItems: "center",
    marginBottom: 40,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  scoreLabel: {
    fontSize: 18,
    color: "#7f8c8d",
    marginBottom: 10,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: 10,
  },
  scoreDescription: {
    fontSize: 14,
    color: "#bdc3c7",
    fontStyle: "italic",
  },
  backButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default BestGameScreen;