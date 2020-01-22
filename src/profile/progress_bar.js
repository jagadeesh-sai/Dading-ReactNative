import React from 'react';
import { Platform,StyleSheet,View} from 'react-native';
// import { AppLoading, Asset } from '@ant-design/react-native';

export default class ProgressBar extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.boundary}></View>
                <View style={styles.progressBar}>
                    <View style={styles.no}></View>
                    <View style={styles.noTriangle}></View>
                    <View style={styles.yes}></View>
                    <View style={styles.yesTriangle}></View>
                </View>
                <View style={styles.boundary}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    boundary:{
        backgroundColor: "grey",
        height: 2,
        marginTop: 5,
        marginBottom : 5,
        width: 250,
        marginLeft: 15
    },
    progressBar: {
        flexDirection: "row",
        marginLeft: 15
    },
    yes:{
        height: 15,
        width: 97,
        backgroundColor: "red",
        marginLeft: -262
    },
    yesTriangle:{
        backgroundColor:"transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderTopWidth: 7,
        borderBottomWidth: 8,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "red"
    },
    no:{
        height: 15,
        width: 250,
        marginLeft: -122,
        backgroundColor: "orange",
        opacity: 0.5
    },
    noTriangle:{
        backgroundColor:"transparent",
        borderStyle: "solid",
        borderLeftWidth: 10,
        borderTopWidth: 7,
        borderBottomWidth: 8,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "orange",
        opacity: 0.5
    }
});
