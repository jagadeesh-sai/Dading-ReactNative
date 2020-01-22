// import React from 'react';
// import {Image,Platform,ScrollView,StyleSheet,Text,TextInput,View} from 'react-native';
// import {Icon} from 'expo';

// var mutual = require('../assets/icons/ch.png');
// export default class ChatScreen extends React.Component{

//     render(){
//         return(
//             <View>
//                 <View style ={styles.menuBar}>
//                 <Image source={mutual}
//                     style={styles.mutual} />
//                     <View style={{flexDirection: "column", justifyContent: "center"}}>
//                         <Text style={{fontSize: 20,color: "#fff"}}>Football</Text>
//                         <Text style={{fontSize: 10,color: "#fff"}}>45 members</Text>
//                     </View>
//                     <Icon.Ionicons name={"md-call"} size={35} color="#fff" style={{ padding: 10, marginLeft: "50%", marginTop: 7}}/>
//                     <Icon.Ionicons name={"md-more"} size={40} color="#fff" style={{ padding: 10,marginTop: 5 }}/>
//                 </View>
//                 <ScrollView style={styles.container}>
//                     <View style={styles.timeline}>
//                         <Text style={{color: "#CCC"}}>24 January 2019</Text>
//                     </View>
//                     <View style={styles.SecondPersonChat}>
//                         <Image source={require("../assets/images/pk.jpg")} style={styles.circle}/>
//                         <View style={styles.chatbox}>
//                             <Text style={{color:"#b56c19", fontWeight: "bold"}}>Karan</Text>
//                             <Text>Hey Buddy, your post was great. Looking forward to more of that!</Text>
//                             <Text style={{alignSelf: "flex-end", fontSize: 10, color: "grey"}}>5:31 pm</Text>
//                         </View>
//                     </View>
//                     <View style={styles.FirstPersonChat}>
//                         <View style={styles.chatbox}>
//                             <Text>Thanks! It's an honor coming from you, Harsh!</Text>
//                             <Text style={{alignSelf: "flex-end", fontSize: 10, color: "grey"}}>5:31 pm</Text>
//                         </View>
//                     </View>
//                     <View style={styles.timeline}>
//                         <Text style={{color: "#CCC"}}>Yesterday</Text>
//                     </View>
//                     <View style={styles.FirstPersonChat}>
//                         <View style={styles.chatbox}>
//                             <Text>What did you think of last night's Chelsea performance?</Text>
//                             <Text style={{alignSelf: "flex-end", fontSize: 10, color: "grey"}}>11:59 pm</Text>
//                         </View>
//                     </View>
//                     <View style={styles.SecondPersonChat}>
//                         <Image source={require("../assets/images/pk.jpg")} style={styles.circle}/>
//                         <View style={styles.chatbox}>
//                             <Text style={{color:"#000088", fontWeight: "bold"}}>Steve</Text>
//                             <Text>Hey, it was just brilliant, did not expect that but you must have seen it coming. Hehe</Text>
//                             <Text style={{alignSelf: "flex-end", fontSize: 10, color: "grey"}}>12:01 am</Text>
//                         </View>
//                     </View>
//                 </ScrollView>
//                 <View style={styles.textBoxHolder}>
//                     <View style={styles.Textbox}>
//                         <Icon.Ionicons name={"md-happy"} size={30} color='grey' style={{marginLeft: 5, marginTop: 3.5}}/>
//                         <TextInput
//                             placeholder="Type a message"
//                             style={{marginLeft: 5, width: "73%"}}
//                         />
//                         <Icon.Ionicons name={"md-attach"} size={25} color='#ffa000' style={{marginLeft: 5, marginTop: 3.5, transform: [{rotate: '315deg'}]}}/>
//                         <Icon.Ionicons name={"md-camera"} size={25} color='#ffa000' style={{marginLeft: 10, marginTop: 3.5}}/>
//                     </View>
//                     <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor:"#ffa000",marginLeft:5 }}>
//                         <Icon.Ionicons name={"md-mic"} size={25} color="white" style={{marginLeft:12, marginTop: 7}}/>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flexDirection: "column",
//         marginTop: 5,
//         height :"86%"
//     },
//     mutual:{
//       width: 60,
//       height: 60,
//       margin: 3
//     },
//     timeline: {
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: 10,
//         marginBottom: 10
//     },
//     FirstPersonChat: {
//         marginBottom: 10,
//         alignItems: "flex-end"
//     },
//     SecondPersonChat:{
//         marginBottom: 10,
//         flexDirection: "row"
//     },
//     circle: {
//         height: 60,
//         width: 60,
//         borderRadius: 30,
//         marginLeft: 10
//     },
//     chatbox:{
//         marginLeft: 10,
//         marginRight: 10,
//         maxWidth: 300,
//         flexDirection: "column",
//         backgroundColor: "#fff6f6",
//         borderRadius: 10,
//         padding: 5
//     },
//     textBoxHolder:{
//         flexDirection: "row",
//         position: "absolute",
//         bottom: 10
//     },
//     Textbox: {
//         flexDirection: "row",
//         width: "86%",
//         minHeight: 40,
//         borderRadius: 20,
//         borderColor: "#ffa000",
//         borderWidth: 2,
//         marginLeft: 10
//     },
//     menuBar:{
//         backgroundColor: '#FEC107',
//         padding: 2,
//         flexDirection: "row",
//         paddingTop: 20
//     }
// });


import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View, AsyncStorage } from "react-native";
import io from "socket.io-client";
import CustomHeader from "../components/CustomHeader";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: []
    };
  }

  async componentDidMount() {
    this.socket = io("https://dading.herokuapp.com");//http://192.168.0.106:3000
    let res = await AsyncStorage.getItem('userDetails');//.then(res => {
      res = JSON.parse(res);
      this.setState({name : res[0].first_name})
      this.socket.emit("add user", res[0].first_name);
      this.socket.on("new message", msg => {
        console.log("incoming--->",msg);
        let chatHistory = this.state.chatMessages;
        chatHistory.push(msg.message);
        this.setState({ chatMessages: chatHistory });
        this.setState({ senderName: msg.username});
     // });

  })
  .catch(err => console.log(err));
  }


  submitChatMessage() {
    AsyncStorage.getItem('userDetails').then(res => {
        res = JSON.parse(res);
        this.setState({name : this.props.navigation.state.params.other_name})
        this.socket.emit("new message", this.state.chatMessage);
        this.setState({ chatMessage: "" });
    })
    .catch(err => console.log(err));
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}>{this.state.senderName+" : "+chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
       <View style={{  backgroundColor: "#FEC107" }}>
        <CustomHeader navigation={this.props.navigation} />
       
            </View>

            
        <TextInput
          style={{ height: 40, borderWidth: 2,marginTop : 30 }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({ chatMessage });
          }}
        />
        {chatMessages}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
