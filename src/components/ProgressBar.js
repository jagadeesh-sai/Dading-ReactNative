import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';


 
import ProgressBarAnimated from 'react-native-progress-bar-animated';
 
export default class ProgressBar extends React.Component {
 
  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  }
 
  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.progress !== this.state.progress) {
      this.setState({ progress: nextProps.progress });
    }
  }
 
  render() {
    const barWidth = Dimensions.get('screen').width - 270;
    const progressCustomStyles = {
      backgroundColor: '#fe5722',
      borderColor: '#797572',
      borderRadius: 0,
      height: 20
    };
   


    const progressBar = {
      position: 'absolute',
      zIndex: 1,
      left: 0,
      backgroundColor: '#fe5722',
      top:0,
      bottom: 0,
      width: '20%'
    }
 
    return (
      <View style={styles.container}>
        <View style={styles.progressBorder}>
      
          {/* <ProgressBarAnimated 
            {...progressCustomStyles}
            value={this.state.progress}
            backgroundColorOnComplete="#6CC644"
          /> */}
          <View style={progressBar} />
        </View> 
    
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 5,
    padding: 15,
  },
 
  separator: {
    marginVertical: 30,
    borderWidth: 1,
    borderColor: '#DCDCDC',
  },
  progressBorder: {
    borderWidth: 1,
    borderColor: '#797572',
    position: 'relative',
    backgroundColor: '#fadf98',
    width: '100%',
    height: 22
  }
  
});