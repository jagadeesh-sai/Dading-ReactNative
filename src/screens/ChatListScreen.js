import React from 'react';
//import { Icon } from 'expo';
import { Icon } from '@ant-design/react-native';
import Touchable from 'react-native-platform-touchable';
import ProfileScreen from '../screens/ProfileScreen';
import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Button} from 'react-native';
import ChatList from '../components/ChatList'
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createDrawerNavigator} from 'react-navigation';

export default class ConnectionScreen extends React.Component {
  openChatBox = () => {
    this.props.navigation.navigate('ChatsBox');
  }
  render() {
    return (

    <View style = {styles.container}>
    <View style ={styles.menuBar}>
      <View style = {styles.menuIcons}>
        <Icon.FontAwesome
               name={'search'}
               color = "white"
               size={30}
               style={{padding: 10}}
               />
               <Icon.FontAwesome
                      name={'ellipsis-v'}
                      color = "white"
                      size={30}
                      style={{padding: 10}}
                      />

      </View>
      <View style = {styles.tabBar}>
            <Text style={styles.tabText}>CHATS</Text>
            <Text style={styles.tabText}>DINGS</Text>
            <Text style={styles.tabText}>HISTORY</Text>
      </View>
    </View>
    <View  style = {styles.box}>
          <ScrollView contentContainerStyle={styles.scrollContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>
                  <ChatList  openChatBox = {this.openChatBox}/>

            </ScrollView>
      </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  tabText:{
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      margin: 4
  },
  tabBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuBar:{
      backgroundColor: '#FEC107',
      padding: 5,
      paddingTop: 15
  },
menuIcons:{
  flexDirection: 'row',
  justifyContent: 'flex-end',
  padding: 3
},
  scrollContent: {
   // arrange posters in rows
   flexWrap: 'wrap',       // allow multiple rows
 },
  box: {
    backgroundColor: "white",
    padding: 2
  },
});
