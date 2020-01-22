import React, { Component } from 'react';
import cloneDeep from 'lodash/cloneDeep';

import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity,TextInput, Button,AsyncStorage} from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
// import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@ant-design/react-native';
import { withNavigation } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';

var userDetailsGlobal = [];
class App extends Component
{
  constructor(props) {
    super(props);
   this.baseUrl = "https://dading.herokuapp.com";
   //this.baseUrl = "http://192.168.0.106:3000";

    this.state = {
      "userid":"",
      "first_name" : "",
      "last_name" : "",
      "gender": "",
      "dob":"",
      "phone" : "",
      "profile_image" : "",
      "work" : "",
      "education" : "" ,
      "industry" : "",
      "name" : "",
      "topicOne" :"",
      "topicThree" : "",
  }
}
  
   async addTopics (topics,navigate ) {
    console.log("indside add topic");

    const pArray = 
    topics.map(async topic => {
      let url = this.baseUrl+"/user/topics";
            let data = {
              method: 'POST',
              credentials: 'same-origin',
              mode: 'same-origin',
              body: JSON.stringify({user_id : topic.userid,name : topic.name}),
              headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json'
              }
            }
      const response = await fetch(url,data);
      return response.json();
    });
    const users = await Promise.all(pArray);
    console.log("navigating to main");
    navigate('Main');
    return users;
  }

  onProfile() {
    const loginDetails = this.state;
    const {navigate} = this.props.navigation;

    AsyncStorage.getItem('userDetails').then(res => {
      if (!res) {
        //implicit
          console.log("back->",res);
          AsyncStorage.setItem('back', "false");
          navigate('Start'); /////////////////////////////////////// he apn te magchya page la yenyasathi kelela register screen mdhe
          resolve(true);
      }else{
        res = JSON.parse(res);
        loginDetails.userid = res[0].id;
        console.log("Details are-->",loginDetails);
        const oriLoginDetails = cloneDeep(this.state);

        let finalObj = loginDetails;
        delete finalObj.name;
        delete finalObj.topicOne;
        delete finalObj.topicThree;
        userDetailsGlobal = res;
        let url = this.baseUrl+"/user/update";
        let data = {
          method: 'PUT',
          credentials: 'same-origin',
          mode: 'same-origin',
          body: JSON.stringify(finalObj),
          headers: {
            'Accept':       'application/json',
            'Content-Type': 'application/json'
          }
        }
        fetch(url,data)
        .then(response => response.json())
        .then(user => { 
          //console.log("user details-->",user.message)
           if(user.status == 200){
            let topicArr = [];
            topicArr.push({userid : loginDetails.userid,name : oriLoginDetails.name})
            topicArr.push({userid : loginDetails.userid,name : oriLoginDetails.topicOne})
            topicArr.push({userid : loginDetails.userid,name : oriLoginDetails.topicThree})
            console.log("topicarr--->",topicArr);
            this.addTopics(topicArr,navigate);
            //loginDetails.userid,name : loginDetails.topic_name
           }
          else 
            Alert.alert('User denied');
         });
      }
    })
    .catch(err => console.log(err));
    //Alert.alert('Credentials', `${username} + ${password}`);
  }

  async componentDidMount() {
        
    // Expo.Font.loadAsync({
    //        'Roboto': require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
    //      });
         //addConnection(this.state);
//          getTopicByuserName(1);
        AsyncStorage.getItem('userDetails').then(res => {
            if (res !== null) {
            res = JSON.parse(res);
            //this.userDetails= res;
            this.ownId = res[0].id;
            console.log("user id",res[0].id);
            //resolve(true);
            } else {
            console.log("user id---->",res[0].id);
            //resolve(false);
            }
        })
        .catch(err => console.log(err));
        AsyncStorage.getItem('other_id').then(res => {
           // let userId = '1';
            if (res !== null) {
                this.userId = res;
                console.log("user details are here--->",res);
                ToastAndroid.show("other user inside other profiler  "+this.userId, ToastAndroid.SHORT)

                //resolve(true);
            } 
            })
            .catch(err => console.log(err)); 
    }
  render()
  {
    let data = [{
      value: 'Banglore',
    }, {
      value: 'Pune',
    }, {
      value: 'Mumbai',
    }];
    return(
      <ScrollView>
      <View  style= {{ marginTop: 20}}>

      <Text style={{fontSize: 20, color: 'black',marginLeft: 15}}>
      Create Your Profile
                </Text>
       
       <View style= {{ marginTop: 40, marginLeft: 140}}>
        <PercentageCircle radius={55} percent={10} color={"#3498db"}>
        <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}}
             style={{width: 150, height: 150, borderRadius: 150/2}} />       
              </PercentageCircle>  
      </View>

