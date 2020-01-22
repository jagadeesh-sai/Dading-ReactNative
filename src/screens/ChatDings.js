import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from '@ant-design/react-native';
import Dings from '../components/Dings'
export default class App extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        email: '',
        password: '',
      };
    }
    
    
  
    render() {
      return (
        <View  >

        <View style={styles.container}>
                <Dings interest = "football" topic = "t1"/>
                <Dings interest = "football" topic = "t2"/>
                <Dings interest = "football" topic = "t3"/>
        </View>   

        <View style={styles.container}>
                <Dings interest = "football" topic = "t1"/>
                <Dings interest = "football" topic = "t2"/>
                <Dings interest = "football" topic = "t3"/>
        </View>     

        <View style={styles.container}>
                <Dings interest = "football" topic = "t1"/>
                <Dings interest = "football" topic = "t2"/>
                <Dings interest = "football" topic = "t3"/>
        </View>     
    

        <View style={styles.container}>
                <Dings interest = "football" topic = "t1"/>
                <Dings interest = "football" topic = "t2"/>
                <Dings interest = "football" topic = "t3"/>
        </View>     
    
    
    </View>


  

        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex:1,
         flexDirection: "row",
        backgroundColor: 'white',
        padding:14,
        paddingBottom: 80,
        marginTop:'15%',
        alignItems:'baseline'
      },
      info:{
        marginTop: 4,
        padding: 3
      },
      iconTopic:{
        width: 17,
        height: 17
      },
      iconInterest:{
        width: 17,
        height: 17
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
        fontWeight: 'bold'
      },
      textAlt: {
        fontSize: 12,
        color: 'grey',
    
      },
      name: {
        top:5,
        fontSize: 15,
      },
      star: {
        position: 'absolute',
        top:-5,
        left:-4
      },
      Left: {
          marginLeft:'52%'
      }
    
  
  });

  