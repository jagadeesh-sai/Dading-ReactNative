
import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image, Text, TouchableOpacity,AsyncStorage } from 'react-native';
import Ding_Icon from '../../../components/Ding_Icon'
// import { Ionicons } from "@expo/vector-icons";
import {createMaterialTopTabNavigator,TabNavigator, TabBarBottom} from "react-navigation";
import Login from "./Login";
import Dummy from "./Dummy"
import Expo from "expo";



signIn = async () => {

}


async function onGoogleLogin(){
 //let baseUrl = "http://192.168.0.106:3000";
 let baseUrl = "https://dading.herokuapp.com";



 const {navigate} = this.props.navigation;

 try {
  const result = await Expo.Google.logInAsync({
    androidClientId:
      "463482139501-fme9dgs10h6brhll4nftl9lvfndda2nd.apps.googleusercontent.com",
    //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
    scopes: ["profile", "email"]
  })

  if (result.type === "success") {
    this.setState({
      signedIn: true,
      name: result.user.name,
      photoUrl: result.user.photoUrl
    })
    console.log("Result is---->",result);
        // /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
    // console.log(user);
    Alert.alert(JSON.stringify(result));
    // let getUserUrl = baseUrl+"/user/"+userGoogle.id;
          
    // Promise.all([fetch(getUserUrl)])
    // .then(([user]) => { 
    //   return Promise.all([user.json()]) 
    // })
    // .then(([user]) => {
    //   // set state in here
    //   if(user.message && user.message.length){
    //     let loginDetails = {email : userGoogle.email,loginType : "ga"}
    //     //login existing user
    //     let url = baseUrl+"/user/login";
    //     let data = {
    //       method: 'POST',
    //       credentials: 'same-origin',
    //       mode: 'same-origin',
    //       body: JSON.stringify(loginDetails),
    //       headers: {
    //         'Accept':       'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //     fetch(url,data)
    //     .then(userLogin => userLogin.json())
    //     .then(userLogin => { 
    //       console.log("user details-->",userLogin.message)
    //      // Alert.alert('Login success!!!');
    //        if(userLogin.status == 200) {
    //         console.log("User status --->",userLogin.message[0].id);
    //         AsyncStorage.setItem('userDetails', JSON.stringify(userLogin.message));
    //         Alert.alert('Success');
    //         navigate('Main')
    //         AsyncStorage.getItem('userDetails').then(res => {
    //           if (res !== null) {
    //             res = JSON.parse(res);
    //             console.log("user details",res);
    //             //resolve(true);
    //           } else {
    //             console.log("userdetails---->",res);
    //             //resolve(false);
    //           }
    //         })
    //         .catch(err => console.log(err));
    //       }     
    //       else 
    //         Alert.alert('Login Failed!!!');
    //      });
    //   }else{
    //     //register new user
    //     let registerDetails = {id : userGoogle.id,first_name : userGoogle.name,loginType : 'ga',email : userGoogle.email}
    //     let url = baseUrl+"/user/registerImplicit";
    //     let data = {
    //       method: 'POST',
    //       credentials: 'same-origin',
    //       mode: 'same-origin',
    //       body: JSON.stringify(registerDetails),
    //       headers: {
    //         'Accept':       'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //     fetch(url,data)
    //     .then(response => response.json())
    //     .then(response => { 
    //       console.log("user details-->",response.message)
    //        if(response.status == 200){  
    //         Alert.alert("success");
    
    //         navigate('Register1')
    //        }
    //        else 
    //         Alert.alert('User denied');
    //      });
    //   }

      
    // });
  } else {
    console.log("cancelled")
  }
} catch (e) {
  console.log("error", e)
}
  // console.log("login using google---");
  // const clientId = '463482139501-fme9dgs10h6brhll4nftl9lvfndda2nd.apps.googleusercontent.com'//'463482139501-ejj1f6ij24lst2tp9dj3avt5l9lrvlqg.apps.googleusercontent.com';
  // const { type, accessToken, userGoogle } = await Google.logInAsync({ clientId });
  let type = false;
  console.log("type--->",type);
  if (type === 'success') {
    // /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
    // console.log(user);
    // Alert.alert(JSON.stringify(user));
    // let getUserUrl = baseUrl+"/user/"+userGoogle.id;
          
    // Promise.all([fetch(getUserUrl)])
    // .then(([user]) => { 
    //   return Promise.all([user.json()]) 
    // })
    // .then(([user]) => {
    //   // set state in here
    //   if(user.message && user.message.length){
    //     let loginDetails = {email : userGoogle.email,loginType : "ga"}
    //     //login existing user
    //     let url = baseUrl+"/user/login";
    //     let data = {
    //       method: 'POST',
    //       credentials: 'same-origin',
    //       mode: 'same-origin',
    //       body: JSON.stringify(loginDetails),
    //       headers: {
    //         'Accept':       'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //     fetch(url,data)
    //     .then(userLogin => userLogin.json())
    //     .then(userLogin => { 
    //       console.log("user details-->",userLogin.message)
    //      // Alert.alert('Login success!!!');
    //        if(userLogin.status == 200) {
    //         console.log("User status --->",userLogin.message[0].id);
    //         AsyncStorage.setItem('userDetails', JSON.stringify(userLogin.message));
    //         Alert.alert('Success');
    //         navigate('Main')
    //         AsyncStorage.getItem('userDetails').then(res => {
    //           if (res !== null) {
    //             res = JSON.parse(res);
    //             console.log("user details",res);
    //             //resolve(true);
    //           } else {
    //             console.log("userdetails---->",res);
    //             //resolve(false);
    //           }
    //         })
    //         .catch(err => console.log(err));
    //       }     
    //       else 
    //         Alert.alert('Login Failed!!!');
    //      });
    //   }else{
    //     //register new user
    //     let registerDetails = {id : userGoogle.id,first_name : userGoogle.name,loginType : 'ga',email : userGoogle.email}
    //     let url = baseUrl+"/user/registerImplicit";
    //     let data = {
    //       method: 'POST',
    //       credentials: 'same-origin',
    //       mode: 'same-origin',
    //       body: JSON.stringify(registerDetails),
    //       headers: {
    //         'Accept':       'application/json',
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //     fetch(url,data)
    //     .then(response => response.json())
    //     .then(response => { 
    //       console.log("user details-->",response.message)
    //        if(response.status == 200){  
    //         Alert.alert("success");
    
    //         navigate('Register1')
    //        }
    //        else 
    //         Alert.alert('User denied');
    //      });
    //   }

      
    // });
    
  }
}

