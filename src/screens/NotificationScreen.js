import React, { Component } from 'react';
import {Image,StyleSheet, View,TouchableOpacity, Text} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail } from 'native-base';
// import { Font, Icon } from '@ant-design/react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var shd3 = require('../assets/icons/group.jpg');
var shd2 = require('../assets/icons/3x/sme.png');
export default class App extends Component {

    async componentWillMount() {
      await Expo
          .Font
          .loadAsync({Roboto: require("../assets/fonts/Roboto/Roboto-Regular.ttf"), Roboto_medium: require("../assets/fonts/Roboto/Roboto-Medium.ttf")});
      this.setState({loading: false});
  }
   
    render()
     {
      return (
    
      
    //     <Container>
    //     <Content>
    //         <List>
    //             {/* <ListItem button >
    //                     <Thumbnail source={shd3} />
    //                     <Text style={{marginLeft:'5%'}}>New Group</Text>
    //             </ListItem> */}

    //             <ListItem button >
    //                 <Thumbnail source={require('../assets/images/pk.jpg')} />
    //                 <Text style={styles.Text}>Kapil Jaeel Dinged You  </Text> 
    //                 <Text style={styles.Text1}> TEXT  </Text> 
    //             </ListItem>

    //             <ListItem button >
    //                 <Thumbnail source={require('../assets/images/pk.jpg')} />
    //                 <Text style={styles.Text}>Kapil Jaeel Dingededededededed You  </Text> 
    //                 <Text style={styles.Text1}> TEXT  </Text> 
    //             </ListItem>
                
    //        </List>
    //        <View style={styles.separator} />
    //     </Content>
    // </Container>
    <View style={{backgroundColor:'white' ,height:'100%' }}>
    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}  > 
   
        <View style={styles.scrollContent}> 

        <Image source={shd2} style={{marginLeft: 5, height: 50, width: 53}}/>
        <View>
        <Text style={styles.Text}>Rohit sharma addedededededededed you as their connection</Text>
        </View>
    
        </View>
        <View style={styles.separator} />
        

      

        
        

        
        {/* <Text> 12 Conversations</Text>
        <View style={styles.scrollContent}>
        <View style={{marginLeft: '10%'}}> 
        <Image source={shd2} style={{marginLeft: 5, height: 30, width: 33}}/>
        <Text>Novice</Text> 
        </View>
      
        <View> 
        <Image source={shd3} style={{marginRight: '10%', height: 30, width: 33}}/> 
        <Text>Amateur</Text> 
        </View>

        </View>
        <View style={{marginLeft:'60%'}}>
        <Text>12/100 Conversations Rating >= 4</Text>
        </View> */}

        
  
</TouchableOpacity>
</View>
      );
    }
  }

  const styles = StyleSheet.create({
  
        ImageClass:
        {
            // Setting up image width.
            width: 20,

            // Setting up image height.
            height: 20,
            

        },

        Text: {
            marginLeft:'1.5%',
            fontFamily: 'Roboto',
            marginTop:'2%',
            fontSize: 15,
            justifyContent:'center'
        },

        Text1: {
          flexDirection: 'row',
    
          justifyContent:'flex-end',
      },
        separator: {
          borderWidth: 1,
          borderColor: '#FEC107',
        },
        scrollContent: {
          flexDirection: 'row',   // arrange posters in rows,
          marginTop:'3%'
        },
     
});


  