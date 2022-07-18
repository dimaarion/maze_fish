import * as React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import { GameEngine } from "react-native-game-engine"
import { MoveFinger } from "./MoveFinger";
import Test  from "./Test"
import Game from './Game';
export default function App() {
  return (
  <GameEngine
    style={styles.container}
    systems={[MoveFinger]}
    entities={Game()}>
    <StatusBar hidden={true} />
   
  </GameEngine>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});