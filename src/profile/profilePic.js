import React from 'react';
import {Image,Platform,StyleSheet,Text,View} from 'react-native';
import { Icon } from '@ant-design/react-native';

export default class ProfilePic extends React.Component{
    render(){
        return (
            <View style={styles.circleContainer}>
                <Image source={require("../assets/images/pk.jpg")} style={styles.circle}/>
              
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleContainer:{
        marginTop: 50
    },
    circle:{
        height: 84,
        width: 84,
        borderRadius: 80,
        borderColor: "red",
        borderWidth: 1
    },
    camera: {
        position: 'absolute',
        top: 80,
        left: 90
    }
});
