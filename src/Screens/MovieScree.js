import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Componants/Headers/Header'
import Footer from '../Componants/Footers/Footer'

const MovieScree = () => {
  return (
    <View style={styles.container}>
    <Header/>
    
      <Footer/>
    </View>
  )
}

export default MovieScree

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})