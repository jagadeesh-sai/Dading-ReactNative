import React from 'react';
// import { Icon } from 'expo';
import { Icon } from '@ant-design/react-native';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        color = "white"
        size={this.props.size}
      
        
      />
      
    );
  }
}
