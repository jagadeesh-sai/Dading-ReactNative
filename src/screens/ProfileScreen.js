import React from 'react';
import {Image,TouchableOpacity,Modal,ScrollView,StyleSheet,Text,TextInput,View,AsyncStorage,TouchableHighlight,ToolbarAndroid} from 'react-native';
// import {Icon, AuthSession} from '@ant-design/react-native';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-ionicons';
import { Icon } from '@ant-design/react-native';
import Touchable from 'react-native-platform-touchable';
import ProfilePic from '../profile/profilePic';
import ComfortLevel from '../profile/comfort_level_icon';
import EditIcon from '../profile/edit_icon';
import AddTopicsIcon from '../profile/add_topics_icon';
import ProgressBar from '../components/ProgressBar'
import PieChartCustom from '../profile/pie_chart';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Connections from '../components/Connections'
import Topics from '../components/Topics'
import AllTopics from './AllTopics';
import Achievments from '../components/Achievement'

import CustomHeader from "../components/CustomHeader";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, Header } from 'react-native-elements';

var shd1 = require('../assets/icons/asset2.png');
var shd2 = require('../assets/icons/h1.png');
var shd3 = require('../assets/icons/h3.png');

  

export default class ProfileScreen extends React.Component{
    constructor(props) {
        super(props);
       this.baseUrl = "https://dading.herokuapp.com";
       // this.baseUrl = "http://192.168.0.106:3000";
        this.state = {
            connection:[],
            user:[],
            modalVisible: false
        };
      }

      toggleModal(visible) {
        this.setState({ modalVisible: visible });
      }
    
