import React from 'react';
import {Image,TouchableOpacity,Modal,ScrollView,StyleSheet,Text,TextInput,View,AsyncStorage,TouchableHighlight,ToolbarAndroid, Alert} from 'react-native';
import Ionicons from 'react-native-ionicons';
import { Button, Header } from 'react-native-elements';
import ProgressBar from '../components/ProgressBar'
var shd1 = require('../assets/icons/asset2.png');
var shd2 = require('../assets/icons/h1.png');
var shd3 = require('../assets/icons/h3.png');

export default class AllTopics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            topics: [{
                name: "Football",
                stars: '4.5',
                conversations: 12,
                progress: 20
            },{
                name: "Painting",
                stars: '4.0',
                conversations: 10,
                progress: 30
            }]
        }
    }

    toggleModal = (visible) => {
        console.log('visible', visible);
        this.setState({ modalVisible: visible });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.modalVisible !== this.state.modalVisible) {
          this.setState({ modalVisible: nextProps.modalVisible });
        }
    }

    // static getDerivedStateFromProps(props, state) {
       
    //     if (props.modalVisible !== state.modalVisible) {
    //       return {
    //         modalVisible: props.modalVisible,
    //       };
    //     }
    //     return false;
    // }

    render(){
        const { topics, modalVisible } = this.state;
        console.log('modalVisible', modalVisible);
        return (
            <Modal animationType = {"slide"} transparent = {false} visible = {this.state.modalVisible}>
                <View style = {styles.modal}>
                    <Header
                        backgroundColor='#fea000'
                        centerComponent={{ text: 'All Topics', style: { color: '#fff', fontSize: 18 } }}
                        rightComponent={{ icon: 'close', color: '#fff', onPress: () => { this.toggleModal(!this.state.modalVisible)} }}
                    />
                    {topics.map((item,i) => {
                      return (
                        <View style={styles.topicList} key={i}>
                            <View >
                            <View style={styles.scrollContent}>
                            <Text style={styles.font17}>{item.name}</Text>
                            <View style={styles.starIcon}>
                            <Ionicons
                            name={'md-star'}
                            value={'ddd'}
                            color = "#FFC006"
                            size={30}>
                            </Ionicons>
                            <Text style={styles.starText}>{item.stars}</Text>
                            </View>
                            <Image source={shd2} style={{marginLeft: 5, height: 20, width: 23}}/>
                            </View>
                            <Text style={{marginLeft:1, marginBottom:10}}> {item.conversations} Conversations</Text>

                            <View style={styles.scrollContent}>
                            <View style={{marginLeft: '5%'}}> 
                                <Text style={styles.textstyle}>Novice</Text> 
                                <Image source={shd3} style={{marginLeft: 5, height: 20, width: 23}} />
                            </View>
                            <ProgressBar progress={item.progress} />
                            <View> 
                                <Text style={styles.textstyle}>Amateur</Text> 
                                <Image source={shd2} style={{marginRight: '10%', height: 20, width: 23}} />
                            </View>
                            </View>
                            <View style={{marginLeft:'55%'}}>
                            <Text style={styles.textstyle}>12/100 Conversations Rating >= 4</Text>
                            </View>
                            </View>
                        </View>
                      )
                    })
                }
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    
        scrollContent: {
            flexDirection: 'row',   // arrange posters in rows
          },
          star: {
            marginTop: -6
            
          },

          
        starIcon: {
            position: 'relative',
            textAlign: 'center',
            top: -5
        },
        starText: {
            fontSize: 8,
            color: '#000',
            left: '50%',
            marginLeft: -5,
            top: '50%',
            marginTop: -5,
            position: 'absolute'
        },
        modal: {
            flex: 1,
            marginTop: -20
         },
         ModalHeader: {
             backgroundColor: '#fec107',
             padding: 10,
             textAlign: 'center',
             position: 'relative'
         },
         ModalHeaderText: {
            fontSize: 20
         },
         ModalClose: {
             position: 'absolute',
             right: 0,
             top: -30,
             zIndex: 100
         },
         topicList: {
             borderBottomWidth: 1,
             borderBottomColor: '#ccc',
             paddingTop: 10,
             paddingBottom: 10,
             padding:10
         }
});