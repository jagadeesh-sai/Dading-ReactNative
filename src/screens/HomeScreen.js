import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import {  Icon } from '@ant-design/react-native';

//import Icon from 'react-native-vector-icons/MaterialIcons';
import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Button} from 'react-native';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Dings from '../components/Dings'
import Topics from '../components/Topics'
import Recommendations from '../components/Recommendations'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var addConnection = (connectDetails) =>
  {
   //const connectDetails = this.state;

   console.log("Connection D3etails - > ",connectDetails)
   //Alert.alert('Credentials', `${username} + ${password}`);
   let url = "http://192.168.0.106:3000/user/connection/";
   let data = {
     method: 'POST',
     credentials: 'same-origin',
     mode: 'same-origin',
     body: JSON.stringify(connectDetails.user[0]),
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
       let result= user.message;
       user.message.map(userElement => {
        delete userElement.id;
        delete userElement.initiate;
        onAddItem(userElement)
       });
       console.log("update state--->",this.state.user);
       
      }
      
     else 
       Alert.alert('No connections!!!');
    });

 }
 
export default class HomeScreen extends React.Component {


  onAddItem = (userDetail) => {
    this.setState(state => {
      const list = state.user.concat(userDetail);
  
      return {
        list
        
      };
    });
  };

  componentDidMount() {
    addConnection(this.state);
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      user:[{
        sender :'1',
        receiver :'2',
        status :'Open',
      
    }]};
  }

 


  render() {
    return (
    <ScrollView>
    <View style = {styles.container}>
      <View  style = {styles.box}>
      <View style={{flexDirection: "row"}}>
        
        <Text style = {styles.header}>
            Dings
        </Text>

        <Image source={require('../images/ff.png')}    />
  
        </View>

        <View style={{marginLeft:'5%'}}>

        <Text style = {styles.tagline}>
           Let's get dinging
        </Text>
        </View>

          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Dings interest = "football" topic = "t1" connectionResult = {this.state}/>
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
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t2"/>
            <Dings interest = "football" topic = "t3"/>
            <Dings interest = "football" topic = "t4"/>
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t1"/>
              </ScrollView>
      </View>

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          My Topics
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Topics topicType ="football" />
                  <Topics topicType ="cricket" />
                  <Topics topicType ="painting" />
                  <Topics topicType ="football" />
                  <Topics topicType ="game" />
            </ScrollView>
      </View>

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Recommendations!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Topics topicType ="football" />
          <Topics topicType ="cricket" />
          <Topics topicType ="painting" />
          <Topics topicType ="football" />
          <Topics topicType ="game" />
            </ScrollView>
      </View>


      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Tren-ding-ers!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Dings interest = "football" topic = "t1"/>
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
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t2"/>
            <Dings interest = "football" topic = "t3"/>
            <Dings interest = "football" topic = "t4"/>
            <Dings interest = "football" topic = "t1"/>
            <Dings interest = "football" topic = "t1"/>
              </ScrollView>
      </View>

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
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  box: {
    backgroundColor: "white",
    marginBottom: 4,
    padding: 6
  },
  tagline: {
    fontSize: 16,
    marginLeft:wp('2%'),
    fontStyle: 'italic',
    color: 'grey'
  }


});
