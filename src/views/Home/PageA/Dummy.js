

import React, { Component } from 'react';
import { Alert, Text,AsyncStorage , ScrollView} from 'react-native';


// import * as Expo from 'expo';

import { withNavigation } from 'react-navigation';

export default class Dummy extends React.Component {
 
  constructor(props) {
    super(props);
  // this.baseUrl = "https://dading.herokuapp.com";
   //this.baseUrl = "http://192.168.0.106:3000";
  

    this.state = {connection:[],user:[]};
  }
  async componentDidMount() {

        //let baseUrl = "http://192.168.0.106:3000";
        let baseUrl = "https://dading.herokuapp.com";
       
       
       
        const {navigate} = this.props.navigation;
       

       
         console.log("login using google---");
         try {
           console.log("calling google sign in..");
          const result = await Expo.Google.logInAsync({androidClientId:"463482139501-fme9dgs10h6brhll4nftl9lvfndda2nd.apps.googleusercontent.com",scopes: ["profile", "email"]
          })
          console.log("Result is---->",result);

          if (result && result.type === "success") {
            this.setState({
              signedIn: true,
              name: result.user.name,
              photoUrl: result.user.photoUrl,
              email : result.user.email,
              id : result.user.id

            })
            console.log("name--->",result.user.name);
            console.log("photoUrl--->",this.state.photoUrl);
            console.log("user--->",result.user);
            console.log("email---",this.state.email);
             let getUserUrl = baseUrl+"/user/"+this.state.id;
             console.log("getUsr---",getUserUrl);
            let user = await fetch(getUserUrl);
            user = await user.json();
            console.log("U--",JSON.stringify(user));
            console.log("inside get user message--",user);
            if(user.message && user.message.length){
              let loginDetails = {email : this.state.email,loginType : "ga",password : "google"}
              //login existing user
              let url = baseUrl+"/user/login";
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
              .then(userLogin => userLogin.json())
              .then(userLogin => { 
                console.log("user details-->",userLogin.message)
              // Alert.alert('Login success!!!');
                if(userLogin.status == 200) {
                  console.log("User status --->",userLogin.message[0].id);
                  AsyncStorage.setItem('userDetails', JSON.stringify(userLogin.message));
                  Alert.alert('Success');
                  navigate('Main')
                  // AsyncStorage.getItem('userDetails').then(res => {
                  //   if (res !== null) {
                  //     res = JSON.parse(res);
                  //     console.log("user details",res);
                  //     //resolve(true);
                  //   } else {
                  //     console.log("userdetails---->",res);
                  //     //resolve(false);
                  //   }
                  // })
                  // .catch(err => console.log(err));
                }     
                else 
                  Alert.alert('Login Failed!!!');
              });
            }else{
              //register new user
              console.log("registering new user--");
              let registerDetails = {id : this.state.id,first_name :this.state.name,loginType : 'ga',email : this.state.email}
              let url = baseUrl+"/user/registerImplicit";
              let data = {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'same-origin',
                body: JSON.stringify(registerDetails),
                headers: {
                  'Accept':       'application/json',
                  'Content-Type': 'application/json'
                }
              }
              fetch(url,data)
              .then(response => response.json())
              .then(response => { 
                console.log("user details-->",response.message)
                if(response.status == 200){  
                  //Alert.alert("success");
                  AsyncStorage.setItem('userDetails',JSON.stringify([registerDetails]) );
                  navigate('Register1')
                }
                else 
                  Alert.alert('User denied');
              });
            }

              
           // });
            console.log("does not matter now---->",result);
                // /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
            // console.log(user);
           }
          }
          catch(error){
             console.log("error from google-->",error);
           
          }
       }

       render() {
        return (
     
     <ScrollView>
     <Text style={{padding:24,justifyContent:"center"}}>REDIRECTING TO GOOGLE...</Text>
        </ScrollView>
        )
    }       
}

