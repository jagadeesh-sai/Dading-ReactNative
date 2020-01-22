import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Font, Icon } from '@ant-design/react-native';




  const Dings = (props) => {
    
    var topic = props.topic;
    var interest = props.interest;
    //var dingDetails = JSON.parse(props.dingsObj)
    console.log(topic);
    console.log("PROPS---------------------->",props);
    var iconInterest, iconTopic;
    if(interest == "football"){
        iconInterest = require('../assets/icons/shield1.jpg');
    }
    if(interest == "Cricket"){
      iconInterest = require('../assets/icons/shield2.jpg');
     }
     if(interest == "Tennis"){
      iconInterest = require('../assets/icons/shield3.jpg');
     }
    if(topic == "t1"){
      iconTopic = require('../assets/icons/shield1.jpg');
    }
    else if(topic == "t2"){
      iconTopic = require('../assets/icons/shield3.jpg');
    }
    else if(topic == "t3"){
      iconTopic = require('../assets/icons/shield3.jpg');
    }
    else if(topic == "t4"){
      iconTopic = require('../assets/icons/shield4.jpg');
    }

    var conncetionApiResult= props.connectionResult;
    if(conncetionApiResult)
      console.log("fetching  falues from prop connectio--->",conncetionApiResult);
    return (
      <View style={styles.container}>
        <View style={styles.outerCircle}>
        <Image source={require('../assets/images/pk.jpg')}
            style={styles.image} />
        <View style = {styles.name}>
          <Text style = {styles.text}>{props.firstName}</Text>
        </View>
        <View style = {styles.info}>
            <Text>
            <Image source={iconInterest}
                style={styles.iconInterest} />
                <Text style = {styles.textAlt}>{props.interest}</Text>
            </Text>
            <Text>
            <Image source={iconTopic}
                style={styles.iconTopic} />
                <Text style = {styles.textAlt}>Novice</Text>
            </Text>

        </View>

        <View style={styles.star}>
       
          <Icon.Ionicons
            name={'md-star'}
            color = "#FFC006"
            
            size={40}
            style={{alignItems: 'center'}}
          />
        <Text style={{marginTop:'-81%', marginLeft:'25%', fontSize:10}}>4.5</Text>
        </View>
        </View>
      
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding:14,
    paddingBottom: 90
  },
  info:{
    marginTop: 3,
  
   marginLeft:'-40%'
  },
  iconTopic:{
    width: 20,
    height: 20
  },
  iconInterest:{
    width: 20,
    height: 20,
   
    
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
  fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 'bold'
  },
  textAlt: {
    fontFamily: 'Roboto',
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

});
export default Dings
