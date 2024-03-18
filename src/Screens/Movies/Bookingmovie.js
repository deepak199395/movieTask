import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import m1 from "./movieImage/m1.jpeg";
import m2 from "./movieImage/m2.jpeg";
import m3 from "./movieImage/m3.jpeg";
import m4 from "./movieImage/m4.jpeg";
import m5 from "./movieImage/m5.jpeg";
import m6 from "./movieImage/m6.jpeg";
import m7 from "./movieImage/m7.jpeg";
import m8 from "./movieImage/m8.jpeg";

const Bookingmovie = () => {
  const scrollViewRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  
  const navigation = useNavigation()
  
  const handleCahnge=()=>{
    navigation.navigate("BollywoodScreen")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        const nextIndex = scrollIndex < 7 ? scrollIndex + 1 : 0;
        scrollViewRef.current.scrollTo({
          x: nextIndex * 100, 
          y: 0,
          animated: true
        });
        setScrollIndex(nextIndex);
      }
    }, 2000); 

    return () => clearInterval(interval);
  }, [scrollIndex]);

  return (
    <View>
      <Text style={styles.text}>Bollywood Movies</Text>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const currentOffset = event.nativeEvent.contentOffset.x;
          const contentWidth = event.nativeEvent.contentSize.width;
          const screenWidth = event.nativeEvent.layoutMeasurement.width;
          if (currentOffset + screenWidth >= contentWidth) {
            scrollViewRef.current.scrollTo({ x: 0, animated: true });
            setScrollIndex(0);
          }
        }}>
        <TouchableOpacity style={styles.item} onPress={handleCahnge}>
          <Image style={styles.image} source={m1}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleCahnge}>
          <Image style={styles.image} source={m2}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleCahnge}>
          <Image style={styles.image} source={m3}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleCahnge}>
          <Image style={styles.image} source={m4}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleCahnge}>
          <Image style={styles.image} source={m5}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item } onPress={handleCahnge}>
          <Image style={styles.image} source={m6}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleCahnge}>
          <Image style={styles.image} source={m7}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleCahnge}>
          <Image style={styles.image} source={m8}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Bookingmovie;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  item: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    height: 180,
  },
  text: {
    color: "white",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    color:"black"
  },
  image: {
    width: 130,
    height: 180,
    resizeMode: "cover"
  }
});
