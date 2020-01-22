import React, { Component } from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ant-design/react-native';
import Touchable from 'react-native-platform-touchable';

import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry, Button} from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Dings from '../components/Dings'
import Topics from '../components/Topics'
import Recommendations from '../components/Recommendations'
//import {navigation} from 'react-native-navigation';
import { createStackNavigator } from 'react-navigation'; 
import CustomHeader from "../components/CustomHeader";
import HomeScreen from './HomeScreen'
import { Container, Content, Card, CardItem, Thumbnail } from 'native-base';
import MyTopics from '../components/MyTopics'




class MainActivity extends Component {

  componentDidMount() {
    
    Expo.Font.loadAsync({
           'Roboto': require('../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
         });
    
       }
    constructor(props) {
    super(props);
    this.baseUrl = "https://dading.herokuapp.com";
   // this.baseUrl = "http://192.168.0.106:3000";

    this.state = {connection:[],user:[]};
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
                console.log("user details",res);
                let userId = res[0].id;
                let getTopicsUrl = this.baseUrl+"/user/getTopicsByUserId/"+userId;
                let getRecommendation = this.baseUrl+"/user/getRecommendation/"+userId;
               
    
                Promise.all([fetch(getTopicsUrl), fetch(getRecommendation)])
                .then(([topics, recommendations,trendingers]) => { 
                  return Promise.all([topics.json(), recommendations.json()]) 
                })
                .then(([topics, recommendations]) => {
                // set state in here
                  this.setState({
                    topic: topics.message,
                    recommendation : recommendations.message,
                  
                  });
                  console.log("SOMETHING IS HERE----->", recommendations.message)
                });
                //resolve(true);
              } else {
                console.log("userdetails---->",res);
                //resolve(false);
              }
            })
            .catch(err => console.log(err));
    }
 
static navigationOptions =
 {
    // title: 'MainActivity',
    header: null,
 };

 FunctionToOpenSecondActivity = () =>
 {
    this.props.navigation.navigate('Second');
    
 }

 FunctionToOpenThirdActivity = () =>
 {
    this.props.navigation.navigate('Third');
    
 }

 render()
 {
    return(
        
        <ScrollView>
        <View style = {styles.container}>
        <View style={{ flex: 1, backgroundColor: "#FEC107" }}>
            <CustomHeader navigation={this.props.navigation} />
          </View>
    
          <View  style = {styles.box}>
            <Text style = {styles.header}>
              Tren-ding Topics
            </Text>
              <ScrollView contentContainerStyle={styles.scrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
                  <TouchableOpacity onPress = { this.FunctionToOpenSecondActivity } > 
                   <Topics 
                    topicType ="football"   />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.FunctionToOpenThirdActivity } > 
                   <Topics 
                    topicType ="football"   />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress = { this.FunctionToOpenThirdActivity } > 
                   <Topics 
                    topicType ="football"   />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.FunctionToOpenThirdActivity } > 
                   <Topics 
                    topicType ="football"   />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { this.FunctionToOpenThirdActivity } > 
                   <Topics 
                    topicType ="football"   />
                    </TouchableOpacity> */}
                </ScrollView>
          </View>
          {this.state.recommendation &&
          <View  style = {styles.box}>
            <Text style = {styles.header}>
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
          {this.state.topic && 
           <View  style = {styles.mdhe}>
            <Text style = {styles.header2}>
              All Topics!
            </Text>
              <ScrollView contentContainerStyle={styles.scrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}>
                  {this.state.topic && this.state.topic.map((topicsEle, index) => <MyTopics
                  topicType = {topicsEle.name}
                      />)}
              {/* <MyTopics topicType ="football" />
              <MyTopics topicType ="cricket" />
              <MyTopics topicType ="painting" /> */}
              
                </ScrollView>
          </View> 
          }
          </View>
          </ScrollView>
        );
      }
   }

/***************************************************************************************/
class SecondActivity extends Component
{
 static navigationOptions =
 {
    //  title: 'ThirdActivity',
    headerStyle: {
      backgroundColor: '#FEC107',
    },
    headerTintColor: '#fff'
 };

