import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import Header from './src/Componants/Headers/Header';
import Footer from './src/Componants/Footers/Footer';
import Booking from './src/Screens/Booking';
import Cart from './src/Screens/CartScreen';
import Movie from './src/Screens/Movie';
import Profile from './src/Screens/Profile';
import Category1 from './src/Componants/Categories/Category1';
import LoginScreen from './src/Screens/LoginScreen';
import Poster1 from './src/Componants/Categories/Poster1';
import SpliseScreen from './src/Screens/SpliseScreen';
import CheckPermissions from './src/Screens/CheckPermissions';
import MovieScree from './src/Screens/MovieScree';
import SingUpScreeen from './src/Screens/SingUpScreeen';
import VerticalCarousal from './src/Componants/Carosels/VerticalCarousal';
import Movies from './src/Screens/Movies/Movies';
import MainHome from './src/Componants/Headers/MainHome';
import BollywoodScreen from './src/Screens/Bollywood/BollywoodScreen';
import CartScreen from './src/Screens/CartScreen';
const App = () => {
  const Stack=createNativeStackNavigator()
  
    return (
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName='MainHome' >
      <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Header' component={Header} options={{headerShown:false}}/>
      <Stack.Screen name='Footer' component={Footer} options={{headerShown:false}}/>
      <Stack.Screen name='Booking' component={Booking} options={{headerShown:false}}/>
      <Stack.Screen name='CartScreen' component={CartScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Movie' component={Movie} options={{headerShown:false}}/>
      <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name='Category1' component={Category1} options={{headerShown:false}}/>
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Poster1' component={Poster1} options={{headerShown:false}}/>
      <Stack.Screen name='SpliseScreen' component={SpliseScreen} options={{headerShown:false}}/>
      <Stack.Screen name='CheckPermissions' component={CheckPermissions} options={{headerShown:false}}/>
      <Stack.Screen name='MovieScree' component={MovieScree} options={{headerShown:false}}/>
      <Stack.Screen name='SingUpScreeen' component={SingUpScreeen} options={{headerShown:false}}/>
      <Stack.Screen name='VerticalCarousal' component={VerticalCarousal} options={{headerShown:false}}/>
      <Stack.Screen name='Movies' component={Movies}options={{headerShown:false}}/>
      <Stack.Screen name='MainHome' component={MainHome} options={{headerShown:false}}/>
      <Stack.Screen name='BollywoodScreen' component={BollywoodScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
  
  export default App
  
  const styles = StyleSheet.create({})
  