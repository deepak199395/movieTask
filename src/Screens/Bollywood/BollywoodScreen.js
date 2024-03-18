import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import animal from "../../Assets/b1.jpeg";
import fighters from "../../Assets/b4.jpeg";
import thwethfail from "../../Assets/b5.jpeg";
import pathan from "../../Assets/b2.jpeg";

const data = [
  {
    id: '1',
    title: 'Animal',
    duration: '3h 21m',
    genres: 'Action, Crime, Drama',
    releaseDate: '1 Dec 2023',
    description: "Plot. Ranvijay 'Vijay' Singh is the son of Balbir Singh, a powerful Delhi-based industrialist. Despite Balbir being a strict father, Vijay's love for his father is deep and abiding. Balbir doesn't know about his son's devotion for him due to his busy schedule, which also keeps him from spending time with his family.",
    image: animal
  },
  {
    id: '2',
    title: 'Fighter',
    duration: '3h 21m',
    genres: 'Action, Crime, Drama',
    releaseDate: '27 Feb 2024',
    description: "The Fighter is now showing in theatres, and people are excited to see if it lives up to the hype. Directed by Siddharth Anand, the movie tells a gripping story about a team of Air Force aviators, led by Hrithik Roshan's character Patty, working to stop a dangerous terrorist mission.",
    image: fighters
  },
  {
    id: '3',
    title: '12th fail',
    duration: '3h 21m',
    genres: 'Action, Crime, Drama',
    releaseDate: '1 Dec 2023',
    description: "12th Fail is a 2023 Indian Hindi-language biographical drama film directed, produced and written by Vidhu Vinod Chopra. It is based on the 2019 eponymous non-fiction book by Anurag Pathak about Manoj Kumar Sharma, who overcame extreme poverty to become an Indian Police Service officer.",
    image: thwethfail
  },
  {
    id: '4',
    title: 'pathan',
    duration: '3h 21m',
    genres: 'Action, Crime, Drama',
    releaseDate: '1 Dec 2023',
    description: "12th Fail is a 2023 Indian Hindi-language biographical drama film directed, produced and written by Vidhu Vinod Chopra. It is based on the 2019 eponymous non-fiction book by Anurag Pathak about Manoj Kumar Sharma, who overcame extreme poverty to become an Indian Police Service officer.",
    image: pathan
  },
];

const BollywoodScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const navigation = useNavigation(); 

  // const handleAddtoCart = (item) => {
  //   setCart([...cart, item]); 
  //  // navigation.navigate('CartScreen', { cart: [...cart, item] });
  //  navigation.navigate('CartScreen', { cart, setCart });

  // };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddtoCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart); 

//setCart([...cart, item]); 
    //navigation.navigate('CartScreen', { cart: [...cart, item] });
    navigation.navigate('CartScreen', { cart: updatedCart });

  };
  
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={item.image} style={styles.movieimage}/>
      <Text style={styles.animal}>{item.title}</Text>
      <Text style={styles.time}>{item.duration} . {item.genres} . {item.releaseDate}</Text>
      <Text style={styles.descriptions}>{item.description}</Text>
      <TouchableOpacity onPress={() => handleAddtoCart(item)}> 
        <Text style={styles.btn}>BOOK SHOW</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BollywoodScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  movieimage: {
    width: 320,
    height: 350,
  },
  time: {
    fontSize: 15,
    fontWeight: "bold"
  },
  descriptions: {
    fontSize: 10
  },
  animal: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  btn: {
    textAlign: "center",
    marginTop: 30,
    borderWidth: 1,
    height: 50,
    marginHorizontal: 40,
    paddingTop: 17,
    backgroundColor: "black",
    color: "white",
    borderRadius: 10
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
  },
});
