import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from '@ant-design/react-native';

const Connections = (props) => {
var dings = require('../assets/icons/cn1.png');
var mutual = require('../assets/icons/cn2.png');
    return (
       <View style={styles.container}>
      
       <TouchableOpacity>
          <View style = {styles.leftTab}>
                <View>
                <Image source={require('../assets/images/pk.jpg')}
                    style={styles.leftImg} />
                </View>
                <View style={styles.leftInfo}>
                      <Text style={styles.name}>
                      {props.firstName}
                 </Text>
                      <Text>
                      <Image source={dings}
                          style={styles.dings} />
                          <Text style = {styles.dingTopic}> {props.conversation} Dings</Text>
                      </Text>
                      <Text>
                      <Image source={mutual}
                          style={styles.mutual} />
                            <Text style = {styles.dingTopic}>15 mutual topics</Text>
                      </Text>
                </View>
          </View>
          </TouchableOpacity>
          
          <View style={styles.separator} />

          <TouchableOpacity>
          <View style = {styles.rightTab}>
              <View style={styles.rightInfo}>
                    <Text style={styles.name}>
                    {props.firstName}
                    </Text>
                    <Text>
                        <Text style = {styles.dingTopic}>{props.conversation} dings</Text>
                        <Image source={dings}
                            style={styles.dings} />
                    </Text>
                    <Text>
                          <Text style = {styles.dingTopic}>15 mutual  topics</Text>
                          <Image source={mutual}
                              style={styles.mutual} />
                    </Text>
              </View>
              <View>
              <Image source={require('../assets/images/pk.jpg')}
                  style={styles.rightImg} />
              </View>
          </View>
          </TouchableOpacity>
       </View>
       
     );

  }


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    borderStyle: 'dotted',

  },
  dings:{
    width: 17,
    height: 17
  },
  mutual:{
    width: 17,
    height: 17
  },
  dingTopic:{
    fontSize: 12,
    color: 'grey',
    marginBottom: 9,
  },
  name:{
    fontSize: 13,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  leftImg:{
    borderRadius: 35,
    width: 62,
    height: 62,
    marginRight: 5
  },
  leftTab: {
    flexDirection: 'row',
    justifyContent:'flex-start',
  

  },
  rightImg:{
    borderRadius: 35,
    width: 62,
    height: 62,
    marginLeft: 5
  },
  rightTab: {
    flexDirection: 'row',
    
    justifyContent:'flex-end',

  },
  rightInfo:{
    alignItems: 'flex-end'
  },
  leftInfo:{
      alignItems: 'flex-start'
  },
  separator: {
    marginVertical: 10,
    borderWidth: 1,
    height: '90%',
   
    borderColor: '#DCDCDC',
  },
});
export default Connections
