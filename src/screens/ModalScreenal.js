import React , { Component }  from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ant-design/react-native';
import Touchable from 'react-native-platform-touchable';
import CustomHeader from "../components/CustomHeader";
import {   Image,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  FlatList, Button,AsyncStorage} from 'react-native';
  import Modal from "react-native-modal";
  import { Rating, AirbnbRating } from 'react-native-ratings';
  
  
  // import { Constants } from '@ant-design/react-native';
import Connections from '../components/Connections'




function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


export default class ConnectionScreen extends React.Component {
  constructor(props) {
    super(props);
   
   this.baseUrl = "https://dading.herokuapp.com";
   // this.baseUrl = "http://192.168.0.106:3000";
    this.userId = null;
    this.state = {
        starCount: 3.5
      };
  }

  async componentDidMount() {
    await Font.loadAsync({
      awesome:
        'https://github.com/FortAwesome/Font-Awesome/raw/master/fonts/fontawesome-webfont.ttf',
    });
    this.setState({ fontLoaded: true });
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  renderModalContent = () => (
    <View style={styles.modalContent}>
   
   <View style={styles.subcontainer4}>
                        <Text style={styles.font17}>CONGRATULATIONS!</Text>
                 
        <Image
          source={require('../assets/images/RewardPop.png')}
        />

        <Text style={{textAlign: 'center', fontWeight: 'bold',}}>You Are the winner of weekly award of INR 500</Text>
    </View>
    </View>
                    

  );

  renderModalContent2 = () => (
    <View style={styles.modalContent}>
   
   <View style={styles.subcontainer4}>
                        <Text style={styles.font17}>CONGRATULATIONS!</Text>
                 
        <Image
          source={require('../assets/images/popup1.png')}
        />

        <Text style={{textAlign: 'center', fontWeight: 'bold',}}>You have been awarded the title of "Advanced in Legal/Finance"</Text>
    </View>
    </View>
                    

  );

  renderModalContent3 = () => (
    <View style={styles.modalContent}>
   
   <View style={styles.subcontainer4}>
                        <Text style={styles.font17}>How did you like the app?</Text>

                        <AirbnbRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
                        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Leave a feedback"
               placeholderTextColor = "#000"
               autoCapitalize = "none"
              />
<View style={{flexDirection: "row"}}>
        <View>         
     <TouchableOpacity style={styles.rating}>
         <Text>Later</Text>
     </TouchableOpacity>
     </View>

     <View>         
     <TouchableOpacity style={styles.rating1}>
         <Text>Submit</Text>
     </TouchableOpacity>
     </View>

   
         </View>

         <View style={{ alignItems:'flex-start', textAlign: 'left', 
    alignSelf: 'stretch'}}>
             <TouchableOpacity >
                 <Text>Dont show this Again</Text>
             </TouchableOpacity>
         </View>
    </View>
    </View>              

  );




  render() {
    return (
    <ScrollView contentContainerStyle={styles.container}>
    
    <View style = {styles.container}>
        
      
<View style={styles.Inline}>
  
 
    <View style={{marginLeft:'30%', marginTop:'20%'}}>
      <TouchableOpacity onPress={ () =>
          this.setState({ visibleModal: 6 })
        }
        style={{backgroundColor:"#c0c0c0"}}>
        <Text>Reward</Text>
      </TouchableOpacity>
      </View>

        <Modal
          isVisible={this.state.visibleModal === 6}
          onBackdropPress={() => this.setState({ visibleModal: null })}>
          {this.renderModalContent()}
        </Modal>


        <View style={{marginLeft:'30%', marginTop:'20%'}}>
      <TouchableOpacity onPress={ () =>
          this.setState({ visibleModal: 8 })
        }
        style={{backgroundColor:"#c0c0c0"}}>
        <Text>Level Up</Text>
      </TouchableOpacity>
      </View>

        <Modal
          isVisible={this.state.visibleModal === 8}
          onBackdropPress={() => this.setState({ visibleModal: null })}>
          {this.renderModalContent2()}
        </Modal>
      

        <View style={{marginTop:'40%'}}>
      <TouchableOpacity onPress={ () =>
          this.setState({ visibleModal: 9 })
        }
        style={{backgroundColor:"#c0c0c0"}}>
        <Text>demo</Text>
      </TouchableOpacity>
      </View>

        <Modal
          isVisible={this.state.visibleModal === 9}
          onBackdropPress={() => this.setState({ visibleModal: null })}>
          {this.renderModalContent3()}
        </Modal>


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
    alignItems: 'center',
    width:'100%',
    
    
},
font17: {
  fontSize: 19,
 fontWeight: 'bold',
 textAlign: 'left', alignSelf: 'stretch'
},

font17: {
    fontSize: 17,
   
    textAlign: 'left', 
    alignSelf: 'stretch'
  },
subsubsubcontainer2:{
 
  flex:1,
  marginLeft:'79%',
  fontSize: 17
},
input: {
  
    height: 40,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    width: '60%',
    textAlign: 'left', 
    alignSelf: 'stretch'
    
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 },

 rating: { 
     backgroundColor: '#FEC107',
  
 padding: 10,
 alignContent: 'flex-start', 
 justifyContent: 'flex-start',
 alignItems: 'flex-start'
},

 rating1:{backgroundColor: '#FEC107',
 textAlign: 'left', 
 alignSelf: 'stretch',
 padding: 10}

});
