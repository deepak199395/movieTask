import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Componants/Headers/Header'
import Footer from '../Componants/Footers/Footer'

const Profile = () => {
  return (
    <View style={styles.container}>
    <Header/>
    <Text>profile</Text>
    <Footer/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})