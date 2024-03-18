import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../Componants/Headers/Header'
import Footer from '../Componants/Footers/Footer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cricket from './BookingTickets/Cricket';
import Ipl from './BookingTickets/Ipl';
import Movies from './BookingTickets/Movies';
import ProKabbdi from './BookingTickets/ProKabbdi';
import Colors from "../Theme/colors"
const Tab = createMaterialTopTabNavigator();

const Booking = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor:Colors.primaryColor,
          tabBarStyle: {
            backgroundColor: "white", // Corrected typo: backgroundColor instead of backgraundColor
            borderColor:"white",
            borderWidth:1,
            color:"white"
          }
        }}
      >
        <Tab.Screen name='Movies' component={Movies} />
        <Tab.Screen name='Cricket' component={Cricket} />
        <Tab.Screen name='Ipl' component={Ipl} />
        <Tab.Screen name='Shows' component={ProKabbdi} />
      </Tab.Navigator>
      <Footer />
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
