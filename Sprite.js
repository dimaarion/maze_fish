import src from "processing-js/src";
import React, { PureComponent, useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Image, StatusBar, Animated } from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';

export default function Sprite(props) {
  const time = useRef(new Animated.Value(1,0)).current;
  let animation = [props.name, props.row, props.frame]

  let rows = props.rows;
  let cols = props.cols;
  let rate = props.rate;
  let anims = props.anims;
  let input = [];
  let output = [];


  useEffect(() => {
console.log(getNum(anims[0].frames ?? - 1) )
  }, [])

  useEffect(() => {
   
      }, [])
  function animate(url) {

  }
  let iAnim = {}

 for (let anim of anims) {
 
  iAnim = {
    input:[],
    output:[]
  }
 }
 const getNum = (l)=> {
  let a = [];
  for (let i = 0; i < l; i++) {
    a.push(i);
    a.push(i);
  }
  return a;
 }

  const play = ()=> Animated.timing(time, {
    toValue: 1,
    duration: 5000,
  }).start();

  const styles = StyleSheet.create({
    container: {
       position: "absolute",
       aspectRatio:1,
       overflow:"hidden"
    },
    img: {
  
    }
  })



  return (props.body.map((x) =>
    <View key={x.id} style={[
     styles.container, {
      left: x.position.x - x.width / 2,
      top: x.position.y - x.height / 2,
      width: x.width,
      height: x.height,
      
    }]

    }>
      <Animated.Image
        source={props.src()}
        style={[styles.img, 
        {
          transform:[
            {
              translateX:time.interpolate({
                inputRange:getNum(anims[0].frames),
                outputRange:getNum(anims[0].frames)
              })
            }
          ]
        }
        ]}
      />
    </View>)

  )

}