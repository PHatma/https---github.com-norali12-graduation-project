import { Button, Pressable, StyleSheet, Text, Touchable, TouchableOpacity, View ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../assets/colors/colors';
import Search from './Search';
export default function Home() {
  return (
    <>
    <View style ={style.rectangle_1} >
    <View style={style.search}>
      <Text style ={{fontSize:30,marginBottom:15,color:"beige"}}>Hello , user </Text>
      <View ><Search /></View>
     </View>
    
    <Icon name='user-circle-o' size={35} style={{marginLeft:230,bottom:80 }} color="beige" ></Icon>
    </View>
    
    <View style ={style.rectangle_2}>
    </View>
    <View style={{position:"absolute",
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row',
    top:150,
    bottom:"auto",
    right:10,
    left:10
    }}>
    <TouchableOpacity  style={{paddingBottom:10,paddingTop:10,paddingLeft:15,paddingRight:10,backgroundColor:'white',borderRadius: 20}}>
      <Image source ={require('../assets/donate.jpg')} style={{width:132,height:100}}
      resizeMode ='stretch'/>
      <Text style={{marginLeft:20,fontSize:20,color:'black',fontWeight:'bold'}}>DONATE</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={{paddingBottom:20,paddingTop:5,paddingLeft:10,paddingRight:10,backgroundColor:'white',borderRadius: 20}}>
    <Image source ={require('../assets/blood.jpg')} style={{width:120,height:110,marginLeft:5}}
      resizeMode ='stretch'/>
    <Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Blood Emergency</Text>
    </TouchableOpacity>
    </View>
    <View style={style.buttons}>
    <TouchableOpacity  style={{paddingBottom:10,paddingTop:20,paddingLeft:15,paddingRight:10,backgroundColor:'white',borderRadius: 20}}>
      <Image source ={require('../assets/map.jpg')} style={{width:130,height:100}}
      resizeMode ='stretch'/>
      <Text style={{marginLeft:20,fontSize:17,color:'black',fontWeight:'bold'}}>Blood Map</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={{paddingBottom:20,paddingTop:5,paddingLeft:10,paddingRight:10,backgroundColor:'white',borderRadius: 20}}>
    <Image source ={require('../assets/contact.jpg')} style={{width:130,height:110,marginLeft:5}}
      resizeMode ='stretch'/>
    <Text style={{marginLeft:20,fontSize:17,color:'black',fontWeight:'bold'}}>Contact Us</Text>
    </TouchableOpacity>
    </View>

    </>
  );
}

const style = StyleSheet.create({
  rectangle_1: {
    position:"absolute",
    width: 360,
    height:200,
    top:0,
    bottom:"auto",
    right:"auto",
    left:-1,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

    rectangle_2: {
      position:"absolute",
      width: 360,
      height:590,
      top:170,
      
      borderTopRightRadius:40,
      borderTopLeftRadius:40,
      backgroundColor: '#F6F5F5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    search:{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      marginRight:160,
      marginBottom:50,
      
    },
    buttons1:{
      position:"absolute",
      display:'flex',
      justifyContent:'space-around',
      flexDirection:'row',
      top:150,
      bottom:"auto",
      right:10,
      left:10
      },
    buttons2:{
    position:"absolute",
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'row',
    top:330,
    bottom:"auto",
    right:10,
    left:10
    }
});
