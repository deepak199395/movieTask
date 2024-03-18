import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import logo from "../../Assets/fox.jpg"

const Header = () => {
   const navigation = useNavigation()
  
   const handleLogin = () => {
    navigation.navigate('login')
   }

   const handleHome = () => {
    navigation.navigate("Home")
   }
    
  return (
   <View style={styles.container}>
     <View>
       <TouchableOpacity onPress={handleHome}>
         <Image source={logo} style={styles.logo}/>
       </TouchableOpacity>
     </View>
     <View>
       <Text style={styles.text}>FOX CINEMA</Text>
     </View>
     <View>
       <TouchableOpacity onPress={handleLogin}>
         <Text style={styles.sub}>Subscriptions</Text>
       </TouchableOpacity>
     </View>
   </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        height:70,
        alignItems:"center",
        margin:1,
        backgroundColor:"black",
        borderRadius:10
    },
    logo:{
        width:50,
        height:50,
        borderRadius:50
    },
    text:{
        fontSize:17,
        fontWeight:"bold",
        color:"white",
        marginLeft:40
    },
    sub:{
        borderWidth:1,
        borderColor:"white",
        color:"white",
        width:90,
        textAlign:"center",
        height:30,
        paddingTop:3,
        borderRadius:10
    }
})
