import React, { PureComponent, useEffect } from "react";
import { StyleSheet, View ,Text} from "react-native";


export default  function Test(props) {

    useEffect(()=>{
console.log(props)
    },[])
    return ( <View>
        
        <Text>wefw5555fwef</Text>
        </View>)
}