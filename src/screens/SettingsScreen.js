import React from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,TextInput,View,TouchableHighlight, TouchableOpacity} from 'react-native';
import {Icon} from '@ant-design/react-native';
import CustomHeader from "../components/CustomHeader";
import Ionicons from 'react-native-ionicons';
import ActionSheet from 'react-native-actionsheet';
import { createStackNavigator } from 'react-navigation'; 



const options = [
  'Cancel', 
  <View style={{flex:1, flexDirection:'row'}}>
  <Ionicons
      name={'logo-whatsapp'}
      color = "#ff9f00"
      size={22}
      style={{padding: 10}}
    /><Text style={{fontSize: 18, marginTop:10}}>Whatsapp</Text></View>, 
  <View style={{flex:1, flexDirection:'row'}}>
  <Ionicons
      name={'logo-instagram'}
      color = "#ff9f00"
      size={25}
      style={{padding: 10}}
    /><Text style={{fontSize: 18, marginTop:10}}>Instagram</Text></View>,
    <View style={{flex:1, flexDirection:'row'}}>
    <Ionicons
        name={'logo-facebook'}
        color = "#ff9f00"
        size={25}
        style={{padding: 10}}
      /><Text style={{fontSize: 18, marginTop:10}}>Facebook</Text></View>, 
      <View style={{flex:1, flexDirection:'row'}}>
      <Ionicons
          name={'mail'}
          color = "#ff9f00"
          size={22}
          style={{padding: 10}}
        /><Text style={{fontSize: 18, marginTop:10}}>Gmail</Text></View>,
        <View style={{flex:1, flexDirection:'row'}}>
      <Ionicons
        name={'bluetooth'}
        color = "#ff9f00"
        size={22}
        style={{padding: 10}}
      /><Text style={{fontSize: 18, marginTop:10}}>Bluetooth</Text></View>
];

export default class SettingsScreen extends React.Component {
  showActionSheet = () => {
    this.ActionSheet.show()
  }
  render() {

      return(
        <View style={styles.container}>
          
          <View style ={styles.menuBar}>
          <Ionicons name={"md-menu"} size={40}
             onPress={() => navigation.openDrawer()}
            color="#fff" style={{marginLeft: 20, marginTop: 10}}/>
            <View style = {styles.searchbar}>
              <TextInput
                placeholder="Search" placeholderTextColor="#fff" style={{marginLeft: 5, width: "70%"}}
              />
              <Ionicons
                name={'search'}
                color = "white"
                size={30}
                style={{padding: 10}}
              />
            </View>
            
          </View>
          <ScrollView>
          <View>
            <View style={styles.container1}>
                <View style={styles.subcontainer1}>
                  <Image source={require("../assets/images/pk.jpg")} style={styles.circle}/>
                </View>
                <View style={styles.subcontainer1}>
                    <Text style={{marginTop: 0, fontSize: 20}}>
                        Harsh Bali
                    </Text>
                    <Text style={{marginTop: 2, color: "grey"}}>
                        View your profile
                    </Text>
                </View>
            </View>

            <View style={styles.greyLine}>
            </View>

            <View style={styles.container2}>
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'md-contacts'}
                          size = {30}
                          color = '#fea000'
                      />
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 16, color: "#666"}}>Refer a friend</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'ribbon'}
                          size = {30}
                          color = '#fea000'
                      />
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 16, color: "#666"}}>Get Certified</Text>
                    </View>
                    <View style={styles.subcontainer2} >
                      
                      <Ionicons
                          name = {'help-circle-outline'}
                          size = {30}
                          color = '#fea000'
                      />
                      <TouchableOpacity onPress={this.showActionSheet}>
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 16, color: "#666"}}>Suggest a Topic</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'md-contact'}
                          size = {30}
                          color = '#fea000'
                      />
                      <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('Account')
                      }>
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 20, color: "#666"}}>Account</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'md-create'}
                          size = {30} 
                          color = '#fea000'
                      />
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 20, color: "#666"}}>Edit Profile</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'md-lock'}
                          size = {30}
                          color = '#fea000'
                      />
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 25, color: "#666"}}>Privacy</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'md-notifications-outline'}
                          size = {30}
                          color = '#fea000'
                      />
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 21, color: "#666"}}>Notifications</Text>
                    </View>
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'md-information-circle-outline'}
                          size = {30}
                          color = '#fea000'
                      />
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 18, color: "#666"}}>About</Text>
                    </View>

                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'hammer'}
                          size = {30}
                          color = '#fea000'
                      />
                      
                      <TouchableOpacity onPress={() =>
                        this.props.navigation.navigate('HelpScreen')
                      }>
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 18, color: "#666"}}>Help</Text>
                      </TouchableOpacity>
                    </View>
                    
                    <View style={styles.subcontainer2}>
                      <Ionicons
                          name = {'md-power'}
                          size = {30}
                          color = '#fea000'
                      />
                      <Text style={{fontSize: 18, marginTop: 0, marginLeft: 20, color: "#666"}}>Log Off</Text>
                    </View>
            </View>
          </View>
          </ScrollView>

          <ActionSheet
            ref={o => this.ActionSheet = o}
            title={<Text style={{color: '#000', fontSize: 18}}>Suggest a Topic</Text>}
            options={options}
            cancelButtonIndex={0}
            destructiveButtonIndex={4}
            onPress={(index) => { /* do something */ }}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",

  },
  container1: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20
  },
  subcontainer1:{
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: 10
  },
  container2: {
    flexDirection: "column"
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  greyLine:{
    width: 350,
    height: 1,
    backgroundColor: "#ccc",
    marginLeft: 40
  },
  subcontainer2: {
    flexDirection: "row",
    marginLeft: 40,
    marginTop: 15,
    marginBottom: 15
  },
  menuBar:{
    backgroundColor: '#FEC107',
    padding: 5,
    paddingTop: 30,
    flexDirection: "row"
  },
  searchbar: {
    flexDirection: "row",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginLeft: 5
  }
});
