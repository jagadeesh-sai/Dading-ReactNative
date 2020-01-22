import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';

import ChatView from './ChatView';
import ChatDings from './ChatDings';
import About from './ProfileScreen';
import Contact from './TopicProfileScreen';
import HistoricScreen from './HistoricScreen';
import ChatList from './ChatList';

// import DrawerScreen from './InterestsScreen';
import CustomHeader from "../components/CustomHeader";



const Tabs = createMaterialTopTabNavigator({
    CHATS: ChatView,
    DINGS: ChatDings,
    ChatList: ChatList
    // HISTORY: HistoricScreen
},{
 
    tabBarOptions: {
        
        activeTintColor: '#fff',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#FEC107',
            marginTop:'5%'
           
        },
        indicatorStyle: {
            backgroundColor: '#fff',
        },
    }
    
});




export default Tabs;