import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
// import { Icon } from 'expo';
import { Icon } from '@ant-design/react-native';

export default class Ding_Icon extends React.Component {
      async componentWillMount() {
        // await Expo
        //     .Font
        //     .loadAsync({Roboto: require("../assets/fonts/Roboto/Roboto-Regular.ttf"), Roboto_medium: require("../assets/fonts/Roboto/Roboto-Medium.ttf"), Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")});
        // this.setState({loading: false});
    }
  render() {
    return (
      <View style={styles.container}>
          <Text style = {styles.ding}>DING!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 35,
      width: 70,
      height: 70,
      bottom: 5,
      borderWidth: 6,
      margin: 45,
      borderColor: '#FEC107'
    },
  ding: {
     transform: [{ rotate: '330deg'}],
     fontWeight: 'bold',
     fontSize: 20,
     color: '#D6684A'
  }
});
