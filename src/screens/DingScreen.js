import React, { Component } from 'react';
import {   Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CustomHeader from "../components/CustomHeader";
import { Dropdown } from 'react-native-material-dropdown';
import DingName from "../components/DingName";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ButtonGroup} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      dingsList: [{
        name: "Madhavi Sahai",
        coins: "5000",
        rank: 1
      },{
        name: "Eyhab Fysel",
        coins: "4950",
        rank: 2
      },{
        name: "Michael Scott",
        coins: "3000",
        rank: 3
      },{
        name: "Ryan Berret",
        coins: "2800",
        rank: 4
      },{
        name: "Pam Beesley",
        coins: "2500",
        rank: 5
      },{
        name: "You",
        coins: "600",
        rank: 80
      }]
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  viewDots = () => {
    if(this.state.dingsList.length > 0) {
      return (<View style={{marginLeft: '5%'}}>
        <Text>.</Text>
        <Text>.</Text>
      </View>)
    }
  } 

  render() {
    let data = [{
        value: 'Banglore',
      }, {
        value: 'Pune',
      }, {
        value: 'Mumbai',
      }];
    
      const buttons = ['DAILY', 'WEEKLY', 'TOTAL'];
      const { selectedIndex, dingsList } = this.state;

    return (
      <ScrollView>
        <View style={{backgroundColor:'white', height:'100%'}}>
          <View style={{alignSelf:'flex-end', width:'30%',paddingRight:10}}>
            <TouchableOpacity>
              <Dropdown
                label='Country'
                data={data}
                />
            </TouchableOpacity>
          </View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={{backgroundColor:'#fec107'}}
            selectedTextStyle={{color:'#000'}}
          />
      {/* <View style={{flexDirection:'row', justifyContent:'space-between', width:'50%', alignSelf:'center'}}>
          
        <TouchableOpacity style={styles.navigate}>
        <Text style={styles.navigateText}>DAILY</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigate}>
        <Text style={styles.navigateText}>WEEKLY</Text> 
        </TouchableOpacity>      
        <TouchableOpacity style={styles.navigate}>
        <Text style={styles.navigateText}>TOTAL</Text> 
        </TouchableOpacity>
      </View> */}
        <View style={{ flex: 1, flexDirection: 'column'}}>
          <Grid style={{paddingLeft: 6}}>
            
            <Col style={{paddingLeft: 5, paddingRight: 5}}>
            <View style={styles.Outline}>
              <TouchableOpacity style={styles.Opacity} activeOpacity = { .5 }>        
                <Text style={{ marginTop: 12, fontSize: 15, textAlign:'center' , color: 'black'}}> User Leaderboard</Text>
              </TouchableOpacity>
              <View style={{marginTop: 10}}>
                {
                  dingsList.map((item, i) => {
                    if(Number(item.rank) <= 5) {
                      return <DingName name={item.name} index={item.rank} coins={item.coins} />
                    }
                  })
                }
                {
                  this.viewDots()
                }
                {
                  dingsList.map((item, i) => {
                    if(item.name === 'You') {
                      return <DingName name={item.name} index={item.rank} coins={item.coins} />
                    }
                  })
                }
              </View>
            </View>
            </Col>
            <Col style={{paddingLeft: 5, paddingRight: 5}}>
            <View style={styles.Outline}>
              <TouchableOpacity style={styles.Opacity} activeOpacity = { .5 }>        
                <Text style={{ marginTop: 12, fontSize: 15, textAlign:'center' , color: 'black'}}> SME Leaderboard</Text>
              </TouchableOpacity>
              <View style={{marginTop: 10}}>
                {
                  dingsList.map((item, i) => {
                    if(Number(item.rank) <= 5) {
                      return <DingName name={item.name} index={item.rank} coins={item.coins} />
                    }
                  })
                }
                {
                  this.viewDots()
                }
                {
                  dingsList.map((item, i) => {
                    if(item.name === 'You') {
                      return <DingName name={item.name} index={item.rank} coins={item.coins} />
                    }
                  })
                }
              </View>
            </View>
            </Col>
            
            
        </Grid>
        </View>
        
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 40}}>
          <Text style={{marginLeft:'5%', fontSize: 15, fontWeight:'bold'}}>My Rewards</Text>
        </View>
        <ScrollView horizontal style={{marginBottom: 20}}>
        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
          <View style={styles.Tab1}>
            <Image source={require('../images/reward1.jpg')} style={styles.reward}   />
            <Text style={{textAlign:'center'}}>Rewards</Text>
          </View>

          <View style={styles.Tab1}>
            <Image source={require('../images/reward2.jpg')} style={styles.reward}     />
            <Text style={{textAlign:'center'}}>Rewards</Text>
          </View>

          <View style={styles.Tab1}>
            <Image source={require('../images/reward3.jpg')} style={styles.reward}    />
            <Text style={{textAlign:'center'}}>Rewards</Text>
          </View>

          <View style={styles.Tab1}>
            <Image source={require('../images/reward1.jpg')}style={styles.reward}     />
            <Text style={{textAlign:'center'}}>Rewards</Text>
          </View>
        </View>
        </ScrollView>
        
        
            
          


      
      </View>
      </ScrollView>
    );
  }
}




// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const TabNavigator = createStackNavigator({
    
    
//   Home: { screen: HomeScreen },
//   Settings: { screen: SettingsScreen },
  
  
    
// });

const styles = StyleSheet.create({
    Tab1: {
      margin:6,
      borderRadius: 20,
      width: 90,
      height: 100,
      borderWidth:1,
      borderColor: 'grey'
    },
    Facebook: { 
      marginTop:0,
      height: 50,
      paddingBottom:15,
      backgroundColor:'#FEC107',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    Outline : { 
      borderRadius: 10,
      height: 250,
      top: 20,
      left:-3,
      borderWidth:2,
      borderColor: '#FEC107'
    },

      Outline1 : {
    
     borderRadius: 40,
     left:3,
     height: 250,
     top: 20,
  
     borderWidth:2,
     borderColor: '#FEC107'},

    Opacity:{    
     marginTop:0,
   
      height: 50,
    
      paddingBottom:15,
      
    
      backgroundColor:'#FEC107',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'},

      navigate:{
        width:60, height:30, 
         borderRadius: 10, 
         backgroundColor:'#FEC107'
      },
       
      navigateText:{
        marginLeft:'15%', 
        marginTop:'5%',
         fontSize:12,
          color:'grey'
      },
      reward:{
        width: 70,
         height: 70, 
         marginLeft:'5%',
         marginTop:'4%'
      }


 
});

// export default createAppContainer(TabNavigator);
export default HomeScreen;