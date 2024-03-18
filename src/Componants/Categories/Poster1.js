import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import poster from "../../Assets/poster.jpeg"
const Poster1 = () => {

    const handlelinking=()=>{
        Linking.openURL('https://www.jiocinema.com/sports/cricket/up-warriorz-vs-delhi-capitals/3913564')
    }

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handlelinking}>
    <Image source={poster} style={styles.img} resizeMode="contain" />

    </TouchableOpacity>
   </View>
  )
}

export default Poster1

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:200,
    },
   img:{
    height:"100%",
    width:"100%"
   }
})