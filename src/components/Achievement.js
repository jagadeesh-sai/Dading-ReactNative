import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';

export default class Achievments extends React.Component {
  render() {
    return (
        <TouchableOpacity  onPress={ this.callFun }>

        <Image source={require('../assets/icons/3x/sme.png')} style = {styles.ImageClass} />
           <Text style={{ marginLeft: 2, fontSize: 12}}> Football{"\n"} Amateur</Text>
       </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  ImageClass:
  {
      // Setting up image width.
      width: 50,

      // Setting up image height.
      height: 50,
      marginLeft:'10%'

  },
});