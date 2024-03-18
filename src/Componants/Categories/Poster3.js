import { Image, StyleSheet, Text, TouchableOpacity, View,Linking} from 'react-native'
import React from 'react'
import poster from "../../Assets/score.jpeg"
const Poster3 = () => {

const handleurl=()=>{
    Linking.openURL('https://www.icc-cricket.com/news/100-day-countdown-begins-icc-unveils-out-of-this-world-men-s-t20-world-cup-2024-campaign-film?gad_source=1&gclid=CjwKCAiAivGuBhBEEiwAWiFmYaq46-2DZM4PpIBm9ebQHdrgIkSoAKmAgP0Tu_TVHLcWNeQ1C_LNVBoC_AEQAvD_BwE&gclsrc=aw.ds')
}

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={handleurl}>
    <Image source={poster} style={styles.img} resizeMode="contain" />

    </TouchableOpacity>
   </View>
  )
}

export default Poster3

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:150,
    },
   img:{
    height:"100%",
    width:"100%",
    borderRadius:10,

   }
})