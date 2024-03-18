import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import s1 from "./Tvshowsimages/s1.jpeg";
import s3 from "./Tvshowsimages/s3.jpeg"
import s2 from "./Tvshowsimages/s2.jpeg";
import s4 from "./Tvshowsimages/s4.jpeg";
import s5 from "./Tvshowsimages/s5.jpeg";
import s6 from "./Tvshowsimages/s6.jpeg";
import s7 from "./Tvshowsimages/s7.jpeg";
import s8 from "./Tvshowsimages/s8.jpeg";

const TVshow = () => {
  const scrollViewRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

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
      <Text style={styles.text}>Tv shows</Text>
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
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s1}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s2}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s3}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s4}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s5}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s6}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s7}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Image style={styles.image} source={s8}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TVshow;

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