{/* 
      <View style={styles.MainContainer}>
       
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }>
 
            <Text style={styles.TextStyle}> Road Trips in pune </Text>
            
      </TouchableOpacity>

        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }>
 
            <Text style={styles.TextStyle}> Data Analytics </Text>
            
      </TouchableOpacity>

      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={ this.ButtonClickCheckFunction }>
 
            <Text style={styles.TextStyle}> Masters is US </Text>
            
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop:50}}>
      <Ionicons 
                    name= "md-add-circle"  size={30} color="red"/>
 </TouchableOpacity>

      </View> */}

      <View style={{marginLeft: '4%', marginTop: 10}}>
      
      <Text style={{fontSize: 18, color: 'grey'}}>
                    Name
                </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20,}}>
                
                <TextInput  
                 defaultValue={userDetailsGlobal.length?userDetailsGlobal[0].first_name:''} 
                 value={this.state.first_name}
          onChangeText={(first_name) => this.setState({ first_name })}
                placeholder='Name' 
                  style={{width: '100%'}}
                />
{/* 
                <TouchableOpacity style={{marginLeft:'70%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>
             

          <Text style={{fontSize: 18, color: 'grey'}}>
                    Gender
                </Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', 
                marginBottom:20}}>
                
                <TextInput placeholder='Gender'
                 value={this.state.gender}
          onChangeText={(gender) => this.setState({ gender })}
          style={{width: '80%'}} />

                <TouchableOpacity style={{ color:'red'}}>
                <Icon 
                    name="ios-female" size={20}              
                    />
                </TouchableOpacity>
                <View
                style={{
                borderLeftWidth: 1,
                borderLeftColor: 'black',
                marginLeft: 5,
                marginRight:5,
                marginBottom:7
                }}
              />
                <TouchableOpacity style={{  color:'red'}}>
                <Icon 
                    name="ios-male" size={20}                    
                    />
                </TouchableOpacity>
          </View>

          <Text style={{fontSize: 18, color: 'grey'}}>
                    Date Of Birth
                </Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput placeholder='DOB' 
                   value={this.state.dob}
          onChangeText={(dob) => this.setState({ dob })}
          style={{width: '100%'}}
                />

                {/* <TouchableOpacity style={{marginLeft:'79%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>

          <Text style={{fontSize: 18, color: 'grey'}}>
                    Phone number
                </Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput placeholder='Number' 
                   value={this.state.phone}
          onChangeText={(phone) => this.setState({ phone })}
          style={{width: '100%'}}
          />
                {/* <TouchableOpacity style={{marginLeft:'73%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>

          {/* <Text style={{fontSize: 18, color: 'grey'}}>
                    E-mail
                </Text>
       <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput placeholder='EMAIL'
                 value={this.state.email}
          onChangeText={(email) => this.setState({ email })} />

                <TouchableOpacity style={{marginLeft:'75%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity>
          </View> */}

          
      <Text style={{fontSize: 18, color: 'grey'}}>
      Education
                </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput  placeholder='Education'
                  value={this.state.education}
          onChangeText={(education) => this.setState({ education })} 
          style={{width: '100%'}}
          />

                {/* <TouchableOpacity style={{marginLeft:'70%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>

          
      <Text style={{fontSize: 18, color: 'grey'}}>
      Work
                </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput  placeholder='Work'
                 value={this.state.work}
          onChangeText={(work) => this.setState({ work })} 
          style={{width: '100%'}}
          />

                {/* <TouchableOpacity style={{marginLeft:'77%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>

          
      <Text style={{fontSize: 18, color: 'grey'}}>
                    Industry
                </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput  placeholder='Industry' 
                   value={this.state.industry}
          onChangeText={(industry) => this.setState({ industry })}
          style={{width: '100%'}}
                />

                {/* <TouchableOpacity style={{marginLeft:'73%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>

          <Text style={{fontSize: 18, color: 'grey'}}>
                    Topic 
                </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput  placeholder='Topic' 
                   value={this.state.name}
          onChangeText={(name) => this.setState({ name })}
          style={{width: '100%'}}/>

                {/* <TouchableOpacity style={{marginLeft:'73%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>

          
          <Text style={{fontSize: 18, color: 'grey'}}>
                    Topic  2
                </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput  placeholder='Topic' 
                   value={this.state.topicOne}
          onChangeText={(topicOne) => this.setState({ topicOne })}
          style={{width: '100%'}} />

                {/* <TouchableOpacity style={{marginLeft:'73%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>



          <Text style={{fontSize: 18, color: 'grey'}}>
                    Topic  3
                </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1,flex:1, flexDirection:'row', marginBottom:20}}>
                
                <TextInput  placeholder='Topic' 
                   value={this.state.topicThree}
          onChangeText={(topicThree) => this.setState({ topicThree })}
          style={{width: '100%'}}/>

                {/* <TouchableOpacity style={{marginLeft:'73%', color:'red'}}>
                  <Text style={{color:'red'}}>EDIT</Text>
                </TouchableOpacity> */}
          </View>


     
        


          <Text style={{fontSize: 18, color: 'grey', marginLeft: '35%'}}>
                    Certificates
                </Text>
          <View style={styles.TextViewStyle}>
 
            {/* <Text style={styles.TextStyle}> Text With Rounded Border. </Text> */}
            <TouchableOpacity >
               <Icon 
                    name= "md-add-circle"  size={30} color="red"/>
            </TouchableOpacity>

          </View>  
                
                <View  />
                <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 }  onPress={this.onProfile.bind(this)}>
 
 <Text style={styles.TextStyle}> DONE </Text>

