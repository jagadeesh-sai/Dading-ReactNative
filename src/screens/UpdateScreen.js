

import React, { Component } from 'react';
import { Alert, Text,AsyncStorage , ScrollView, View} from 'react-native';

// import * as Expo from '@ant-design/react-native';

import { withNavigation } from 'react-navigation';
import OtherProfileScreen from './OtherProfileScreen';


export default class Dummy extends React.Component {
 
  constructor(props) {
    super(props);
  // this.baseUrl = "https://dading.herokuapp.com";
   //this.baseUrl = "http://192.168.0.106:3000";
  

    this.state = {otherId : null};
  }
  async componentDidMount() {
    let otherId = this.props.navigation.state.params.other_id;
    this.setState({'otherId' : otherId})

    console.log("INSIDE UPDATE SCREEN EDUCATION ----->", this.props.otherEducation)

   Alert.alert(this.props.navigation.state.params.otherEducation)
    }

       render() {
        return (
     
     <ScrollView>
     { this.props.navigation.state.params.other_id &&

     <View>
     <OtherProfileScreen navigation={this.props.navigation} 
     otherUserID = {this.props.navigation.state.params.other_id}
      otherUserName = {this.props.navigation.state.params.other_name}
      ownUserId =   {this.ownId}
      otherEducation =   {this.props.navigation.state.params.otherEducation} 
      otherWork =  {this.props.navigation.state.params.otherWork} 
      otherIndustry =   {this.props.navigation.state.params.otherIndustry} 
      />
     </View>
     }


        </ScrollView>
        )
    }       
}

