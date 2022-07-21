import * as React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

import { GameEngine } from "react-native-game-engine"
import { MoveFinger } from "./MoveFinger";
import Test  from "./Test"
import Game from './Game';
import TileMap from './map/TileMap';
import Scena from './Scena';
export default function App() {
  const scena = new Scena();
  return (
  <GameEngine
    style={styles.container}
    systems={[MoveFinger]}
    entities={Game()}>
    <StatusBar hidden={true} />
   <TileMap
   src = {require("./assets/kp.png")}
   scena = {scena}
   name = "bg"
   />
  </GameEngine>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});