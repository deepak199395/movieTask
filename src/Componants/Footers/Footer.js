import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from "../../Theme/colors"; 
import VectorIcon from '../../Utility/VectorIcon'; 
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const handleHome = () => {
    navigation.navigate("Home");
  }

  const handleBooking = () => {
    navigation.navigate("Booking");
  }

  const handleMovie = () => {
    navigation.navigate("Movie");
  }

  const handleProfile = () => {
    navigation.navigate("Profile");
  }

  const handleCard = () => {
    navigation.navigate("CartScreen");
  }

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.homeContainer}>
          <TouchableOpacity onPress={handleHome} style={{alignItems:"center"}}>
            <VectorIcon name="home" type="Entypo" size={25} style={styles.icon} color={"white"} />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleMovie} style={{alignItems:"center"}}>
            <VectorIcon name="movie-open" type="MaterialCommunityIcons" size={25} style={styles.icon} color={"white"} />
            <Text style={styles.text}>Movie</Text>
          </TouchableOpacity>
        </View>
      
        <TouchableOpacity onPress={handleBooking} style={{alignItems:"center"}}>
          <VectorIcon name="movie-roll" type="MaterialCommunityIcons" size={25} style={styles.icon} color={"white"} />
          <Text style={styles.text}>Booking</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleProfile} style={{alignItems:"center"}}>
          <VectorIcon name="profile" type="AntDesign" size={25} style={styles.icon} color={"white"} />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleCard} style={{alignItems:"center"}}>
          <VectorIcon name="shoppingcart" type="AntDesign" size={25} style={styles.icon} color={"white"} />
          <Text style={styles.text}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width:"100%"
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderWidth: 1,
    justifyContent: 'center',
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 2,
    backgroundColor: "black",
    borderRadius: 10,
  },
  icon: {
    marginTop: 5
  },
  iconContainer: {
    alignItems: "center"
  },
  text: {
    color:"white"
  }
});
