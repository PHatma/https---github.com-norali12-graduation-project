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
// import Parse from "parse/react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TextInput, Button } from "@react-native-material/core";
// import phatma from "../assets/re.png";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function SignIn ()  {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const  Signin = async function () {
        const emailValue = email;
        const passwordValue = password;


        return await Parse.User.logIn(emailValue, passwordValue)
          .then(async (loggedInUser) => {
            // logIn returns the corresponding ParseUser object
            Alert.alert(
              'Success!',
              `User ${loggedInUser.get('username')} has successfully signed in!`,
            );
            // To verify that this is in fact the current user, currentAsync can be used
            const currentUser = await Parse.User.currentAsync();
            console.log(loggedInUser === currentUser);
            navigation.navigate('Home');
            return true;
          })
          .catch((error) => {
            // Error can be caused by wrong parameters or lack of Internet connection
            Alert.alert('Error!', error.message);
            return false;
          });
        };
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
              style={Styles.form_input}
              value={email}
              placeholder={'Email'}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize={'none'}
              keyboardType={'email-address'}
            />
            <TextInput
              style={Styles.form_input}
              value={password}
              placeholder={'Password'}
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => {}}>
              <View style={Styles.button}>
                <Text style={Styles.button_label}>{'Sign in'}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
          <Text >
            {"Don't have an account? "}
            <Text >{'Sign up'}</Text>
          </Text>
        </TouchableOpacity>
          
            </SafeAreaView>
    
      );
    };


    