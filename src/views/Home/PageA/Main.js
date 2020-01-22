
import React from 'react';
// import { Ionicons } from '@expo/vector-icons';

//import Icon from 'react-native-vector-icons/MaterialIcons';
import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Button,AsyncStorage} from 'react-native';
  

import Dings from '../../../components/Dings'
import TrenDingers from '../../../components/TrenDingers'
import Topics from '../../../components/Topics'
import ChatScreen from '../../../screens/ChatScreen'

import Recommendations from '../../../components/Recommendations'
import { ToastAndroid} from 'react-native'
import { withNavigation } from 'react-navigation';
import UpdateScreen from '../../../screens/UpdateScreen';
var connectionItem,topicItem;
export default class HomeScreen extends React.Component {
 
  constructor(props) {
    super(props);
   this.baseUrl = "https://dading.herokuapp.com";
   //this.baseUrl = "http://192.168.0.106:3000";
   this.state = {};
    this.ownId = null
    this.education = null
    this.work = null
    this.industry = null

    this.state = {connection:[],user:[],callOther:false};
  }
// industry disena ok baghto
  otherProfile (userDetail) {
    const {navigate} = this.props.navigation;
    console.log("Storing in global storage----",userDetail)
    AsyncStorage.setItem('other_id', userDetail.id);
    AsyncStorage.setItem('other_name', userDetail.first_name);
    this.setState({other_id:userDetail.id});

      console.log("EDUCATION--->",this.education)
      console.log("work--->",this.work)
      console.log("industry--->",this.industry)
    
    //GGWP hmm zala ptkn 2 ch krto tu chukla tr sanmg malaok

    this.setState({printText:true});
    let getOtherUser = this.baseUrl+"/user/"+userDetail.id; 
    fetch(getOtherUser)// navin api call cha issue nahiye
    .then(response => response.json())
    .then(user => {
      console.log("user details-->", user.message);
      // Alert.alert('Login success!!!');
      if (user.status === 200) {
        console.log("User status --->", user.message);
        ToastAndroid.show("selected user is  "+userDetail.id, ToastAndroid.SHORT)
        navigate('UpdateScreen',{ other_id: userDetail.id, other_name: userDetail.first_name, 
          currentId: this.ownId , otherEducation: user.message[0].education, otherWork: user.message[0].work,otherIndustry: user.message[0].industry});
      }
    });
  }

  chat (userDetail) {
    const {navigate} = this.props.navigation;
    console.log("Storing in global storage----",userDetail)
    AsyncStorage.setItem('other_id', userDetail.id);
    ToastAndroid.show("selected user is  "+userDetail.id, ToastAndroid.SHORT)
    navigate('ChatScreen');

  }
  async componentDidMount() {
    
    Expo.Font.loadAsync({
           'Roboto': require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
         });
         //addConnection(this.state);
//          getTopicByuserName(1);
        AsyncStorage.getItem('userDetails').then(res => {
          if (res !== null) {
            res = JSON.parse(res);
            console.log("user details",res);
            let userId = res[0].id;
            this.industry = res[0].industry;
            this.work = res[0].work
            this.education = res[0].education;
            this.ownId = userId
            let getTopicsUrl = this.baseUrl+"/user/getTopicsByUserId/"+userId;
            let getRecommendation = this.baseUrl+"/user/getRecommendation/"+userId;
            let getTrenDingErs = this.baseUrl+"/user/getTrenDingers/";
            let mydingsUrl =this.baseUrl + "/user/myDings/"+userId;
            Promise.all([fetch(getTopicsUrl), fetch(getTrenDingErs), fetch(getRecommendation),fetch(mydingsUrl)])//, fetch(getRecommendation), fetch(getTrenDingErs)])
                .then(([getUserDetails,getTrenDingErsDetails,getRecommendationDetails,myDingDetails]) => { 
                    return Promise.all([getUserDetails.json(),getTrenDingErsDetails.json(),
                        getRecommendationDetails.json(),myDingDetails.json()]) 
                })
                .then(([getUserDetails,getTrenDingErsDetails,getRecommendationDetails,myDingDetails]) => {
                // set state in here
                console.log("getUserDetails---,",getUserDetails);
                this.setState({
                    trendinger: getTrenDingErsDetails.message,
                    recommendation : getRecommendationDetails.message,
                    topic : getUserDetails.message,
                    dings : myDingDetails.message,
                });
                console.log("user details->",this.state);
                });
    
            //resolve(true);
          } else {
            console.log("userdetails---->",res);
            //resolve(false);
          }
        })
        .catch(err => console.log(err));
}


