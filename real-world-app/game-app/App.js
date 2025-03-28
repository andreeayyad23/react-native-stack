// App.js
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import BestGameScreen from "./screens/BestGameScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [bestScore, setBestScore] = useState(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    loadBestScore();
  }, []);

  const loadBestScore = async () => {
    try {
      const savedScore = await AsyncStorage.getItem("@bestScore");
      if (savedScore !== null) {
        setBestScore(parseInt(savedScore));
      }
    } catch (e) {
      console.log("Failed to load best score", e);
    }
  };

  const saveBestScore = async (score) => {
    try {
      await AsyncStorage.setItem("@bestScore", score.toString());
    } catch (e) {
      console.log("Failed to save best score", e);
    }
  };

  const updateBestScore = (newScore) => {
    if (bestScore === null || newScore < bestScore) {
      setBestScore(newScore);
      saveBestScore(newScore);
    }
  };

  const handleStartGame = () => {
    setCurrentScreen("game");
  };

  const handleGameOver = (attempts) => {
    setAttempts(attempts);
    setCurrentScreen("gameOver");
  };

  const handleRestart = () => {
    setCurrentScreen("game");
  };

  const handleShowBestGame = () => {
    setCurrentScreen("bestGame");
  };

  const handleBackToMain = () => {
    setCurrentScreen("start");
  };

  let screen;
  switch (currentScreen) {
    case "game":
      screen = (
        <GameScreen
          onGameOver={handleGameOver}
          onUpdateBestScore={updateBestScore}
        />
      );
      break;
    case "gameOver":
      screen = (
        <GameOverScreen
          attempts={attempts}
          onRestart={handleRestart}
          onShowBestGame={handleShowBestGame}
        />
      );
      break;
    case "bestGame":
      screen = (
        <BestGameScreen bestScore={bestScore} onBack={handleBackToMain} />
      );
      break;
    default:
      screen = (
        <StartGameScreen
          onStartGame={handleStartGame}
          onShowBestGame={handleShowBestGame}
          bestScore={bestScore}
        />
      );
  }

  return <View style={{ flex: 1 }}>{screen}</View>;
};

export default App;
