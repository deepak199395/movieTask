import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Header from '../Componants/Headers/Header';
import firestore from "@react-native-firebase/firestore";
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

const navigation = useNavigation()

  const clearfield=()=>{
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
    setPhone("");
    setSelectedGender("")
    setDob("")
  }

  const registerUser = () => {
    const userID = uuid.v4(); 
    firestore()
    .collection("users")
    .doc(userID)
    .set({
      name: name,
      email: email,
      password: password,
      lastname: lastname,
      phone: phone,
      dob: dob,
      gender: selectedGender, 
      userID: userID
    }).then(res => {
      console.log("User created");
      clearfield();
      navigation.navigate("LoginScreen")
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(()=>{
  
  },[])

//  const validate =()=>{
//   let isValid=true;

//   if(name==""){
//     isValid=false
//   }
//   if(lastname==""){
//     isValid=false
//   }
//   if(email==""){
//     isValid=false
//   }
//   if(password==""){
//     isValid=false
//   }
//   if(dob){
//     isValid=false
//   }
// return isValid;
//  }
const validate = () => {
  let isValid = true;

  if (name === "") {
    isValid = false;
  }
  if (lastname === "") {
    isValid = false;
  }
  if (email === "") {
    isValid = false;
  }
  if (password === "") {
    isValid = false;
  }
  if (dob === "") { // Check if dob is empty
    isValid = false;
  }
  return isValid;
};

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.text}> SignUp </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputbox}
            value={name}
            placeholder='name'
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.inputbox}
            value={lastname}
            placeholder='lastname'
            onChangeText={text => setLastname(text)}
          />
          <TextInput
            style={styles.inputbox}
            value={email}
            placeholder='email'
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.inputbox}
            value={password}
            placeholder='password'
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            style={styles.inputbox}
            keyboardType={'number-pad'}
            value={phone}
            placeholder='phone'
            onChangeText={text => setPhone(text)}
          />
          <TextInput
            style={styles.inputbox}
            value={dob}
            placeholder='age'
            keyboardType={'number-pad'}
            onChangeText={text => setDob(text)}
          />

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedGender}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}>
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Others" value="others" />
            </Picker>
          </View>

          <TouchableOpacity
           style={{ paddingEnd: 20 }}
            onPress={() => {
            if(validate()){
              registerUser();

            }else{
              Alert.alert("plese inser all fills")
            }
          }}>
            <Text style={styles.btn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold"
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: "center",
    borderRadius: 10,
    paddingLeft: 15
  },
  inputContainer: {
    marginTop: 30
  },
  btn: {
    borderWidth: 1,
    textAlign: "center",
    marginHorizontal: 50,
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: "black",
    color: "white",
    marginBottom: 20
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10
  },
  picker: {
    height: 50,
    width: "100%",
    paddingLeft: 15
  }
});
