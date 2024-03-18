import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Componants/Headers/Header';
import Footer from '../Componants/Footers/Footer';
import Banner1 from '../Componants/Carosels/Banner1';
import Category1 from '../Componants/Categories/Category1';
import Ott from '../Componants/Categories/Ott';
import Support from '../Componants/Categories/Support';
import VerticalCarousal from '../Componants/Carosels/VerticalCarousal';
import Movies from './Movies/Movies';
import TVshow from './Movies/TVshow';

const HomeScreen = () => {
  const data = [
    { key: 'banner', component: <Banner1 /> },
    { key: 'category', component: <Category1 /> },
    { key: 'ott', component: <Ott/> },
    { key: 'VerticalCarousal',component:<VerticalCarousal/>},
    {key: 'Movies', component:<Movies/> },
    {key:'tvshow',component:<TVshow/>},
    { key: 'Support', component: <Support /> },
  ];

  const renderItem = ({ item }) => {
    return item.component;
  };

  return (
    <View style={styles.container}>
    <Header/>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      <Footer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
  },
});
