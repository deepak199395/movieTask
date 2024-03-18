import React from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: require("../../Assets/ani.jpeg"),
  },
  {
    coverImageUri: require("../../Assets/b2.jpeg"),
  },
  { 
    coverImageUri:require("../../Assets/b3.jpeg"),
  },
  {
    coverImageUri: require("../../Assets/b4.jpeg"),
  },
  {
    coverImageUri: require("../../Assets/b5.jpeg"),
  },
  {
    coverImageUri: require("../../Assets/poster.jpeg"),
  },
];

const Banner1 = () => {
  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.cardContainer}
    >
      <View
        style={styles.cardWrapper}
      >
        <Image
          style={styles.card}
          source={typeof data.coverImageUri === 'string' ? { uri: data.coverImageUri } : data.coverImageUri}
        />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>
            { data.cornerLabelText }
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width *1,
    height: width *1.9,
    height:220,
    marginTop:1
  },
 
  
});

export default Banner1;
