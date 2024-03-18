import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../../Screens/Profile';
import HomeScreen from '../../Screens/HomeScreen';
import Bookingmovie from '../../Screens/Movies/Bookingmovie';
import Movies from '../../Screens/BookingTickets/Movies';
import Movie from '../../Screens/Movie';
import { Button, View, StyleSheet } from 'react-native';
import Booking from '../../Screens/Booking';
import Cart from '../../Screens/CartScreen';
import BollywoodScreen from '../../Screens/Bollywood/BollywoodScreen';
import LoginScreen from '../../Screens/LoginScreen';
import SignUpScreen from '../../Screens/SingUpScreeen';
import CartScreen from '../../Screens/CartScreen';

const Drawer = createDrawerNavigator();

const MainHome = () => {
  function NotificationsScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }
  return (
    <NavigationContainer independent={true} >
      <Drawer.Navigator initialRouteName='BollywoodScreen' >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name='Booking' component={Booking} />
        <Drawer.Screen name='Movies' component={Movies}/>
        <Drawer.Screen name='Movie' component={Movie}/>
        <Drawer.Screen name='CartScreen' component={CartScreen}/>
        <Drawer.Screen name='BollywoodScreen' component={BollywoodScreen}/>
        <Drawer.Screen name='NotificationsScreen' component={NotificationsScreen}/>
        <Drawer.Screen name='login' component={LoginScreen}/>
        <Drawer.Screen name='SignUpScreen' component={SignUpScreen}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray', // Example background color
  },
});
