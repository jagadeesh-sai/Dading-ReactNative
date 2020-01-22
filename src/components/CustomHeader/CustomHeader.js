// import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@ant-design/react-native';
import React from "react";
import { View , Image, TouchableOpacity} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchScreen from '../../screens/SearchScreen';
import styles from "./styles";
import Ionicons from 'react-native-ionicons';

export default ({ navigation }) => (
    <View style={{...styles.container,  flexDirection: "row"}}>
    <View style = {{marginLeft : 10, marginTop: 5}}>
    <Ionicons
      name="md-menu"
      size={35}
      color="white"
      onPress={() => navigation.openDrawer()}
    />
    </View>
    
    <View style={{flexDirection:'row', marginLeft:'5%', marginTop:'1%'}}> 
    <View style = {{marginLeft : hp('12%')}}>
    <TouchableOpacity >
    <Image source={require('./images/coin.png')}  style={{   width: 35,height: 35}}  />
    </TouchableOpacity>  
    </View>

   
    <View style = {{marginLeft : -13}}>
    <TouchableOpacity >
    <Image source={require('./images/bell.png')}   style={{  width: 35, height: 35}} />
    </TouchableOpacity>  
    </View>

    <View style = {{marginLeft : -13}}>

     <TouchableOpacity onPress={() => {       
        navigation.navigate('ProfileScreen');}} >
    <Image source={require('./images/pk.jpg')} style={{
        height: 35,
        width: 35,
        marginTop:'1%',
        borderRadius: 35,
        borderColor: "red",
        borderWidth: 1
    }}   />
    </TouchableOpacity>  

    </View>
    </View>
    <View style={{margin: hp('1%'), flexDirection:'row', flex:1, justifyContent:'flex-end', paddingRight:'2%'}}> 
    <View style={{marginRight:'10%', paddingBottom:'1%'}} >
    <TouchableOpacity    onPress={() => {
      navigation.navigate('SearchScreen');}}> 
    <Ionicons
      name="ios-search"
      size={35}
      color="white"

    />
     </TouchableOpacity> 
    </View>

    <View>
    <TouchableOpacity onPress={() => {       
        navigation.navigate('ChatMain');}}> 
    <Ionicons
      name="ios-paper-plane"
      size={35}
      color="white"
     
    />
  </TouchableOpacity> 
    </View>
    </View>
    
  </View>
);



//export default CustomHeader;