 render()
 {
    return(
    

            <Container>
                <Content>
                <Text style={{fontSize:14, fontWeight:'bold', textAlign:'center',
                     paddingBottom:'5%',
                     paddingTop:'5%'}}>Languages</Text>

                    <Card>

               
                        <CardItem button onPress =  {() => this.FunctionToOpenThirdActivity} style={{paddingBottom:'10%'}}>
                       
                            <Thumbnail source={require('../images/coin.png')} />
                            <Text style={{marginLeft:'15%', fontWeight:'bold', fontSize:18}}>Indian Languages</Text>
                            <Icon
                            name={'ios-arrow-forward'}
                            size={40}
                            style={{marginLeft:'20%'}} />
                        </CardItem>

                        
                   </Card>

                   <Card>

               
<CardItem button onPress =  {() => this.FunctionToOpenThirdActivity} style={{paddingBottom:'10%'}}>

    <Thumbnail source={require('../images/coin.png')} />
    <Text style={{marginLeft:'15%', fontWeight:'bold', fontSize:18}}>Indian Languages</Text>
    <Icon
    name={'ios-arrow-forward'}
    size={40}
    style={{marginLeft:'20%'}} />
</CardItem>


</Card>

<Card>

               
<CardItem button onPress =  {() => this.FunctionToOpenThirdActivity} style={{paddingBottom:'10%'}}>

    <Thumbnail source={require('../images/coin.png')} />
    <Text style={{marginLeft:'15%', fontWeight:'bold', fontSize:18}}>Indian Languages</Text>
    <Icon
    name={'ios-arrow-forward'}
    size={40}
    style={{marginLeft:'20%'}} />
</CardItem>


</Card>

                   
                </Content>


               
            </Container>

        


    );
 }
}
/****************************************************************************************/
class ThirdActivity extends Component
{
 static navigationOptions =
 {
    // title: 'SecondActivity',
    headerStyle: {
      backgroundColor: '#FEC107',
    },
    headerTintColor: '#fff'
 };

 render()
 {
    return(
       <View style = { styles.MainContainer }>


        <View style= {{flexDirection:'row',marginLeft: wp('1%') }}> 
      <Text style = {styles.Header}>Indian Languages - tamil</Text>
         
         <TouchableOpacity style={styles.Button}><Text>+ Add</Text></TouchableOpacity>   

        </View>
        <View style={styles.separator} />
<ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Dings interest = "football" topic = "t1" />
                  <Dings interest = "football" topic = "t2"/>
                  <Dings interest = "football" topic = "t3"/>
                  <Dings interest = "football" topic = "t4"/>
                  <Dings interest = "football" topic = "t1"/>
                  <Dings interest = "football" topic = "t1"/>
            </ScrollView>
            <View style={styles.separator} />



            <View style={{  flexDirection:'row'}}>
              <Text style={styles.Header }>ALL Users</Text>
              <TouchableOpacity
                  style={styles.Button1}
                 
                  onPress={() => alert('search')}>
        
                    <Text > Sort/ Filter </Text>
                    
              </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Dings interest = "football" topic = "t1" />
                  <Dings interest = "football" topic = "t2"/>
                  <Dings interest = "football" topic = "t3"/>
                  <Dings interest = "football" topic = "t4"/>
                  <Dings interest = "football" topic = "t1"/>
                  <Dings interest = "football" topic = "t1"/>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Dings interest = "football" topic = "t1" />
                  <Dings interest = "football" topic = "t2"/>
                  <Dings interest = "football" topic = "t3"/>
                  <Dings interest = "football" topic = "t4"/>
                  <Dings interest = "football" topic = "t1"/>
                  <Dings interest = "football" topic = "t1"/>
            </ScrollView>


       </View>
    );
 }
}



export default InterestScreen = createStackNavigator(
{
 First: { screen: MainActivity },
 
 Second: { screen: SecondActivity },
   
 Third: { screen: ThirdActivity }
});


const styles = StyleSheet.create(
{
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
    fontSize:20,
    textAlign: 'center',
    fontFamily:'Roboto'
  },
  header1: {
    fontSize:18,
    marginTop: hp('1%'),
    fontFamily:'Roboto',
    paddingRight: 70
  },
  box: {
    backgroundColor: "white",
    marginBottom: 4,
    padding: 6
  },
  separator: {
    marginVertical: 30,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  tagline: {
    fontSize: 16,
    left: 155,
    fontStyle: 'italic',
    color: 'grey'
  },
  mdhe: {
    alignItems: 'center',
    backgroundColor: "white",
    marginBottom: 4,
    
  },
  Right : {
  
    backgroundColor:'#DCDCDC',
    flex:1,
    alignSelf:'flex-end'
    
  },
  Button: {
    
    marginLeft:hp('16%'),paddingRight:'2%',backgroundColor:'#FEC107',
    borderRadius:10,
    borderWidth: 1,
    marginTop: '1%'
  },
  Button1: {
    
     
    marginLeft:hp('28%'),
    backgroundColor:'#FEC107',
    borderRadius:10,
    borderWidth: 1,
    marginTop: '1%'
 },
 Header: {
  fontSize:17 , fontWeight: "bold", paddingLeft:'1%'
 },


 header2:{
alignSelf:'center',
fontSize:18 ,
 
 }
});
