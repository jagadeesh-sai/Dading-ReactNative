import React, {Component} from 'react';
import {createMaterialTopTabNavigator,TabNavigator, TabBarBottom} from "react-navigation";
import {Text, View, StyleSheet, Platform,TouchableOpacity} from 'react-native';
// import {Ionicons} from "@expo/vector-icons";
import { Icon } from '@ant-design/react-native';
import Ionicons from 'react-native-ionicons';
import PageA from "../../views/Home/PageA";
import PageB from "../../views/Home/PageB";
import HomeScreen from "../../screens/HomeScreen";
import OtherProfileScreen from "../../screens/OtherProfileScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import ConnectionScreen from "../../screens/ConnectionScreen";
import SearchScreen from "../../screens/SearchScreen";
import DingScreen from "../../screens/DingScreen";
//import Ding_Icon from "../Ding_Icon";

export class Ding_Icon extends React.Component {
    async componentWillMount() {
        // await Expo
        //     .Font
        //     .loadAsync({Roboto: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"), Roboto_medium: require("../../assets/fonts/Roboto/Roboto-Medium.ttf"), Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")});
        // this.setState({loading: false});
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.ding}>DING!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 35,
      width: 70,
      height: 70,
      bottom: 15,
      borderWidth: 6,
      margin: 0,
      //paddingBottom : 35,
      borderColor: '#FEC107'
    },
  ding: {
     transform: [{ rotate: '330deg'}],
     fontWeight: 'bold',
     fontSize: 20,
     color: '#D6684A'
  }
});
const tabConfigs = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    backgroundColor: '#000',
            activeBackgroundColor: '#000',
    indicatorStyle: {
      display: 'none',
    }
    ,
    //showIcon: true,
    // tabStyle: {
    //   width: '100%',
    // },
    labelStyle: {
      fontSize: 11,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    style: {
      backgroundColor: '#FEC107',
       height: 53,
       width: '100%',
       borderTopWidth: 0,
       position: 'relative',
       bottom: 0,
       left: 0,
       right: 0,
       shadowColor: "#fe5722",
       shadowOffset: {
         width: 0,
         height: 0.5,
       },
       shadowOpacity: 0.22,
       shadowRadius: 0.22,
    },
  }
};
const CustomTabNavigator = createMaterialTopTabNavigator({
    PageA: {
        navigationOptions: {
            tabBarLabel: <Ionicons
                    name=
                    { Platform.OS === "ios" ? "ios-home" : "md-home" }
                     size={35} color="white"/>

        },
        screen: PageA
    },
    ConnectionScreen: {
        navigationOptions: {
            tabBarLabel:<Ionicons
            name=
            { Platform.OS === "ios" ? "ios-people" : "md-people" }
             size={35} color="white"/>
        },
        screen: ConnectionScreen
    },
    PageC: {
        navigationOptions: {
            tabBarLabel: <Ding_Icon /> 
   
        },
        screen: DingScreen
    },
    PageB: {
        navigationOptions: {
            tabBarLabel: <Ionicons
            name=
            {Platform.OS === "ios" ? "ios-compass" : "md-compass" }
             size={35} color="white"/>
        },
        screen: PageB
    },
    NotificationScreen: {
        navigationOptions: {
            tabBarLabel: <Ionicons
            name=
            {Platform.OS === "ios" ? "ios-bulb" : "md-bulb" }
             size={35} color="white"/>
        },
        screen: NotificationScreen
    }
},
tabConfigs
// {
//     tabBarPosition: "bottom"
// }, {
//     tabBarComponent: TabBarBottom
// }, {
//     tabBarOptions: {
//         style: {
            // backgroundColor: '#FEC107',
            // activeBackgroundColor: '#FEC107'
//         }
//     }
// }
);

export default CustomTabNavigator;
