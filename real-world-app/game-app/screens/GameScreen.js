// screens/GameScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const GameScreen = ({ onGameOver, onUpdateBestScore }) => {
  const [targetNumber, setTargetNumber] = useState(null);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState("");

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNumber);
    setGuess("");
    setAttempts(0);
    setHint("Guess a number between 1 and 100");
  };

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      Alert.alert("Invalid Input", "Please enter a number between 1 and 100");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guessedNumber === targetNumber) {
      onUpdateBestScore(newAttempts);
      onGameOver(newAttempts);
    } else if (guessedNumber < targetNumber) {
      setHint("Higher! Try again.");
    } else {
      setHint("Lower! Try again.");
    }

    setGuess("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess the Number</Text>
      <Text style={styles.hint}>{hint}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess (1-100)"
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit Guess" onPress={handleGuess} color="#2ecc71" />
      </View>
      <Text style={styles.attempts}>Attempts: {attempts}</Text>
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
    marginBottom: 20,
  },
  hint: {
    fontSize: 18,
    color: "#3498db",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "60%",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
  },
  attempts: {
    fontSize: 16,
    color: "#7f8c8d",
  },
});

export default GameScreen;