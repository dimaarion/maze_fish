import * as React from 'react';
import { Loop, Stage, World, Body, Sprite } from 'react-game-kit/native';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function App() {
  return (
    <View>
      <Text>wefwef</Text>
     
<Loop>
  <Stage>
    <World>
      <Sprite src = {"https://druzhniy-center.ru/wp-content/uploads/8/f/9/8f970e878337c2170713b4f20eafb065.jpeg"}  offset = {[0,0]} scale ={100}/>
    </World>
  </Stage>
</Loop>
    </View>
  );
}

