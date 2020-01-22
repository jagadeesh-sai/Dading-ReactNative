import React from "react";
import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  ToastAndroid,Alert
} from "react-native";
//import { Icon, AuthSession } from "expo";
// import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@ant-design/react-native';
import Touchable from "react-native-platform-touchable";
import ProfilePic from "../profile/profilePic";
import ComfortLevel from "../profile/comfort_level_icon";
//import EditIcon from "../profile/edit_icon";
import AddTopicsIcon from "../profile/add_topics_icon";
import ProgressBar from "../components/ProgressBar";
import PieChartCustom from "../profile/pie_chart";
import HeaderButtons, {
  HeaderButton,
  Item
} from "react-navigation-header-buttons";
import Connections from "../components/Connections";
import Topics from "../components/Topics";
import AllTopics from './AllTopics';
import Achievments from "../components/Achievement";

import CustomHeader from "../components/CustomHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
var shd1 = require("../assets/icons/asset2.png");
var shd2 = require("../assets/icons/h1.png");
var shd3 = require("../assets/icons/h3.png");

export default class OtherProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.baseUrl = "https://dading.herokuapp.com";

    // this.baseUrl = "http://192.168.0.106:3000";
    // {"navigation":{"state":{"key":"OtherProfileScreen","routeName":"OtherProfileSc
    // reen","params":{"other_id":"cb328311-1c05-43d8-a666-28a1a2a3a56c"}},"actions":
    // {}}} 
    this.state = {
      connection: [],
      user: [],
      id:null,
      modalVisible: false
    };

    this.userId = null;
    this.ownId = null;
    this.userDetails = null;
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    if (this.props.navigation) {
        let otherId = this.props.otherUserID;
      this.setState({ id: otherId });

      console.log("INSIDE OTHER SCREEN EDUCATION ----->", this.props.otherEducation)
      //Alert.alert(this.props.otherEducation)
    // Expo.Font.loadAsync({        'Roboto':
    // require('../../../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),      });
    // addConnection(this.state);          getTopicByuserName(1);
    console.log("PROPS " + JSON.stringify(this.props));
    //this.userId = this.props.navigation.params.other_id;
    console.log("passing other userId --- >", this.state);
    let getAchievements =
      this.baseUrl + "/user/getAchievementByUserId/" + otherId;//this.state.id;
    let getUserDetails = this.baseUrl + "/user/" + otherId;//this.state.id;
    Promise.all([fetch(getUserDetails), fetch(getAchievements)])
      .then(([getUserDetails, getAchievementDetails]) => {
        return Promise.all([
          getUserDetails.json(),
          getAchievementDetails.json()
        ]);
      })
      .then(([getUserDetails, getAchievementDetails]) => {
        // set state in here
        this.setState({
          achievement: getAchievementDetails.message,
          work: getUserDetails.message[0].work,
          education: getUserDetails.message[0].education,
          industry: getUserDetails.message[0].industry,
          name: getUserDetails.message[0].first_name
        });
        ToastAndroid.show(
          "other user work is  " + this.state.work,
          ToastAndroid.SHORT
        );
      });
    // AsyncStorage
    //     .getItem('other_name')
    //     .then(res => {
    //         if (res !== null) {
    //             //res = JSON.parse(res); this.userDetails= res;
    //             this.setState({name: res});
    //             this.ownId = res[0].id;
    //             console.log("user id", res[0].id);
    //             //resolve(true);
    //         } else {
    //             console.log("user id---->", res[0].id);
    //             //resolve(false);
    //         }
    //     })
    //     .catch(err => console.log(err));
    // AsyncStorage
    //     .getItem('other_id')
    //     .then(res => {

    //         if (res !== null) {
    //             this.userId = res;
    //             console.log("user details are here--->", res);
    //             ToastAndroid.show("other user inside other profiler  " + this.userId, ToastAndroid.SHORT)

    //             //resolve(true);
    //         }

    //     })
    //     .catch(err => console.log(err));
  }
}
  addToMyConnections(userId) {
    var details = {
      sender: this.ownId,
      receiver: userId,
      status: "open"
    };
    console.log("calling addd connection api!!");
    let url = this.baseUrl + "/user/connection";
    let data = {
      method: "POST",
      credentials: "same-origin",
      mode: "same-origin",
      body: JSON.stringify(details),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    fetch(url, data)
      .then(response => response.json())
      .then(user => {
        console.log("user details-->", user.message);
        // Alert.alert('Login success!!!');
        if (user.status === 200) {
          console.log("User status --->", user.message);
          Alert.alert("Connection Added");
        }
      });
  }

  chat(userDetail) {
    const { navigate } = this.props.navigation;

    navigate("ChatScreen",{ other_name:this.props.otherUserName, ownId: this.props.ownUserId });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 1, backgroundColor: "#FEC107" }}>
            <CustomHeader navigation={this.props.navigation} />
          </View>
          <View style={styles.container1}>
            <View style={styles.subcontainer1}>
              <ProfilePic />
              {
                this.props.otherUserName  &&
                <Text style={{ marginTop: 20 }}>
                   {this.props.otherUserName}
                </Text>
              }
              {/* <Text style={{marginTop: 2}}>
                            Banglore, India
                        </Text> */}
              <TouchableOpacity>
                <Image source={require("../images/coin.png")} />
              </TouchableOpacity>
            </View>

            <View style={styles.subcontainer2}>
              <Text
                style={{
                  marginTop: 45,
                  marginLeft: 10,
                  fontSize: 12,
                  color: "grey"
                }}
              >
                Work
              </Text>
              <TextInput
                style={styles.textinput}
                value={this.props.otherWork}
                
                editable={false}
              />
              <Text style={styles.text1}>Education</Text>
              {
                this.props.otherEducation &&
              
              <TextInput
                style={styles.textinput}
                value={this.props.otherEducation}
                
                editable={false}
              />

              }

              <Text style={styles.text1}>Industry</Text>
              {   this.props.otherIndustry &&
              <TextInput
                style={styles.textinput}
                value={this.props.otherIndustry}
               
                editable={false}
              />
              }
              <TouchableOpacity
              style={{marginTop: 20}}
                onPress={() => {
                  this.chat();
                }}
              >
                <Image source={require("../images/chat.png")} />
              </TouchableOpacity>
            </View>
            <View style={styles.newsubcontainer}>
              <View style={styles.subsubcontainer}>
                <View style={{ marginTop: "15%" }}>
                  <Image
                    source={require("../images/comfort.jpg")}
                    style={{ width: 30, height: 30 }}
                  />
                  <View>
                    <Text styles={{ paddingLeft: 5 }}>
                      {/* Comfort {'\n'}Level */}
                      Comfort Level
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: "10%" }}>
                  <Image
                    source={require("../images/certificate.jpg")}
                    style={{ width: 30, height: 30 }}
                  />

                  <View>
                    <Text styles={styles.font10grey}>Certificates</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.addToMyConnections(this.userId);
                }}
              >
                <View style={styles.subsubcontainer3}>
                  <View style={styles.iconEdit3}>
                    <AddTopicsIcon />
                    <View>
                      {/* style={{paddingTop: -10, paddingLeft: 5}} */}
                      <Text styles={styles.font10grey}>Add Conection</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ backgroundColor: "white" }}>
            <Text style={styles.font17}>Mutual Topics!</Text>
            <ScrollView
              contentContainerStyle={styles.scrollContent}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <Topics topicType="football" />
              <Topics topicType="cricket" />
              <Topics topicType="painting" />
              <Topics topicType="football" />
              <Topics topicType="game" />
            </ScrollView>
          </View>
          <View style={styles.separator} />
          <View style={{ backgroundColor: "white", padding: 12 }}>
            <View style={styles.subcontainer4}>
              <Text style={styles.font17_4}>Mutual Connections</Text>
              <View style={styles.subsubcontainer4}>
                <View style={styles.subsubsubcontainer2}>
                  <Text>SEE ALL</Text>
                </View>
              </View>
            </View>
            <Connections />
            <Connections />
          </View>
          <View style={styles.separator} />
          {this.state.achievement && 
            <View
              style={{
                backgroundColor: "white"
              }}
            >
              <Text style={styles.font17}>Achievments!</Text>
              <View style={styles.MainContainer}>
                {this.state.achievement &&
                  this.state.achievement.map((achievementEle, index) => (
                    <Achievments achievementType={achievementEle.name} />
                  ))}
              </View>
            </View>
          }
          <View style={styles.container2}>
            <View style={styles.subcontainer4}>
              <Text style={styles.font17}>Topics</Text>
              <View style={styles.subsubcontainer4}>
                <View style={styles.subsubsubcontainer2}>
                <TouchableOpacity onPress = {() => {this.toggleModal(true)}}>
                    <Text>SEE ALL</Text>
                </TouchableOpacity>
                <AllTopics modalVisible={this.state.modalVisible} />  
                </View>
              </View>
            </View>
            <View style={styles.subcontainer5}>
              <PieChartCustom />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Details")}
          >
            <View style={styles.container3}>
              <View>
                <View style={styles.scrollContent}>
                  <Text style={styles.font17}>Football</Text>
                  <View style={styles.star}>
                    <Icon
                      name={"md-star"}
                      value={"ddd"}
                      color="#FFC006"
                      size={30}
                    />
                  </View>
                  <Image
                    source={shd2}
                    style={{ marginLeft: 5, height: 20, width: 23 }}
                  />
                </View>
                <Text
                  style={{
                    marginLeft: 12
                  }}
                >
                  12 Conversations
                </Text>
                <View style={styles.scrollContent}>
                  <View
                    style={{
                      marginLeft: "10%"
                    }}
                  >
                    <Text style={styles.textstyle}>Novice</Text>
                    <Image
                      source={shd2}
                      style={{ marginLeft: 5, height: 20, width: 23 }}
                    />
                  </View>
                  <ProgressBar />
                  <View>
                    <Text style={styles.textstyle}>Amateur</Text>
                    <Image
                      source={shd3}
                      style={{ marginRight: "10%", height: 20, width: 23 }}
                    />
                  </View>
                </View>
                <View style={{ marginLeft: "70%" }}>
                  <Text style={styles.textstyle}>
                    12/100 Conversations Rating >= 4
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#c0c0c0"
  },
  container1: {
    borderWidth: 1,
    backgroundColor: "white",
    marginLeft: "-1%",
    borderColor: "#c0c0c0",
    height: 300,
    flexDirection: "row"
  },
  container2: {
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 2,
    height: 350,
    borderColor: "#c0c0c0",
    padding: 10
  },
  container3: {
    borderWidth: 2,
    backgroundColor: "white",
    marginTop: 2,
    height: 200,
    borderColor: "#c0c0c0",
    padding: 10
  },

  subcontainer1: {
    width: 150,
    alignItems: "center",
    flexDirection: "column"
  },
  subcontainer2: {
    width: 150,
    flexDirection: "column",
    marginLeft: "-5%"
  },
  subcontainer3: {
    height: 100,
    flexDirection: "row"
  },
  subcontainer4: {
    flexDirection: "row"
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
  text1: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 12,
    color: "grey"
  },
  textinput: {
    marginLeft: 10,
    borderBottomColor: "#b0b0b0",
    borderBottomWidth: 1,
    width: 130
  },
  subsubcontainer: {
    marginLeft: 5,
    marginTop: 80,
    flex: 1
  },
  subsubcontainer1: {
    marginLeft: 5,
    marginTop: 50,
    flex: 1,
    flexDirection: "row"
  },
  subsubcontainer2: {
    flexDirection: "row",
    height: 50,
    marginTop: 30
  },
  subsubcontainer3: {
    marginTop: 50,
    marginLeft: 15,
    justifyContent: "flex-end"
  },
  subsubcontainer4: {
    position: "absolute",
    right: 6
  },
  font10: {
    fontSize: 10,
    marginTop: 3
  },
  font17: {
    fontSize: 17,
    backgroundColor: "white",
    marginLeft: 12
  },
  font17_4: {
    fontSize: 17,
    backgroundColor: "white"
  },
  font17_2: {
    fontSize: 17,
    marginTop: 5
  },
  font10grey: {
    fontSize: 10,
    color: "#808080"
  },
  subsubsubcontainer1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  subsubsubcontainer2: {
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 0,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    elevation: 1,
    padding: 5,
    flex: 1,
    alignSelf: "flex-end"
  },
  greyWall: {
    width: 5,
    backgroundColor: "grey",
    marginLeft: 10,
    marginRight: 10
  },
  right: {
    flexDirection: "row",
    // marginLeft: 50,
    backgroundColor: "white",
    padding: 10,
    marginTop: 5,
    width: "auto"
  },
  left: {
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 0,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    elevation: 1,
    padding: 5,
    marginLeft: wp("32%"),
    fontSize: 17
  },

  iconEdit: {
    paddingLeft: 50,

    paddingTop: 0
  },
  iconEdit1: {
    flexDirection: "row",
    paddingTop: 0
  },
  iconEdit3: {
    marginLeft: "-10%",
    paddingBottom: "25%"
  },

  addIconTopics: {
    // flexDirection:'row', paddingRight: 10, // marginLeft: 50, bottom: 10,
    // fontSize: 6
    marginTop: "-10%"
  },

  MainContainer: {
    marginLeft: "5%",
    marginTop: 10,
    backgroundColor: "white",
    height: 100,
    borderColor: "#c0c0c0",
    flex: 1,
    flexDirection: "row"
  },

  ImageClass: {
    // Setting up image width.
    width: 50,

    // Setting up image height.
    height: 50,
    marginLeft: "10%"
  },
  scrollContent: {
    flexDirection: "row" // arrange posters in rows
  },
  star: {
    marginTop: -6
  },

  newsubcontainer: {
    width: 150,
    marginLeft: "1%",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "-15%"
  },

  separator: {
    borderWidth: 2,
    borderColor: "#DCDCDC"
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: "red",
    borderWidth: 1
  },
  createIcon: {
    position: "absolute",
    top: 4,
    left: 8
  },
  textstyle: {
    fontSize: 10,
    paddingBottom: 4,
    justifyContent: "center"
  }
});
