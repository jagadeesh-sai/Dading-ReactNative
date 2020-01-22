import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ant-design/react-native';
import Touchable from 'react-native-platform-touchable';

import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Button} from 'react-native';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Dings from '../components/Dings'
import PieChartNew from '../components/PieChartNew'
import ProgressBar from '../components/ProgressBar'
import Recommendations from '../components/Recommendations'
//import {navigation} from 'react-native-navigation';
import { withNavigation } from 'react-navigation';

var shd2 = require('../assets/icons/h1.png');
 class InterestScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FEC107',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

  };

  render() {
    return (
    <ScrollView>
        <View>
            <Text>My topics</Text>
        </View>
    <PieChartNew />
    <View style={styles.separator} />
   
    <View>
      <View >
      <View style={styles.scrollContent}> 

      <Text>Topic_Name</Text>
      <View style={styles.star}>
          <Icon
            name={'md-star'}
            color = "#FFC006"
            size={40}
           
          />
        </View>
      <Image source={shd2} style={{marginLeft: 5, height: 30, width: 33}}/>
      </View>
      <Text> 12 Conversations</Text>
<View style={styles.scrollContent}>
          <View style={{marginLeft: '10%'}}> 
              <Image source={shd2} style={{marginLeft: 5, height: 30, width: 33}}/>
              <Text>Novice</Text> 
          </View>
           <ProgressBar />
           <View> 
              <Image source={shd2} style={{marginRight: '15%', height: 30, width: 33}}/> 
              <Text>Amateur</Text> 
          </View>
          
</View>
<View style={{marginLeft:'60%'}}>
  <Text>12/100 Conversations Rating >= 4</Text>
</View>

</View>
<View style={styles.separator} />


<View >
      <View style={styles.scrollContent}> 

      <Text>Topic_Name</Text>
      <View style={styles.star}>
          <Icon
            name={'md-star'}
            color = "#FFC006"
            size={40}
           
          />
        </View>
      <Image source={shd2} style={{marginLeft: 5, height: 30, width: 33}}/>
      </View>
      <Text> 12 Conversations</Text>
<View style={styles.scrollContent}>
          <View style={{marginLeft: '10%'}}> 
              <Image source={shd2} style={{marginLeft: 5, height: 30, width: 33}}/>
              <Text>Novice</Text> 
          </View>
           <ProgressBar />
           <View> 
              <Image source={shd2} style={{marginRight: '15%', height: 30, width: 33}}/> 
              <Text>Amateur</Text> 
          </View>
          
</View>
<View style={{marginLeft:'60%'}}>
  <Text>12/100 Conversations Rating >= 4</Text>
</View>

</View>
<View style={styles.separator} />

<View >
      <View style={styles.scrollContent}> 

      <Text>Topic_Name</Text>
      <View style={styles.star}>
          <Icon
            name={'md-star'}
            color = "#FFC006"
            size={40}
           
          />
        </View>
      <Image source={shd2} style={{marginLeft: 5, height: 30, width: 33}}/>
      </View>
      <Text> 12 Conversations</Text>
<View style={styles.scrollContent}>
          <View style={{marginLeft: '10%'}}> 
              <Image source={shd2} style={{marginLeft: 5, height: 30, width: 33}}/>
              <Text>Novice</Text> 
          </View>
           <ProgressBar />
           <View> 
              <Image source={shd2} style={{marginRight: '15%', height: 30, width: 33}}/> 
              <Text>Amateur</Text> 
          </View>
          
</View>
<View style={{marginLeft:'60%'}}>
  <Text>12/100 Conversations Rating >= 4</Text>
</View>

</View>
<View style={styles.separator} />



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
  star: {
    marginTop: -6
    
  },
  separator: {
    marginVertical: 30,
    borderWidth: 1,
    borderColor: '#DCDCDC',
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
  }

});
export default withNavigation(InterestScreen);

