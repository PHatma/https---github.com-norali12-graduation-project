// import { StatusBar } from "expo-status-bar";
// import {Button, ScrollView,StyleSheet,View,Text, TextInput,Icon,TouchableOpacity,Image} from "react-native";
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { getUsers } from "../db/User";
// import { getUserUId } from "../db/auth/auth";
// import { getUserById } from "../db/User";

// import { useState } from "react";
// import * as React from "react";
// export default function Profile({ navigation }) {
//   const[username,setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [bloodgroup,setBloodgroup] = useState("");
//   const [birthdate,setBirthdate] = useState("");
//   const [phone,setPhone] = useState("");
//   const [city,setCity] = useState("");

//   React.useEffect(() => {
//     getUserUId().then((id) => {
//       console.log(id);
//       getUserById(id).then((user) => {
//         setUsername(user[0].username);
//         setPassword(user[0].password);
//         setBirthdate(user[0].birthdate);
//         setBloodgroup(user[0].bloodgroup);
//         setCity(user[0].city);
//         setPhone(user[0].phone);
//       });
//     });
//   }, []);
  

//   return (
//     <ScrollView>
//         <View >
//         {/* <TouchableOpacity
//           style={styles.buttonFacebookStyle}
//           activeOpacity={0.5}  onPress={() => navigation.navigate("Settings")}>
//           <Image
//             source={{
//               uri:"https://th.bing.com/th/id/OIP.OGddDrWtd7ozwxqHOKny2gHaHZ?pid=ImgDet&w=626&h=625&rs=1",
//             }}
//             style={styles.buttonImageIconStylee}
//           />
//           <View style={styles.buttonIconSeparatorStyle} />
  
//         </TouchableOpacity> */}
//    </View>  
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: "https://th.bing.com/th/id/R.3ff5dbee7bf69cb6e2fc8d7ed58ae36a?rik=GYI4klp%2fZsAMSw&pid=ImgRaw&r=0",
//           }}
//           style={styles.buttonImageIconStyle}
//         />
//       </View>
//       <View>
//       <Text style={styles.F} >Username: </Text>
//      <Text style={styles.f} >{username}</Text>
//       </View>

//       <View>
//       <Text style={styles.F} >Birth Date:</Text>
//         <Text style={styles.f}>{birthdate}</Text>
//       </View>

//       <View>
//       <Text style={styles.F} >Password:</Text>
//         <Text style={styles.f}> {password}</Text>
//       </View>

//       <View>
//       <Text style={styles.F}>Blood Group:</Text>
//         <Text style={styles.f}>{bloodgroup}</Text>
//       </View>

//       <View>
//       <Text style={styles.F} >Phone:</Text>
//         <Text style={styles.f} >{phone}</Text>
//       </View>

//       <View>
//       <Text style={styles.F} >City: </Text>
//         <Text style={styles.f} >{city}</Text>
//       </View>
//       <StatusBar style="auto" />
//     </ScrollView>
    
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 1,
//     padding: 30,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonImageIconStyle: {
//     padding: 10,
//     margin: 5,
//     height: 200,
//     width: 200,
//     //  resizeMode: '',
//   },
//   f:
//   {
//         color: "black",
//             fontSize: 26,
//             justifyContent: "space-between",
//             alignItems: "center",
//             textAlign:'center',
//     },
//     F:
//     {
//         fontWeight: "bold",
//         color: "black",
//             fontSize: 26,
//             justifyContent: "space-between",
//             alignItems: "center",
//             textAlign:'center',
//     },
//       buttonFacebookStyle: 
//       {
//         flexDirection: 'row',
//         alignItems: 'center',
//       //  backgroundColor: '#000000',
//         borderWidth: 0.5,
//         borderColor: '#000000',
//         height: 40,
//         borderRadius: 5,
//         margin: 5,
//       },
//       buttonImageIconStylee: {
//         padding: 10,
//         margin: 5,
//         height: 25,
//         width: 25,
//         resizeMode: 'stretch',
//       },
//       buttonTextStyle: {
//         fontWeight: "bold",
//         fontSize: 25,
//         marginBottom: 4,
//         marginLeft: 10,
//       },
//       buttonIconSeparatorStyle: {
//         backgroundColor: '#000000',
//         width: 1,
//         height: 40,
//       },
 
// });