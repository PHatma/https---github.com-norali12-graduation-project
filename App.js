import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import SignIn from './components/SignUp';
import SignUp from './components/SignUp';
// import profile from './components/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();



export default function App() {
  
  return (
    <View style={styles.container}>     
      <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="UserRegistration" component={SignUp} />
        <Stack.Screen name="UserLogIn" component={SignIn} /> */}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:360,
    height:800,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});