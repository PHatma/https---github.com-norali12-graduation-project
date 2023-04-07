import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { register, getUserUId } from "../db/auth/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/tabs";
import { addUser, getUserById } from "../db/User";
import React, { FC, ReactElement } from "react";
import { Alert,Image, Dimensions,ImageBackground,borderColor,CheckBox,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

//import Parse from "parse/react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TextInput, Button } from "@react-native-material/core";
// import phatma from "../assets/re.png";
// import { Button, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View ,Image} from 'react-native';


export default function SignUp()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  
  const [phone, setPhone] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const [city, setCity] = useState("");
  const [birthdate, setBirthdate] = useState("");
  

  const Signup = async function () {
     const emailValue = email;
     const passwordValue = password;
     const confirmpasswordValue = confirmpassword;
     const phoneValue = phone; 
     const bloodgroupdValue = bloodgroup;
     const cityValue = city;
     const birthdateValue = birthdate;

   
    return await Parse.User.signUp(emailValue, passwordValue,confirmpasswordValue,phoneValue,bloodgroupdValue,cityValue,birthdateValue)
      .then((createdUser) => {
        // Parse.User.signUp returns the already created ParseUser object if successful
        Alert.alert(
          "Success!",
          `User ${createdUser.get("username")} was successfully created!`
        );
        navigation.navigate('Home');
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  };


  return (
    <SafeAreaView style={styles.container}>
      
        <ScrollView>
          <View>
            <TextInput
              variant="outlined"
              style={styles.input}
              value={email}
              placeholder={"Email"}
              leading={(props) => <Icon name="account" {...props} />}
              onChangeText={(text) => setEmail(text)}
              inlineImageLeft="email"
              inlineImagePadding={2}
              underlineColorAndroid="transparent"
              autoCapitalize={"none"}
            />

            <TextInput
              variant="outlined"
              style={styles.input}
              value={password}
              placeholder={"Password"}
              leading={(props) => <Icon name="lock" {...props} />}
              placeholderTextColor={"#5D5F5A"}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              variant="outlined"
              style={styles.input}
              value={confirmpassword}
              placeholder={"ConfirmPassword"}
              leading={(props) => <Icon name="lock" {...props} />}
              placeholderTextColor={"#5D5F5A"}
              secureTextEntry
              onChangeText={(text) => setConfirmpassword(text)}
            />
           
             <TextInput
              variant="outlined"
              style={styles.input}
              value={phone}
              placeholder={"Phone"}
              // leading= {props => <Icon name="mobile" {...props} />}
              onChangeText={(text) => setPhone(text)}
              autoCapitalize={"none"}
            />
            <TextInput
              variant="outlined"
              style={styles.input}
              value={bloodgroup}
              placeholder={"BloodGroup"}
              onChangeText={(text) => setBloodgroup(text)}
              autoCapitalize={"none"}
            />
           
            <TextInput
              variant="outlined"
              style={styles.input}
              value={city}
              placeholder={"City"}
              // leading= {props => <Icon name="location" {...props} />}

              onChangeText={(text) => setCity(text)}
              autoCapitalize={"none"}
            />
 <TextInput
              variant="outlined"
              style={styles.input}
              value={birthdate}
              placeholder={"BirthDate"}
              // leading= {props => <Icon name="date" {...props} />}
              onChangeText={(text) => setBirthdate(text)}
              autoCapitalize={"none"}
            />
            <Button
              variant="outlined"
              color="#000000"
              style={styles.B}
              title={"SignUp"}
              onPress={() => registerUser()}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text >
            {'Already have an account? '}
            <Text >{'Log In'}</Text>
          </Text>
        </TouchableOpacity>
          </View>
        </ScrollView>
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     alignItems: 'center'
  //   },

  // img:{
  //   flex: 1,
  // width: Dimensions.get("window").width,
  // height:  Dimensions.get("window").height,

  //  },

  input: {
    justifyContent: "center",
    margin: 5,
    opacity: 1,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#B01B0C",
    marginBottom: 15,
    fontWeight: 800,
    top: 50,
  },

  B: {
    width: "60%",
    Height: "60",
    position: "absolute",
    bottom: 0,
  },
});
