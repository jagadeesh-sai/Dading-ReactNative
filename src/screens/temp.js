import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import { Icon } from '@ant-design/react-native';
// import { WebBrowser } from '@ant-design/react-native';
import { movies } from '../src/data';
import Poster from '../src/Poster';
import Ionicons from 'react-native-ionicons';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  open_drawer(){
    alert("Hii");
  }
  render() {
    return (
    <View>
        <View style = {styles.nav}>
        <TouchableOpacity onPress={() => this.open_drawer()}>
                <Ionicons
                  name="md-menu"
                  color = "white"
                  size={50}
                  />
          </TouchableOpacity>

          <Ionicons
            name="md-person"
            color = "white"
            size={50}
            />

            <View style={styles.nav1}>
                <Ionicons
                  name="md-search"
                  color = "white"
                  size={30}
                  />
                  <Ionicons
                    name="md-navigate"
                    color = "white"
                    size={40}
                    />
              </View>

        </View>
        <ScrollView>
              <View style={styles.container}>
                <View style = {styles.box}>
                  <Text style = {styles.header}>
                      Dings
                  </Text>
                  <ScrollView contentContainerStyle={[styles.scrollContent, styles.staticContent]}
          		  // Hide all scroll indicators
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={false}>
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

                      <View  style = {[styles.box, styles.box1]}>
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
    marginTop: 30,
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
  }
});
