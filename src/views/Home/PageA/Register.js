import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Text, TouchableOpacity ,AsyncStorage} from 'react-native';
import Ding_Icon from '../../../components/Ding_Icon'
// import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@ant-design/react-native';
import { withNavigation } from 'react-navigation';

//goBack
class App extends Component {
  constructor(props) {
    super(props);
   // this.baseUrl = "http://192.168.0.106:3000";
    this.baseUrl = "https://dading.herokuapp.com";
    this.state = {
      "first_name" : "",
      "email" : "",
      "password" : ""
    };
  }

  //onLogin() {
    
    // Expo.Font.loadAsync({
    //        'Roboto': require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
    //      });
         //addConnection(this.state);
//          getTopicByuserName(1);
//         let userId = 1;
        //  let getTopicsUrl = this.baseUrl+"/user/getTopicsByUserId/"+userId;
        //  let getRecommendation = this.baseUrl+"/user/getRecommendation/"+userId;
//         let getRegister = this.baseUrl+"/user/register/"
  
         
        // Promise.all([fetch(getTopicsUrl), fetch(getRecommendation), fetch(getTrenDingErs)])
        // .then(([topics, recommendations,trendingers]) => { 
        //    return Promise.all([topics.json(), recommendations.json(), trendingers.json()]) 
        // })
        // .then(([topics, recommendations,trendingers]) => {
      //   Promise.all([fetch(getRegister), ])//, fetch(getRecommendation), fetch(getTrenDingErs)])
      //   .then(([getRegisterDetails]) => { 
      //       return Promise.all([getRegisterDetails.json()]) 
      //   })
      //   .then(([getRegisterDetails]) => {
      //     // set state in here
      //     console.log("getRegisterDetails---,",getRegisterDetails);
      //     this.setState({
      //       register: getRegisterDetails.message,
         
      //     });
      //     console.log("THIS IS SOMETHING ---->",getRegisterDetails)
      //   });
      // }



  onLogin() {
    console.log("calling register")
    const loginDetails = this.state;
    const {navigate} = this.props.navigation;
    AsyncStorage.getItem('back').then(res => {
      if (res === "true") {
        console.log("back->",res);
        AsyncStorage.setItem('back', "false");
        navigate('Start');
        //resolve(true);
      }else{
        let url = this.baseUrl+"/user/register";
        console.log("reg details--->",loginDetails);
        let data = {
          method: 'POST',
          credentials: 'same-origin',
          mode: 'same-origin',
          body: JSON.stringify(loginDetails),
          headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
          }
        }
        fetch(url,data)
        .then(response => response.json())
        .then(user => { 
          console.log("user details-->",user.message)
           if(user.status == 200){      
            //Alert.alert('User Registered');
            AsyncStorage.setItem('back', "false");
            AsyncStorage.setItem('userDetails', JSON.stringify(user.message));
            navigate('Register1')
           }
          else 
            Alert.alert('User denied');
         });
      }
    })
    .catch(err => console.log(err));
    //Alert.alert('Credentials', `${username} + ${password}`);
  }

  backGo() {
    // const {navigate} = {navigation};
    // navigate.goBack();
    AsyncStorage.setItem('back', "true");
    this.onLogin();
  }

  render() {
    return (
     
      <View style={{marginLeft:'4%', marginTop: '10%'}}>
     
    
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity  onPress={() => { this.backGo() }}>   
      <Icon
            name= "ios-arrow-back"          
             size={30} color="black" />
             </TouchableOpacity>

     <Text style={{fontSize: 15, color: 'black', marginTop: 5, marginLeft: 10}}>
                    Create Account
                </Text>
     </View>
      <View >
      
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,marginBottom:10, marginTop:100}}>
                
      <TextInput
          value={this.state.first_name}
          onChangeText={(first_name) => this.setState({ first_name })}
          placeholder={'Name'}
          style={styles.input}
        />

               
          </View>
             

          
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginTop:'10%'}}>
                
                <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />
                
                </View>

                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginTop:'10%'}}>
                
                <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
                
                </View>

                {/* <View>
                <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
                </View> */}

            <View style={{marginTop:'10%'}}>
              <TouchableOpacity
                  style={styles.Facebook}
                  activeOpacity = { .5 }
                  onPress={this.onLogin.bind(this)}
                  >
        
                    <Text style={{ marginTop: 10,
          fontSize: 20, marginLeft: 40, color: 'white'}}> Sign Up </Text>
                    
              </TouchableOpacity>

              </View>


        </View> 
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEC107'
    
  
  },
  Facebook: {
 
    marginTop:20,
    width: 250,
    height: 50,
  
    paddingBottom:15,
    
   marginLeft: 60,
    backgroundColor:'#FEC107',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },
});
export default withNavigation(App);