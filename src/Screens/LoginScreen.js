import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Componants/Headers/Header'
import Footer from '../Componants/Footers/Footer'
import { useNavigation } from '@react-navigation/native'
import firestore from "@react-native-firebase/firestore"


const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigation = useNavigation()

    const handleSignUp = () => {
        navigation.navigate("SignUpScreen") // Corrected the function name
    }
   
    const cleardata=()=>{
        setEmail("")
    }
    const loginUser = () => {
        firestore()
            .collection("users")
            .where("email", "==", email)
            .get()
            .then(res => {
                if (!res.empty) {
                    console.log(JSON.stringify(res.docs[0].data()));
                    navigation.navigate("HomeScreen")
                    cleardata()
                } else {
                    Alert.alert("user not found Please Register with us!")
                    console.log("User not found"); 
                }
            })
            .catch(error => {
                Alert.alert("user not found")
                console.error("Error fetching user:", error);
            });
    }

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                style={styles.inbox}
                value={email}
                placeholder='Email'
                onChangeText={text => setEmail(text)} 
            />
            <TextInput
                style={styles.inbox}
                value={password}
                placeholder='Password'
                onChangeText={text => setPassword(text)} 
                secureTextEntry={true} // Mask the password
            />

            <TouchableOpacity style={styles.btnContainer} onPress={loginUser}>
                <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.loginText1}>Don't have an account yet? Register now</Text>
            </TouchableOpacity>

            <Footer />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginText: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 50,
        fontSize: 30,
        fontWeight: "bold"
    },
    loginText1: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 50,
        fontSize: 15,
        fontWeight: "bold"
    },
    inbox: {
        borderWidth: 1,
        borderColor: "black",
        margin: 20,
        borderRadius: 10,
        padding: 16
    },
    btnContainer: {
        alignItems: "center",
        borderWidth: 1,
        marginLeft: 100,
        marginRight: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: "black",
        justifyContent: "center"
    },
    btn: {
        color: "white"
    }
})
