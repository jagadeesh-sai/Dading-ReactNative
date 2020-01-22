// import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@ant-design/react-native';
import Ionicons from 'react-native-ionicons';
import React from "react";
import {Text,View,Platform,ScrollView} from "react-native";
import HomeScreen from "./screens/HomeScreen";
// import ConnectionScreen from "./screens/ConnectionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TabBarIcon from "./components/TabBarIcon";
import NotificationScreen from "./screens/NotificationScreen";
import ChatScreen from "./screens/ChatScreen";
import SettingsScreen from "./screens/SettingsScreen";
import InterestsScreen from "./screens/InterestsScreen";
import TopicProfileScreen from "./screens/TopicProfileScreen";
import UpdateScreen from "./screens/UpdateScreen";
import AllTopics from "./screens/AllTopics";
import OtherProfileScreen from "./screens/OtherProfileScreen";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import ModalScreenal from "./screens/ModalScreenal"
import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import Home from "./views/Home";
import Settings from "./views/Settings";
import About from "./views/About";
import Login from "./views/Home/PageA/Login";
//import StartScreen from "./views/Home/PageA/StartScreen";
import Register1 from "./views/Home/PageA/Register1";
import Register from "./views/Home/PageA/Register";
import Dummy from "./views/Home/PageA/Dummy";
import ChatMain from "./screens/ChatMain";
import FilterScreen from "./screens/FilterScreen";
import SearchScreen from "./screens/SearchScreen";
import ChatRatings from "./modal/ChatRatings";
import DingScreen from "./screens/DingScreen";
import AccountScreen from './screens/AccountScreen';
import HelpScreen from './screens/HelpScreen';


const MainNavigator = createDrawerNavigator(
  {   

    
 
    
   
    

    // FilterScreen: {
     
    //   screen : FilterScreen
    // }, 

 
    Start: {
     
      screen : Home
    }, 

    
    Account: { screen: AccountScreen },
    
    HelpScreen: {screen: HelpScreen },

    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: Home
    },

    // Settings: {
    //   navigationOptions: {
    //     drawerIcon: ({ tintColor }) => (
    //       <Ionicons name="md-settings" style={{ color: tintColor }} />
    //     ),
    //     drawerLabel: "Settings"
    //   },
    //   screen: Settings
    // },

    ProfileScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" style={{ color: tintColor }} />
        ),
        drawerLabel: "ProfileScreen"
      },
      screen: ProfileScreen
    },

    SettingsScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "SettingsScreen"
      },
      screen: SettingsScreen
    },
    
    // ChatMain: {     
    //  navigationOptions: {
    //     drawerIcon: ({ tintColor }) => (
    //       <Ionicons name="ios-person" style={{ color: tintColor }} />
    //     ),
    //     drawerLabel: "Chat"
    //   },
    //   screen: ChatMain
    // }, 


    InterestsScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-bulb" style={{ color: tintColor }} />
        ),
        drawerLabel: "InterestsScreen"
      },
      screen: InterestsScreen
    },

    Register: {
     
      screen : Register
    },
    Register1: {
     
      screen : Register1
    }, 

 

    Login: {
     
      screen : Login
    },
    OtherProfileScreen: {
     
      screen : OtherProfileScreen
    },  
    // SearchScreen: {
     
    //   screen : SearchScreen
    // },
    // ChatRatings: {
     
    //   screen : ChatRatings
    // }, 

    // ChatMain: {
     
    //   screen : ChatMain
    // }, 


  ChatScreen: {
     
      screen : ChatScreen
    },  
    
    Dummy: {
     
      screen : Dummy
    },

    UpdateScreen: {
     
      screen : UpdateScreen
    },
    ModalScreenal: {
     
      screen : ModalScreenal
    }, 

  },

  
    

  
  
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;
