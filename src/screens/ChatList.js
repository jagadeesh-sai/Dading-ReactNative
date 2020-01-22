

  import React, { Component } from 'react';
import { Platform, Alert, ScrollView,Button, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from "react-native-modal";
import { Rating, AirbnbRating } from 'react-native-ratings';

import CheckBox from 'react-native-check-box'
import { TextInput } from "react-native-gesture-handler";


var shd1 = require('../assets/icons/asset2.png');
var shd2 = require('../assets/icons/h1.png');
var shd3 = require('../assets/icons/h3.png');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  async componentWillMount() {
        // await Expo
        //     .Font
        //     .loadAsync({Roboto: require("@expo/vector-icons/fonts/FontAwesome.ttf")});
        // this.setState({loading: false});
    }
  state = {
    visibleModal: null,

  };



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
                        <Text style={styles.font17}>Create New Group</Text>
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
                    
    <View style={{flexDirection:'row' ,marginTop:'5%'}}> 

  <Text style= {styles.font17}>Select Group Topic</Text>
  <TouchableOpacity
                  style={styles.Facebook}
               
               >
        
                    <Text style={{ 
          fontSize: 20, marginLeft: 30, color: 'black'}}> Cooking </Text>
                    
              </TouchableOpacity>

              
    </View>


    <View style={{flexDirection:'row' ,marginTop:'5%'}}> 

<Text style= {styles.font17}> Group Name</Text>
<TouchableOpacity
                style={styles.Facebook1}
             
             >
      
                  <Text style={{ 
        fontSize: 15, marginLeft: 30, color: 'black'}}> Cullnary Stars </Text>
                  
            </TouchableOpacity>

            
  </View>


  <View style={{flexDirection:'row' ,marginTop:'5%'}}> 

<Text style= {styles.font17}>Select Group Topic</Text>
              <TouchableOpacity>
      
              <Image source={require('../images/Button.png')}  style={styles.FloatingButtonStyle} />
                  
            </TouchableOpacity>

            
  </View>

    



     
    </View>
  );

    
    
  
    render() {
      return (
        
  <ScrollView>
   
 <View style={styles.container}>

 <Modal
          isVisible={this.state.visibleModal === 6}
          onBackdropPress={() => this.setState({ visibleModal: null })}>
          {this.renderModalContent()}
        </Modal>

    <View >
    <TouchableOpacity onPress={ () =>
          this.setState({ visibleModal: 6 })
        }> 
         <View style={styles.direct}>
        <Image source={require('../assets/icons/group.jpg')} 
                style={styles.image} />                 
       </View>
       <View>
       <Text style={styles.text}>New Group </Text> 
       
        </View>
        </TouchableOpacity>
    </View>

 <View style={{marginTop:'3%'}}>
 <TouchableOpacity>
         <View style={styles.direct}>
        
        <Image source={require('../assets/images/pk.jpg')} 
                style={styles.image} />                 
       </View>
       <View>
       <Text style={styles.text2}> Kapil Jaeel |<Text> Topic </Text><Image source={shd1} style={styles.Badge}/></Text> 
      
        </View>
        
        </TouchableOpacity>
 </View>

 </View>

 </ScrollView>

  

        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      padding:14,
      paddingBottom: 90
    },
    Rate: {    
      
      width: 50,
      alignSelf: "flex-end",
      height:20,     
      
    
      backgroundColor:'#FEC107',
     
      borderColor: '#fff'
    },
   
    outerCircle: {
      alignItems: 'center',
      borderRadius: 40,
      width: 80,
      height: 80,
    },
    image: {
      borderRadius: 30,
      width: 60,
      height: 60,
     
      },
  text: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: wp('-9%'),
      marginLeft: wp('17%')
     
    },
    text2: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: wp('4%'),
      marginLeft: wp('17%')
     
    },
    direct: {
      flex:1,
      flexDirection:`row`,
 
    },
    text1: {
       
       marginTop:'-10%',
        marginLeft: '25%'
       
      },
    border: {
      borderBottomColor: '#DCDCDC', 
      borderBottomWidth: 1,
      

      
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "#e5e5e5",
      marginTop: '120%'
    },
    headerText: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
     
    },
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      marginLeft:'45%'
    },
    
    Badge :{
    height: 15, width: 13
    },
    modalContent: {
      backgroundColor: "white",
     
      justifyContent: "center",
    
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)",
    },
    subcontainer4: {
      flexDirection: "row",
      width:'100%',
      backgroundColor:'yellow'
      
  },
  font17: {
    fontSize: 17,
    marginLeft:'5%',
    
    color:'grey',
    alignItems:'flex-start'
  },
  subsubsubcontainer2:{
   
    flex:1,
    marginLeft:'68%',
    fontSize: 17
  },
  Facebook: {
 
    width: 150,
    height: 30,

  
    color:'black',
    marginLeft:wp ('11%'),
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000'
  },
  Facebook1: {
 
    width: 150,
    height: 30,

  
    color:'black',
    marginLeft:wp ('20%'),
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000'
  },
  
  
  });

  
