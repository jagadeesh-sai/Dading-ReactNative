import React, { Component } from "react";
import { View,StyleSheet } from "react-native";

import CustomTabNavigator from "../components/CustomTabNavigator";
import CustomHeader from "../components/CustomHeader";

export default class Home extends Component {
  static router = CustomTabNavigator.router;

  render() {
    return (
      <View style={{ flex: 1,backgroundColor: '#FEC107' }}>
        <CustomHeader navigation={this.props.navigation} />
        <CustomTabNavigator navigation={this.props.navigation} style={{backgroundColor: '#FEC107' }}/>
      </View>
    );
  }
}

