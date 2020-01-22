import React from 'react';
import {Image,Platform,StyleSheet,Text,View} from 'react-native';
import { Icon } from '@ant-design/react-native';

export default class ComfortLevel extends React.Component{
    render(){
        return (
            <View style={styles.circle}>
            {/* <Image source={}/> */}
                <Icon.Ionicons
                    name = {'md-contacts'}
                    size = {25}
                    color = 'red'
                    style = {styles.contacts}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circle:{
        height: 35,
        width: 35,
        borderRadius: 17.5,
        borderColor: "red",
        borderWidth: 1
    },
    contacts: {
        position: 'absolute',
        top: 4,
        left: 6
    }
});