import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';

const Category1 = () => {
  const catImage=[
    {
        title: 'movies',
        iconUrl: require('../../Assets/Catimgage/cat.jpeg'),
        redirectUrl: 'MovieScree',

    },
    {
        title: 'rated',
        iconUrl: require('../../Assets/Catimgage/cat2.jpeg'),
        redirectUrl: 'rated',

    }, {
        title: 'popular',
        iconUrl: require('../../Assets/Catimgage/cat3.jpeg'),
        redirectUrl: 'popular',

    }, {
        title: 'tv',
        iconUrl: require('../../Assets/Catimgage/cat4.jpeg'),
        redirectUrl: 'tv ',

    }, {
        title: 'shows',
        iconUrl: require('../../Assets/Catimgage/cat5.jpeg'),
        redirectUrl: '',

    }, {
        title: 'youTube',
        iconUrl: require('../../Assets/Catimgage/cat6.jpeg'),
        redirectUrl: 'BookATest',

    },
    
  ]

const navigation=useNavigation()
const handleNavigate=url=>{
try {
    navigation.navigate(url)
} catch (error) {
    console.log(error);

}
}
return (
    <View style={styles.CatContainer}>
    {catImage.map((item,index)=>(
        <View key={index}>
        <TouchableOpacity  style={styles.iconContainer} onPress={() => handleNavigate(item.redirectUrl)} >
        <Image style={styles.icons} source={item.iconUrl}/>
        <Text style={{color: '#000000',alignSelf: 'center',marginTop: 4, textAlign: "center", fontSize: 10,fontWeight: "600",textAlign:"center"}} >{item.title}</Text>
        </TouchableOpacity>
        </View>
    ))}
    </View>
  )
}

export default Category1

const styles = StyleSheet.create({
    CatContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        rowGap: 0,
        flexWrap:"wrap",
        marginVertical:10,
        marginHorizontal:10,
        backgroundColor:"white",
        borderWidth:0.5,
        borderRadius:10,
        padding:5
    },
    icons:{
        width:40,
        height:50,
        borderColor:"black",
        alignItems: 'center',

    },
    iconContainer:{
        display: 'flex',
        justifyContent: 'center',
}
})