import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

const VerticalCarousal = () => {
  const scrollViewRef = useRef(null);

  const scrollTo = (x) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: x, animated: true });
    }
  };

  return (
    <ScrollView
      horizontal
      ref={scrollViewRef}
      contentContainerStyle={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const itemWidth = 100; 
        const pageIndex = Math.round(offsetX / itemWidth);
        const newOffsetX = pageIndex * itemWidth;
        scrollTo(newOffsetX);
      }}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Hindi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Tamil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Marathi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Bhojpuri</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Bengali</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Kannada</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Telugu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.text}>Malayalam</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default VerticalCarousal;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom:10
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"
  },
  text:{
    color:"white"
  }
});
