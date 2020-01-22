import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Ding_Icon extends React.Component {
  render() {
    return (
        <View style={{flexDirection:'row', paddingBottom:4, paddingLeft:3, paddingRight:3}}>
          <Grid>
            <Col>
              <Text style={{marginLeft:'1%', fontSize:13}}>{this.props.index}. {this.props.name}</Text>
            </Col>
          </Grid>
          
          <Image source={require('../images/coin.png')} style={{width: 20, height: 20, marginLeft:'5%'}}    />
          <Text style={{paddingLeft: 3, fontSize:11}}>{this.props.coins}</Text>
        </View>
    );
  }
}