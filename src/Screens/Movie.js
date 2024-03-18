import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../Componants/Headers/Header';
import Footer from '../Componants/Footers/Footer';
import axios from 'axios';

const Movie = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/movie/157336?api_key=b103b75d7ddb1f18a42b481071801058&append_to_response=videos");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      {data && (
        <View style={styles.card} > 
          <Text style={styles.title}>MovieName: {data.title}</Text>
          <Text style={styles.Overview}>Overview: {data.overview}</Text>
          <Text>Release Date: {data.release_date}</Text>
          <Text>Runtime: {data.runtime} minutes</Text>
          {data.genres && (
            <Text>Genres: {data.genres.map(genre => genre.name).join(', ')}</Text>
          )}
          <Text>Tagline: {data.tagline}</Text>
          <FlatList
            data={data.videos.results}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View key={item.id}>
                <Text>Name: {item.name}</Text>
                <Text>Type: {item.type}</Text>
              </View>
            )}
          />
          
          
     <Footer/>
        </View>
      )}
    </View>
  );
}

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
   card:{

   },
   title:{
    fontSize:20,
    fontWeight:"bold",
    padding:10,
    color:"black"
   },
   Overview:{
    padding:10,
    backgroundColor:"gray",
    color:"white"
   }

});
