import React , { Component }  from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ant-design/react-native';
import Touchable from 'react-native-platform-touchable';
import CustomHeader from "../components/CustomHeader";
import {   Image,
  Text,
  ScrollView,
  StyleSheet,
  CheckBox,
  TouchableOpacity,
  View,
  FlatList, Button,AsyncStorage} from 'react-native';
  import Modal from "react-native-modal";
  import { Rating, AirbnbRating } from 'react-native-ratings';

  
  import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
  import { TextInput } from "react-native-gesture-handler";
  // import { Constants } from '@ant-design/react-native';
import Connections from '../components/Connections'
import Ionicons from 'react-native-ionicons';



function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


export default class ConnectionScreen extends React.Component {
  constructor(props) {
    super(props);
   
   this.baseUrl = "https://dading.herokuapp.com";
   // this.baseUrl = "http://192.168.0.106:3000";
    this.userId = null;
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
          this.userId = res[0].id;
          console.log("user id",res[0].id);
          //resolve(true);
          let getConnection = this.baseUrl+"/user/myConnections/"+this.userId;
       
          Promise.all([fetch(getConnection)])
          .then(([connection]) => { 
             return Promise.all([connection.json()]) 
          })
          .then(([connection]) => {
            // set state in here
            this.setState({
           
              connection:connection.message
            });
            console.log("CONNECTIONS--------------->",connection.message )

          });
          } else {
          console.log("user id---->",res[0].id);
          //resolve(false);
          }
      })
      .catch(err => console.log(err));
        // let getTopicsUrl = this.baseUrl+"/user/getTopicsByUserId/"+userId;
        // let getRecommendation = this.baseUrl+"/user/getRecommendation/"+userId;
       //  let getTrenDingErs = this.baseUrl+"/user/getTrenDingers/";

}

  // state = {
  //   visibleModal: null,
  //   checked: false,

  // };



  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
   {/* <View style={{flexDirection:'row'}}>
      <Text>Rate Your Conversation! </Text>
       <TouchableOpacity  style={{flex:1,alignContent:'flex-end'}}> 
         <Text>X</Text>
         </TouchableOpacity>           
   </View> */}
   <View style={styles.subcontainer4}>
                        <Text style={styles.font17}>SORT/FILTER</Text>
                        <View style={styles.subsubcontainer4}>
                                <View style={styles.subsubsubcontainer2}>
                                <TouchableOpacity 
                             onPress = {
                              () => this.setState({ visibleModal: null })  }>
                                    <Text>X</Text>
                                </TouchableOpacity>
                                </View>
                        </View>
    </View>
                    
<View style={{marginLeft: 20}}> 
   <Text >Knowledge</Text>
   <RadioButton
  accessible={true}

 
/>

      <Text> What did you Like</Text>
<View style={{flexDirection:'row'}}> 
<Text>Fotball</Text>

   
  

<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    RightText={"Knowledge"}
/>
<Text>Fotball</Text>
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    RightText={"Language"}
/>
</View>

<View style={{flexDirection:'row'}}> 

<Text>Fotball</Text>
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
   />
   <Text>Fotball</Text>
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
   />
   <Text>Fotball</Text>
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
   />


</View>

<Text style={{textAlign:'left'}}>Expertise Level</Text>

<View style={{flexDirection:'row'}}>
<TouchableOpacity>
  <Image source={require('../assets/images/shield1.jpg')}   style={styles.image}  />
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
  
<TouchableOpacity>
  <Image source={require('../assets/images/shield2.jpg')}     style={styles.image}/>
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
<TouchableOpacity>
  <Image source={require('../assets/images/shield3.jpg')}   style={styles.image} />
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
<TouchableOpacity>
  <Image source={require('../assets/images/shield4.jpg')} style={styles.image}  /> 
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
</View>





<Text style={{textAlign:'left'}}>How comfortable was your conversation?</Text>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
  <Image source={require('../assets/images/angry.jpg')}   style={styles.image}  />
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
  
<TouchableOpacity>
  <Image source={require('../assets/images/meh.jpg')}     style={styles.image}/>
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
<TouchableOpacity>
  <Image source={require('../assets/images/happy.jpg')}   style={styles.image} />
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
<TouchableOpacity>
  <Image source={require('../assets/images/excited.jpg')} style={styles.image}  /> 
  <CheckBox
          title="Press me"        
        />
  </TouchableOpacity>
</View>
<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Got any Other suggestions? let us know!"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none" />
              {/* onChangeText = {this.handleEmail}/> */}


</View>


      {this.renderButton("Submit")}
    

    </View>
  );



  render() {
    return (
    <ScrollView contentContainerStyle={styles.container}>
    
    <View style = {styles.container}>
        
      
<View style={styles.Inline}>
    <Ionicons name="ios-search" size={35} color={'red'} onPress={() => alert('search')}/>
    <TextInput
          // value={this.state.email}
          // onChangeText={(email) => this.setState({ email })}
          placeholder={'Search Connections'}
          style={{borderBottomColor: 'black', borderBottomWidth: 1, width:'40%', marginLeft: 5}}
        />
 
    <View style={{marginLeft:'30%', marginTop:'2%'}}>
      <TouchableOpacity onPress={ () =>
          this.setState({ visibleModal: 6 })
        }
        style={{backgroundColor:"#c0c0c0"}}>
        <Text> Sort/Filter</Text>
      </TouchableOpacity>
      </View>

        <Modal
          isVisible={this.state.visibleModal === 6}
          onBackdropPress={() => this.setState({ visibleModal: null })}>
          {this.renderModalContent()}
        </Modal>
      


</View>
    <View  style = {styles.box}>
          <ScrollView contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                {this.state.connection && this.state.connection.map((connectionEle, index) => <Connections
            userId = {connectionEle.id} firstName={connectionEle.first_name}  conversation ={connectionEle.conversations} 
                />)}
                <Connections />
                  {/* <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections />
                  <Connections /> */}
               
            </ScrollView>
      </View>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    paddingBottom: '5%'
  },

  scrollContent: {
   // arrange posters in rows
   backgroundColor: 'white',
   flexWrap: 'wrap',       // allow multiple rows
 },
  box: {
    backgroundColor: "white",
    justifyContent: 'center'
  },

  Inline :{
    flexDirection: 'row'
  },
  Right : {
    marginLeft:'30%',
    backgroundColor:'#DCDCDC',
    height: '55%',
    marginTop: '4%'
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
   
   
  },
  modalContent: {
    backgroundColor: "white",
   
    // justifyContent: "center",
    // alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  
  image :{
    height: 50, 
    width: 53,
    marginLeft:'2%',
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer4: {
    flexDirection: "row",
    width:'100%',
    backgroundColor:'yellow'
    
},
font17: {
  fontSize: 17,
 
  alignItems:'flex-start'
},
subsubsubcontainer2:{
 
  flex:1,
  marginLeft:'79%',
  fontSize: 17
},
  

});
