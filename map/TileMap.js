import React, { Component, useEffect,useRef } from 'react';
import PropTypes from 'prop-types';

import { View, Image, NativeImage,Text } from 'react-native';

export default function TileMap(props) {
        let x = [];
        let y = [];
        let xt = [];
        let yt = [];
        let styleImage = {};
  
    useEffect(() => {
        generateMap(props.scena)
       
       
    }, [])

    useEffect(()=>{
       
           
        
        
    },[])

    
    const generateMap = (scena) => {
      
        let a = [];
        let col, row, index;
        for (let i = 0; i < scena.layers().length; i++) {
            col = 0;
            row = 0;
            if (scena.layers()[i].name === props.name) {
                for (let j = 0; j < scena.layers()[i].data.length; j++) {
                    x[j] = col * scena.tileSize().width ;
                    y[j] =  row * scena.tileSize().height;
                    a[j] = j; 
                    if(scena.layers()[i].data[j] > 0){
                        index = scena.layers()[i].data[j];
                    
                     xt[j] = ((--index * 50) % 800);
                     yt[j] = ((--index * 50) / 800 ) * scena.tileSize().width; 
                     
                    }
                    col++;
                    if(col > scena.tileSize().width - 1){
                        col = 0;
                        row++;
                    }
                    console.log(row) 
                }
                
            }

 
        }
        
return a;
    }
//
    return (<View style={{flex:1, position:"absolute"}}>{generateMap(props.scena).map((img,i)=><View style={{position:"relative",backgroundColor:"red"}}><Text style={{color:"#ffffff"}}>{xt[i] + "/" + yt[i] }</Text></View>)}</View>)

}