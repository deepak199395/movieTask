import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Bookingmovie from '../Movies/Bookingmovie';

const Movies = () => {
  return (
    <View style={styles.container}>
    <View style={styles.movie}> 
    
    </View>
      <Bookingmovie />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
