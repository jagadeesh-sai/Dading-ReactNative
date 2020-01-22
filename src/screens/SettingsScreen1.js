import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@ant-design/react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {   Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, Button} from 'react-native';
import { movies } from '../src/data';
import Poster from '../src/Poster';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Dings from '../components/Dings'

const DisableableHeaderButton = props => (
  <HeaderButton
    {...props}
    background={Touchable.Ripple('white', true)}
    IconComponent={Icon}
    iconSize={30}
    color="white"
  />
);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#00796A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
        <Item title="search" iconName="ios-search" onPress={() => alert('search')} disabled />
        <Item title="select" iconName="ios-navigate" onPress={() => alert('select')} />
      </HeaderButtons>
    ),
      headerLeft: (
        <HeaderButtons HeaderButtonComponent={DisableableHeaderButton}>
          <Item title="search" iconName="ios-menu" onPress={() => alert('search')} disabled />
          <Item title="select" iconName="ios-person" onPress={() => alert('select')} />
        </HeaderButtons>
        ),
  };

  render() {
    return (
      <View>
      <ScrollView>
            <View style={styles.container}>
              <View style = {styles.box}>
                <Text style = {styles.header}>
                    Dings
                </Text>
                <ScrollView style = {styles.dingScroll}>
                        <View style = {styles.ding}>
                            <Dings />
                        </View>
                        <View style = {styles.ding}>
                            <Dings />
                        </View>
                        <View style = {styles.ding}>
                            <Dings />
                        </View>
                        <View style = {styles.ding}>
                            <Dings />
                        </View>
                        <View style = {styles.ding}>
                            <Dings />
                        </View>
                        <View style = {styles.ding}>
                            <Dings />
                        </View>
                        <View style = {styles.ding}>
                            <Dings />
                        </View>

                </ScrollView>
                </View>

                <View  style = {styles.box}>
                  <Text style = {styles.header}>
                      My Topics
                  </Text>
                  <ScrollView contentContainerStyle={styles.scrollContent}
                // Hide all scroll indicators
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}>
                  {movies.map((movie, index) => <Poster
                  movie={movie}
                  key={index}
                  />)}
                  </ScrollView>
                  </View>

                  <View  style = {styles.box}>
                    <Text style = {styles.header}>
                        Recommendaations
                    </Text>
                    <ScrollView contentContainerStyle={styles.scrollContent}
                  // Hide all scroll indicators
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={false}
                      horizontal={true}>
                    {movies.map((movie, index) => <Poster
                    movie={movie}
                    key={index}
                    />)}
                    </ScrollView>
                    </View>

                    <View  style = {styles.box}>
                      <Text style = {styles.header}>
                          My Topics
                      </Text>
                      <ScrollView contentContainerStyle={styles.scrollContent}
                    // Hide all scroll indicators
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}>
                      {movies.map((movie, index) => <Poster
                      movie={movie}
                      key={index}
                      />)}
                      </ScrollView>
                      </View>

                    <View  style = {styles.box}>
                      <Text style = {styles.header}>
                        Tren- Ding- ers!
                      </Text>
                      <ScrollView contentContainerStyle={styles.scrollContent}
                    // Hide all scroll indicators
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}>
                      {movies.map((movie, index) => <Poster
                      movie={movie}
                      key={index}
                      />)}
                      </ScrollView>
                      </View>


            </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',

  },
  header: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
  },
  staticContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap'      //// allow multiple rows
  },
  box: {
    backgroundColor: "white",
    marginBottom: 30,
  },
  nav:{
    flexDirection: 'row',
    marginTop:23,
    backgroundColor:'#00796A',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:5
  },
  nav1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box1:{
    paddingBottom:80
  },
  ding: {
    margin: 10
  },
  dingScroll:{
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap' ,
  }


});
