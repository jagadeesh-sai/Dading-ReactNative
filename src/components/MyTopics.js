import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';

  const Topics = (props) => {
    var i = props.topicType;
    console.log("inside topic-- type = ",i);
    if(i == "football") {
      icon = require('../assets/icons/t1.png');
    }
    else
    if(i == "cricket"){
        icon = require('../assets/icons/t-2.png');
    }
    else if(i == "painting"){
        icon = require('../assets/icons/t-3.png');
    }
    else if (i == "game") {
        icon = require('../assets/icons/t-4.png');
    }
    else{
        icon = require('../assets/icons/t1.png');
    }
    return (
      <View style={styles.container}>
            <View style= {styles.outerBox}>
                  <View style= {styles.innerBox}>
                      <Text style = {styles.text}>
                          {props.topicType}
                      </Text>
                      <View style = {styles.icon}>
                      <Image source={icon}
                          style={styles.image} />
                      </View>
                  </View>
            </View>
            <View style = {styles.dingers}>
              <Text style = {styles.topic}>{props.topicType}</Text>
            
              <View style = {styles.dingerIcon}>
              <Icon.Ionicons
                      name={'md-heart'}
                      color = "red"
                      size={12}
                      />
                      
              <Text style = {styles.dingerText}>200 Dingers</Text> 
                   
              </View>

       
            </View>
            
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  up: {
    top: -20,
  },
  image: {
    width: 65,
    height: 65,
    
  },
  topic: {
    justifyContent: 'center',
    alignItems: 'center',
  
    top: 2,
    fontWeight: 'bold',
    paddingBottom: 3
  },
  dingerText: {
    top:-20,
    fontSize: 11,
    color: 'grey',
    left: 8,
    padding: 5,
  },
  dingerText1: {
    top:-22,
    fontSize: 11,
    color: 'grey',
    left: 4,
    
  },
  dingerIcon: {
    top: 0,
    left: -1
  },
 
  innerBox:{
    height: 70,
    width: 70,
    backgroundColor:'#FCBE4E',
    margin: 2,
    padding: 4,
    borderRadius: 20,
    borderColor: '#FB9F00',
    borderWidth: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -2,
    padding: 8
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color:"white",
    position: 'absolute',
    top: 80,
    left: 45
  },

  

});

export default Topics
