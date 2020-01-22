import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, createStackNavigator} from 'react-native';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Dings from '../components/Dings'
import Topics from '../components/Topics'
import Recommendations from '../components/Recommendations'

import CustomHeader from "../components/CustomHeader";
import PageA from "../views/Home/PageA";



export default class TopicProfileScreen extends React.Component {


  render() {
    return (
    <ScrollView>
    <View style = {styles.container}>
    <View style={{ flex: 1, backgroundColor: "#FEC107" }}>
        <CustomHeader navigation={this.props.navigation} />
      </View>

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Tren-ding Topics
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
                  <Topics topicType ="football" />
                  <Topics topicType ="cricket" />
                  <Topics topicType ="painting" />
                  <Topics topicType ="football" />
                  <Topics topicType ="game" />
            </ScrollView>
      </View>

      <View  style = {styles.box}>
        <Text style = {styles.header}>
          Recommended Topics!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Topics topicType ="football" />
          <Topics topicType ="cricket" />
          <Topics topicType ="painting" />
          <Topics topicType ="football" />
          <Topics topicType ="game" />
            </ScrollView>
      </View>     

       <View  style = {styles.mdhe}>
        <Text style = {styles.header1}>
          All Topics!
        </Text>
          <ScrollView contentContainerStyle={styles.scrollContent}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <Topics topicType ="football" />
          <Topics topicType ="cricket" />
          <Topics topicType ="painting" />
          
            </ScrollView>
      </View> 
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
  },
  ding: {
    padding: 20
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
  },
  staticContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap'      //// allow multiple rows
  },
  header: {
    fontSize:20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  header1: {
    fontSize:18,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingRight: 70
  },
  box: {
    backgroundColor: "white",
    marginBottom: 4,
    padding: 6
  },
  tagline: {
    fontSize: 16,
    left: 155,
    fontStyle: 'italic',
    color: 'grey'
  },
  mdhe: {
    paddingLeft: 60,
    backgroundColor: "white",
    marginBottom: 4,
    paddingBottom: 100
    
  }
});