export default ({ navigation }) => (

      <View style={styles.container}>
       
      <View style={{marginTop:'25%'}}>
          <Image source={require('../../../assets/images/Signup_1-01.jpg')} style={{ height: 175, width: 153}}/>

     </View>
     <Text style={styles.font17}> DA-DING     </Text>
      
      <View>
      <TouchableOpacity
          style={styles.Facebook}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }>
 
            <Text style={{ marginTop: 10,
  fontSize: 20, marginLeft: 40, color: 'white'}}> Login with facebook </Text>
            
      </TouchableOpacity>

      </View>

      <View>
      <TouchableOpacity
          style={styles.Google}
          activeOpacity = { .5 }
      
          onPress={() => {
                 navigation.navigate("Dummy");
                }}   >
 
            <Text style={{ marginTop: 10,
  fontSize: 20, marginLeft: 40, color: 'white'}}> Login with Google </Text>
            
      </TouchableOpacity>


      </View>

      <View style = {styles.MainContainer}>
                
                <TouchableOpacity  style={{ marginTop:'7%',  height:100}}
                  onPress={() => {
                  navigation.navigate("Login");
                }} >
                <View>
                 <Image source={require('../../../assets/images/login.jpg')} style = {styles.ImageClass} />
                 <Text style={{paddingLeft: 20}}>Login </Text>
                 </View>
                </TouchableOpacity>
                {/* <Image source={require('../../../assets/images/line.jpg')} style ={{height: 65, marginTop: 65}} /> */}

                <View
                style={{
                borderLeftWidth: 2,
                borderLeftColor: 'black',
                height: 85,
                marginTop: 45,
                marginLeft: 25,
                marginRight:25
                }}
/>

                <TouchableOpacity style={{marginTop:'7%',height:100}}
                 onPress={() => {
                 navigation.navigate("Register");
                }}  >

                <Image source={require('../../../assets/images/reg.jpg')} style = {styles.ImageClass1} />
                <Text style={styles.center}>Register </Text>
                </TouchableOpacity>

             
            </View>

{/* 
            <TouchableOpacity  style={{ marginTop:'7%', backgroundColor:'black', height:100}}
                   onPress={() => {
                 navigation.navigate("Dummy");
                }}  >
  <Text>kdnvckdkvkdnv</Text>
                </TouchableOpacity> */}
    </View>
      

      
      
    );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300 
  },

  MainContainer: 
        {

            flexDirection: "row"

        },

  button: {
    
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor:'#00BCD4',
    width: 250,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  font17: {
    fontSize: 20,
    color: '#FEC107'
},

TextStyle:{
  color:'#fff',
  textAlign:'center',
  marginTop: 10,
  fontSize: 15
},

  login: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  ImageClass:
  {
      // Setting up image width.
      width: 80,
     
     
    
      // Setting up image height.
      height: 80

  },

  ImageClass1:
  {
      // Setting up image width.
      width: 80,
      right: 10,
     
      
      // Setting up image height.
      height: 80

  },
  Facebook: {
 
    marginTop:20,
    width: 250,
    height: 50,
    
    
    
    marginRight:20,
    backgroundColor:'#156ACA',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  Google: {
 
    marginTop:20,
    width: 250,
    height: 50,
  
    paddingBottom:15,
    
    marginRight:20,
    backgroundColor:'#ed3b3b',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
 
  TextStyle:{
      color:'#fff',
      textAlign:'center',
  },

 
});
