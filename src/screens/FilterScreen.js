import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,Image,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { Rating, AirbnbRating } from 'react-native-ratings';

import CheckBox from 'react-native-check-box' 
import { TextInput } from "react-native-gesture-handler";


export default class Example extends Component {


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
                        <Text style={styles.font17}>Rate your conversation</Text>
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
                    

   <Text style={{textAlign:'left'}}>Knowledge</Text>
   <AirbnbRating
          count={4}
          reviews={[ "Meh", "OK", "Good", "Excellent"]}
          defaultRating={4}
          size={20}
      />

      <Text> What did you Like</Text>
<View style={{flexDirection:'row'}}> 

      <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"Comfort"}
/>

<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"Knowledge"}
/>

<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"Language"}
/>

</View>

<View style={{flexDirection:'row'}}> 

      <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"Comfort"}
/>

<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width:'66.5%'}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

</View>
<Text style={{textAlign:'left'}}>How comfortable was your conversation?</Text>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
  <Image source={require('../assets/images/angry.jpg')}   style={styles.image}  />
  </TouchableOpacity>
<TouchableOpacity>
  <Image source={require('../assets/images/meh.jpg')}     style={styles.image}/>
  </TouchableOpacity>
<TouchableOpacity>
  <Image source={require('../assets/images/happy.jpg')}   style={styles.image} />
  </TouchableOpacity>
<TouchableOpacity>
  <Image source={require('../assets/images/excited.jpg')} style={styles.image}  /> 
  </TouchableOpacity>
</View>
<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Got any Other suggestions? let us know!"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none" />
              {/* onChangeText = {this.handleEmail}/> */}

      {this.renderButton("Submit")}
    </View>
  );


  render() {
    return (
      <View style={styles.container}>
     
        {this.renderButton("Modal that can be closed on backdrop press", () =>
          this.setState({ visibleModal: 6 }),
        )}
    

        <Modal
          isVisible={this.state.visibleModal === 6}
          onBackdropPress={() => this.setState({ visibleModal: null })}>
          {this.renderModalContent()}
        </Modal>

     
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
   
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  image :{
    height: 50, 
    width: 53,
    marginLeft:'2%'
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
  marginLeft:'68%',
  fontSize: 17
},
});