      async componentDidMount() {
        
        // Expo.Font.loadAsync({
        //        'Roboto': require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
        //      });
             //addConnection(this.state);
    //          getTopicByuserName(1);this.userId = res[0].id;
            AsyncStorage.getItem('userDetails').then(res => {
                if (res !== null) {
                res = JSON.parse(res);
                console.log("user details",res);
                let userId =  res[0].id;
                //  let getTopicsUrl = this.baseUrl+"/user/getTopicsByUserId/"+userId;
                //  let getRecommendation = this.baseUrl+"/user/getRecommendation/"+userId;
               
                let getUserDetails = this.baseUrl+"/user/"+userId;
                let getAchievements = this.baseUrl+"/user/getAchievementByUserId/"+userId;
                let getRecommendation = this.baseUrl+"/user/getRecommendation/"+userId;
                // let getAchievement = this.baseUrl+"/user/getAchievementByUserId/"+userId;
                
                // Promise.all([fetch(getTopicsUrl), fetch(getRecommendation), fetch(getTrenDingErs)])
                // .then(([topics, recommendations,trendingers]) => { 
                //    return Promise.all([topics.json(), recommendations.json(), trendingers.json()]) 
                // })
                // .then(([topics, recommendations,trendingers]) => {
                Promise.all([fetch(getUserDetails), fetch(getAchievements), fetch(getRecommendation)])//, fetch(getRecommendation), fetch(getTrenDingErs)])
                .then(([getUserDetails,getAchievementDetails,getRecommendationDetails]) => { 
                    return Promise.all([getUserDetails.json(),getAchievementDetails.json(),
                        getRecommendationDetails.json()]) 
                })
                .then(([getUserDetails,getAchievementDetails,getRecommendationDetails]) => {
                // set state in here
                console.log("getUserDetails---,",getUserDetails);
                this.setState({
                
                    achievement: getAchievementDetails.message,
                    recommendation : getRecommendationDetails.message,
                    work : getUserDetails.message[0].work,
                    education : getUserDetails.message[0].education,
                    industry:  getUserDetails.message[0].industry,
                    name : getUserDetails.message[0].first_name,
                    lname : getUserDetails.message[0].last_name
                    
                });
                console.log("user details->",this.state.work);
                console.log("THIS IS SOMETHING ---->",this.state.work)
                });
    
                //resolve(true);
                } else {
                console.log("userdetails---->",res);
                //resolve(false);
                }
            })
            .catch(err => console.log(err));
             
    }
    render(){
        return (
            <ScrollView>
            <View style={styles.container}>
            <View style={{  backgroundColor: "#FEC107" }}>
        <CustomHeader navigation={this.props.navigation} />
       
            </View>
                <View style={styles.container1}>
                    <View style={styles.subcontainer1}>
                        <ProfilePic/>
                        {
                            this.state.name &&
            
                        <Text style={{marginTop: 20}}>
                        {this.state.name}
                        </Text>
                        }
                        {
                            this.state.lname &&
            
                        <Text style={{marginTop: 18}}>
                        {this.state.lname}
                        </Text>
                        }
                        <TouchableOpacity style={{marginTop:'25%'}} >
                         <Image source={require('../images/coin.png')}    />
                        </TouchableOpacity>  

                    </View>
                 
                    <View style={styles.subcontainer2}>
                        <Text style={{marginTop: 45, marginLeft: 10, fontSize: 12, color: "grey"}}>
                       Work
                        </Text>
                       
                        <TextInput style={styles.textinput}  value={this.state.work}
                         editable={false}/>
                      
                        <Text style={styles.text1}>
                   Education
                        </Text>
                        <TextInput style={styles.textinput}  value={this.state.education} editable={false}/>
                        <Text style={styles.text1}>
                     Industry
                        </Text>
                        <TextInput style={styles.textinput} value={this.state.industry} editable={false}/>
                        <View style={{paddingBottom: '3%'}}>
                        <View style={styles.subsubcontainer3}>
                            <View style={styles.iconEdit}>
                                
                                <View>
                                    {/* style={{paddingTop: -10, paddingLeft: 5}} */}
                                    <TouchableOpacity>
                                    <EditIcon />
                                    <Text>Edit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        </View>
                    </View>
                
                    <View style={styles.newsubcontainer}>
                        <View style={styles.subsubcontainer}>
                        <View style={{marginTop: '15%'}}  >
                        <Image source={require('../images/comfort.jpg')}  style={{width:30, height:30}}  />
                            <View >
                                <Text styles={{ paddingLeft:5}} >Comfort {'\n'} Level</Text>
                            </View>
                            
                        </View>
                        <View style={{ marginTop: '15%'}}  >
                        <Image source={require('../images/certificate.jpg')}   style={{width:30, height:30}}   />
                            <View >
                                <Text  styles={styles.font10grey}>Certificates</Text>
                            </View>
                        </View>
                        </View>
                        
                      
                        <View style={styles.subsubcontainer3}>
                            <View style={styles.iconEdit3}>
                                <TouchableOpacity>
                                    
                                    <AddTopicsIcon/>
                                    <Text  styles={styles.font10grey}>Add Topics</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={styles.subcontainer4}>
                        <Text style={styles.font17}>Topics</Text>
                        <View style={styles.subsubcontainer4}>
                                <View style={styles.subsubsubcontainer2}>
                                <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                                    <Text>SEE ALL</Text>
                                </TouchableHighlight>
                                </View>
                        </View>
                        <AllTopics modalVisible={this.state.modalVisible} />
                    </View>
                    <View style={styles.subcontainer5}>
                        <PieChartCustom/>
                    </View>
                </View>
                
                
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')} > 
                <View style={styles.container3}>
                    <View >
                    <View style={styles.scrollContent}> 

                    <Text style={styles.font17}>Topic_Name</Text>
                    <View style={styles.starIcon}>
                    <Ionicons
                    name={'md-star'}
                    value={'ddd'}
                    color = "#FFC006"
                    size={30}>
                    </Ionicons>
                    <Text style={styles.starText}>45</Text>
                    </View>
                    <Image source={shd2} style={{marginLeft: 5, height: 20, width: 23}}/>
                    </View>
                    <Text style={{marginLeft:12, marginBottom: 20}}> 12 Conversations</Text>

                    <View style={styles.scrollContent}>
                    <View style={{marginLeft: '10%'}}> 
                        <Text style={styles.textstyle}>Novice</Text> 
                        <Image source={shd3} style={{marginLeft: 5, height: 20, width: 23}} />
                    </View>
                    <ProgressBar />
                    <View> 
                        <Text style={styles.textstyle}>Amateur</Text> 
                        <Image source={shd2} style={{marginRight: '10%', height: 20, width: 23}} />
                    </View>
                    </View>
                    <View style={{marginLeft:'60%'}}>
                    <Text style={styles.textstyle}>12/100 Conversations Rating >= 4</Text>
                    </View>

                    </View>
                </View>
            </TouchableOpacity>
            
            {this.state.achievement && 
            <View style={{backgroundColor: 'white'}}>
            <View style={{marginLeft:12}}>
            <Text style = {styles.font17}>
						Achievments!
						</Text>
            <View style = {styles.MainContainer}>

            {this.state.achievement && this.state.achievement.map((achievementEle, index) => <Achievments
              achievementType = {achievementEle.name}
                      />)}
                              
            </View>
            </View>
            </View>
            }
            <View style={styles.separator} />



            <View >
      
              <View style={{backgroundColor: 'white'}}>
                     <View style={styles.subcontainer4}>
                        <Text style={styles.font17_4}>Top Connections</Text>
                        <View style={styles.subsubcontainer4}>
                                <View style={styles.subsubsubcontainer2}>
                                    <Text>SEE ALL</Text>
                                </View>
                        </View>
                    </View>
                      <Connections />
                      <Connections />                    
                </View>
          </View>
    
        
          {this.state.recommendation &&
          <View style={{backgroundColor: 'white'}}>
        <Text style = {styles.font17}>
          Recommended Topics!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
            {this.state.recommendation && this.state.recommendation.map((recommendationEle, index) => <Topics
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
      </View>
     </ScrollView>
        );     
    }
}

const styles = StyleSheet.create({
    container:{
        
        flexDirection: "column",
        backgroundColor: "#c0c0c0",
    },
    container1:{
        borderWidth: 1,
        backgroundColor: "white",
        marginLeft:'-1%',
        borderColor: "#c0c0c0",
        flexDirection: "row"
    },
    container2:{
        borderWidth: 1,
        backgroundColor: "white",
        marginTop: 2,
        height: 350,
        borderColor: "#c0c0c0",
        padding: 10
    },
    container3:{
        borderWidth: 2,
        backgroundColor: "white",
        marginTop: 2,
        height: 200,
        borderColor: "#c0c0c0",
        padding: 10
    },
   
    subcontainer1:{
        width: 150,
        alignItems: "center",
        flexDirection: "column"
    },
    subcontainer2:{
        width: 150,
        flexDirection: "column",
        marginLeft:'-5%'
    },
    subcontainer3:{
        height: 100,
        flexDirection: "row"
    },
    subcontainer4: {
        flexDirection: "row",
        padding:12
    },
    subcontainer5: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 20
    },
    profilePic: {
        marginTop: 100
    },
    text1:{
        marginTop: 10,
        marginLeft: 10,
        fontSize: 12,
        color: "grey"
    },
    textinput:{
        marginLeft: 10,
        borderBottomColor: '#b0b0b0',
        borderBottomWidth: 1,
        width: 130
    },
    subsubcontainer:{
        marginLeft:5,
        marginTop: 80,
        flex: 1,
        
    },
    subsubcontainer1:{
        marginLeft:5,
        marginTop: 50,
        flex: 1,
        flexDirection: "row"
    },
    subsubcontainer2:{
        flexDirection: "row",
        height: 50,
        marginTop: 30
    },
    subsubcontainer3:{
        marginTop: 50,
        marginLeft: 15,
        justifyContent:'flex-end'
    },
    subsubcontainer4:{
        position: "absolute",
        right: 6
    },
    font10: {
        fontSize: 10,
        marginTop: 3
    },
    font17: {
        fontSize: 17,
        backgroundColor:'white',
        marginLeft:12
    },
    font17_4: {
        fontSize: 17,
        backgroundColor:'white',
      
    },
    font17_2: {
        fontSize: 17,
        marginTop: 5
    },
    font10grey: {
        fontSize: 10,
        color: '#808080'    
        
    },
    subsubsubcontainer1: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    subsubsubcontainer2:{
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 1,
        padding: 5,
        flex:1,
        alignSelf:'flex-end'
    },
    greyWall:{
        width: 5,
        backgroundColor: "grey",
        marginLeft: 10,
        marginRight: 10
    },
    right: {
        flexDirection:'row',
        // marginLeft: 50,
        backgroundColor: "white",       
        padding: 10,        
        marginTop: 5,
        width: 'auto'       
      },
      left: {
        borderWidth: 1,
        borderRadius: 2,
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 1,
        padding: 5,
        marginLeft:wp('32%'),
        fontSize: 17
      },

      iconEdit: {
        paddingLeft:50,
       
        paddingTop: 0
      },
      iconEdit1: {
        
        flexDirection:'row',
        paddingTop: 0
      },
      iconEdit3: {
        marginLeft:'-10%',
       paddingBottom: '8%'
      },

      addIconTopics: {
        // flexDirection:'row',
        // paddingRight: 10,
        // // marginLeft: 50,   
        // bottom: 10,  
        // fontSize: 6
        marginTop: '-10%'
      },
      MainContainer: 
        {

           marginLeft: '5%',
            marginTop: 10,
            backgroundColor: "white",
            height: 100,
            borderColor: "#c0c0c0",
            flex: 1,
            flexDirection: "row"

        },

        ImageClass:
        {
            // Setting up image width.
            width: 50,

            // Setting up image height.
            height: 50,
            marginLeft:'10%'

        },
        scrollContent: {
            flexDirection: 'row',   // arrange posters in rows
          },
          star: {
            marginTop: -6
            
          },

          newsubcontainer:{
            width: 150,
            marginLeft:'1%',
            flexDirection: "column",
            alignItems: 'flex-start',
            marginTop:'-15%',
        },

        separator: {
         
            borderWidth: 2,
            borderColor: '#DCDCDC',
          },
          circle:{
            height: 40,
            width: 40,
            borderRadius: 20,
            borderColor: "red",
            borderWidth: 1,
            
        },
        createIcon: {
            position: 'absolute',
            top: 4,
            left: 8
        },
        textstyle:{
            fontSize:12, 
            paddingBottom: 4
        },
        starIcon: {
            position: 'relative',
            textAlign: 'center',
            top: -5
        },
        starText: {
            fontSize: 8,
            color: '#000',
            left: '50%',
            marginLeft: -5,
            top: '50%',
            marginTop: -5,
            position: 'absolute'
        },
        modal: {
            flex: 1,
            marginTop: -20
         },
         ModalHeader: {
             backgroundColor: '#fec107',
             padding: 10,
             textAlign: 'center',
             position: 'relative'
         },
         ModalHeaderText: {
            fontSize: 20
         },
         ModalClose: {
             position: 'absolute',
             right: 0,
             top: -30,
             zIndex: 100
         },
         topicList: {
             borderBottomWidth: 1,
             borderBottomColor: '#ccc',
             paddingTop: 10,
             paddingBottom: 10
         }
});

