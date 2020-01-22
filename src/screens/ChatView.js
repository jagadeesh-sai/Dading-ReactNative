import React, { Component } from 'react';
import { Platform, Alert, ScrollView,Button, TextInput, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var shd1 = require('../assets/icons/asset2.png');
var shd2 = require('../assets/icons/h1.png');
var shd3 = require('../assets/icons/h3.png');

export default class App extends Component {

  FloatingButtonEvent=()=>{
      Alert.alert("Floating Button Clicked");
  }

    
    
  
    render() {
      return (
        
  <ScrollView>
   
 <View style={styles.container}>

 
    <View style={styles.border}>
         <View style={styles.direct}>
        <Image source={require('../assets/images/pk.jpg')} 
                style={styles.image} />                 
       </View>
       <View>
       <Text style={styles.text}> Kapil Jaeel |<Text> Topic </Text> <Image source={shd1} style={styles.Badge}/></Text> 
       
      
       <Text style={{alignSelf: "flex-end", color: "grey"}}>5:31 pm</Text>
       <TouchableOpacity
                  style={styles.Rate}    >
           
               
                    <Text style={{alignSelf: "center",
           color: 'white'}}> RATE </Text>
                    
              </TouchableOpacity>

        </View>

       <View style={{paddingBottom: '2%'}}>
       <Text style={styles.text1} >ffffff</Text>
       </View>
 </View>

 <View style={styles.border}>
         <View style={styles.direct}>
        <Image source={require('../assets/images/pk.jpg')} 
                style={styles.image} />                 
       </View>
       <View>
       <Text style={styles.text}> Kapil Jaeel |<Text> Topic </Text><Image source={shd1} style={styles.Badge}/></Text> 
       
       
       <Text style={{alignSelf: "flex-end", color: "grey"}}>5:31 pm</Text>
       <TouchableOpacity
                  style={styles.Rate}    >
           
               
                    <Text style={{alignSelf: "center",
           color: 'white'}}> RATE </Text>
                    
              </TouchableOpacity>

        </View>

       <View style={{paddingBottom: '2%'}}>
       <Text style={styles.text1} >ffffff</Text>
       </View>
 </View>


 <View style={styles.container1}>
      
         <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent} style={styles.TouchableOpacityStyle} >
           <Image source={require('../images/Button.png')}  style={styles.FloatingButtonStyle} />
         </TouchableOpacity>
       </View>

 

 

 
 </View>

 </ScrollView>

  

        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding:14,
      paddingBottom: 80
    },
    Rate: {    
      
      width: 50,
      alignSelf: "flex-end",
      height:20,     
      
    
      backgroundColor:'#FEC107',
     
      borderColor: '#fff'
    },
   
    outerCircle: {
      alignItems: 'center',
      borderRadius: 40,
      width: 80,
      height: 80,
    },
    image: {
      borderRadius: 40,
      width: 80,
      height: 80,
      },
  text: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: wp('-20%'),
      marginLeft: wp('21%')
     
    },
    direct: {
      flex:1,
      flexDirection:`row`
    },
    text1: {
       
       marginTop:'-10%',
        marginLeft: '25%'
       
      },
    border: {
      borderBottomColor: '#DCDCDC', 
      borderBottomWidth: 1,
      marginTop: 10,     
      
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#e5e5e5",
      marginTop: '120%'
    },
    headerText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
     
    },
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
    },
    
    Badge :{
    height: 15, width: 13
    }
  
  
  });

  
