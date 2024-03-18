import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logoimg from '../Assets/fox.jpg';
import { useNavigation } from '@react-navigation/native';

const SpliseScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('CheckPermissions');
        }, 1000);
          return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={logoimg} style={styles.img}/>
            <Text style={styles.text}>AwesomMovie</Text>
        </View>
    );
};
export default SpliseScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    img: {
        width: 130,
        height: 130
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold'
    }
});
