import React from 'react';
import { ListItem, Header } from 'react-native-elements'
import { View } from 'native-base';
import Ionicons from 'react-native-ionicons';

const list = [
    {
      title: 'FAQ',
      icon: ''
    },
    {
      title: 'Contact Us',
      icon: ''
    },
    {
        title: 'Report',
        icon: ''
    },
    {
        title: 'Terms and Privacy Policy',
        icon: ''
    }
  ];

export default class HelpScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => {
                    this.props.navigation.navigate('SettingsScreen')
                }}}
                centerComponent={{ text: 'Help', style: { color: '#fff', fontSize: 18} }}
                containerStyle={{
                    backgroundColor: '#fec107',
                    marginTop: -20
                  }}
                />
                {
                    list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        rightTitle={item.rightTitle}
                        leftIcon={{ name: item.icon }}
                        containerStyle={{borderBottomWidth: 1, borderBottomColor: '#ddd'}}
                    />
                    ))
                }
            </View>
        )
    }
}