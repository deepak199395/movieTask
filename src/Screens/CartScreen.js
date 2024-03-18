import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../Componants/Footers/Footer';

const CartScreen = ({ route }) => {
  const { cart } = route.params;
  const [cartItems, setCartItems] = useState(cart);

 // const navigation = useNavigation();

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart); 
  };
  useEffect(() => {
    console.log("Cart Items Updated:", cartItems);
  }, [cartItems]);
  

  // const renderItem = ({ item, index }) => (
  //   <View style={styles.cartItem}>
  //     <TouchableOpacity onPress={() => removeFromCart(index)}>
  //       <Text style={styles.removeButton}>Remove from Cart</Text>
  //     </TouchableOpacity>
  //     <Image source={item.image} style={styles.cartItemImage} />
  //     <Text style={styles.cartItemTitle}>{item.title}</Text>
  //     <Text style={styles.cartItemTitle}>{item.duration}</Text>
  //     <Text style={styles.cartItemTitle}>{item.releaseDate}</Text>
  //   </View>
  // );
  const renderItem = ({ item, index }) => (
    <View style={styles.cartItem}>
      <TouchableOpacity onPress={() => removeFromCart(index)}>
        <Text style={styles.removeButton}>Remove from Cart</Text>
      </TouchableOpacity>
      <Image source={item.image} style={styles.cartItemImage} />
      <Text style={styles.cartItemTitle}>{item.title}</Text>
      <Text style={styles.cartItemTitle}>{item.duration}</Text>
      <Text style={styles.cartItemTitle}>{item.releaseDate}</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Cart</Text>
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index} 
      />
      <Footer/>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    fontSize: 18,
    color: 'blue',
  },
  cartItem: {
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItemImage: {
    width: 150,
    height: 250,
    marginRight: 10,
  },
  cartItemTitle: {
    fontSize: 18,
  },
  removeButton: {
    color: 'red',
    marginTop: 10,
  },
});
