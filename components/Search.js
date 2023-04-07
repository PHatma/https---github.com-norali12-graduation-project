import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function Search() {
  return (
    <View style={styles.SearchContainer}>
      <Icon name='search' size={17} color="black" style={{marginRight:1}} ></Icon> 
      <TextInput  placeholder="Search..." / >
    </View>
  )
}
const styles = StyleSheet.create({
    SearchContainer:{
    position:'absolute',
    display:"flex",
    flexDirection:"row",
    height:30,
    width:229,
    alignContent:'space-between',
    justifyContent:'flex-start',
    padding:5,
    backgroundColor:"white",
    borderRadius:20,

    },
})
export default Search