  render() {
    return (
    <ScrollView>
    <View style = {styles.container}>
      <View  style = {styles.box}>
      <View style={{flexDirection: "row", marginLeft: '40%'}}>
        
        <Text style = {styles.header}>
            Dings
        </Text>

        <Image  source={require('../../../images/ff.png')} style={{marginLeft: '60%', marginTop:'2%'}}   />
  
        </View>

        <Text style = {styles.tagline}>
           Let's get dinging
        </Text>
  

          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                   {this.state.dings && this.state.dings.map((dingsEle, index) => <TouchableOpacity 
                   onPress = {() => {this.chat(dingsEle)} }> 
                   <Dings
                  userId = {dingsEle.id} firstName={dingsEle.first_name}  interest ={dingsEle.name} topic = "t2"
                      />
                      </TouchableOpacity>)}
                  {/* <Dings interest = "football" topic = "t1" connectionResult = {this.state}/>
                  <Dings interest = "Cricket" topic = "t2"/>
                  <Dings interest = "Tennis" topic = "t3"/>
                  <Dings interest = "football" topic = "t4"/>
                  <Dings interest = "football" topic = "t1"/>
                  <Dings interest = "football" topic = "t1"/> */}
            </ScrollView>

            {/* <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Dings interest = "football" topic = "t1" connectionResult = {this.state}/>
                  <Dings interest = "Cricket" topic = "t2"/>
                  <Dings interest = "Tennis" topic = "t3"/>
            <Dings interest = "football" topic = "t4"/>
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t1"/>
              </ScrollView> */}
      </View>
  {this.state.topic &&
      <View  style = {styles.box}>
      <View style={{flexDirection:'row',marginLeft: '40%'}}>
        <Text style = {styles.header}>
          My Topics
        </Text>
        <Image  source={require('../../../images/ff.png')} style={{marginLeft: '45%'}}   />
  
        </View>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {this.state.topic && this.state.topic.map((topicsEle, index) => topicsEle.name && <Topics
                  topicType = {topicsEle.name}
                      />)}
                  {/* <Topics topicType ="football" />
                  <Topics topicType ="cricket" />
                  <Topics topicType ="painting" />
                  <Topics topicType ="football" />
                  <Topics topicType ="game" /> */}
            </ScrollView>
      </View>
  }
    {this.state.recommendation &&
          <View  style = {styles.box}>
            <Text style = {styles.header}>
              Recommendations!
            </Text>
              <ScrollView contentContainerStyle={styles.scrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
              {this.state.recommendation && this.state.recommendation.map((recommendationEle, index) => recommendationEle.sub_topic && <Topics
                  topicType = {recommendationEle.sub_topic}
                      />)}
              {/* <Topics topicType ="football" />
              <Topics topicType ="cricket" />
              <Topics topicType ="painting" />
              <Topics topicType ="football" />
              <Topics topicType ="game" /> */}
                </ScrollView>
          </View>
    }

    {this.state.trendinger &&
      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Tren-ding-ers!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {/* {this.state.trendinger && this.state.trendinger.map((trendingerEle, index) => <Dings
                  trendingerType = {trendingerEle.sub_topic} topic = "t2" interest = "football"
                      />)} */}

        {this.state.trendinger && this.state.trendinger.map((trendingerEle, index) => trendingerEle && <TouchableOpacity 
                   onPress = {() => {this.otherProfile(trendingerEle)} }> 
                  {/* {this.state.printText && 
                  <OtherProfileScreen other= {this.state.other_id}/>}  */}

                   <TrenDingers
              trendingerType = {trendingerEle.sub_topic}  firstName={trendingerEle.first_name}  topic = "t2" interest = "football"
                      />
                      </TouchableOpacity>)}




          {/* <Dings interest = "football" topic = "t1"/>
          <Dings interest = "football" topic = "t2"/>
          <Dings interest = "football" topic = "t3"/>
          <Dings interest = "football" topic = "t4"/>
          <Dings interest = "football" topic = "t1"/>
          <Dings interest = "football" topic = "t1"/> */}
            </ScrollView>

            {/* <ScrollView contentContainerStyle={styles.scrollContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t2"/>
            <Dings interest = "football" topic = "t3"/>
            <Dings interest = "football" topic = "t4"/>
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t1"/>
              </ScrollView> */}
      </View>
    }

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
  },
  ding: {
    padding: 20
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
  },
  staticContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap'      //// allow multiple rows
  },
  header: {
    fontFamily:'Roboto',
    fontStyle:'normal',
    fontSize:20,
    textAlign: 'center',
   
    
  },
  box: {
    backgroundColor: "white",
    marginBottom: 4,
    padding: 6
  },
  tagline: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign:'center',
    fontStyle: 'italic',
    color: 'grey'
  }


});