</TouchableOpacity>
                 
                 </View>
      </View>
      </ScrollView>


    );
  }
}
 
const styles = StyleSheet.create(
{
    Container: {
    marginTop : 40,
    marginLeft : 20,
    flex: 1,    
  },

  image: {
    marginTop : 40,
    marginLeft : 100,
    flex: 1,    
  },

  MainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'flex-start',
    
    marginLeft:10
    
  },
 
  SubmitButtonStyle: {
 
    marginTop:40,
    width: '25%',
    height: 50,
    paddingTop:15,
    paddingBottom:15,
    
    marginRight:20,
    backgroundColor:'#FEC107',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
 
  TextStyle:{

      color:'#fff',
      justifyContent:'center',
  },
  TextViewStyle:
    {
      marginLeft:30,
      height:100,
      marginTop:30,
       borderWidth: 1, 
       borderRadius: 10,
       borderColor: '#E91E63',
       width: '80%',
       padding: 5,
       backgroundColor: '#fff'
 
    },
 
    TextStyle:
    {
        textAlign: 'center',
        color: '#000',
        padding: 10
    },
    ButtonStyle: {
    
      marginTop:20,
      marginLeft: '29%',
      height: 50,
      width: 180,
      backgroundColor:'#FEC107',
      borderRadius:5,
      marginBottom: 10
    },
   
    TextStyle:{
        color:'#fff',
        marginTop:'10%',
        textAlign:'center',
    }
});

export default withNavigation(App);