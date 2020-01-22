import React from 'react';
import { ListItem, Header } from 'react-native-elements'
import { View } from 'native-base';
import Ionicons from 'react-native-ionicons';

const list = [
    {
      title: 'Privacy',
      icon: ''
    },
    {
      title: 'Language',
      icon: '',
      rightTitle: 'English'
    },
    {
        title: 'Blocked Users',
        icon: ''
    },
    {
        title: 'Password',
        icon: ''
    },
    {
        title: 'Delete My Account',
        icon: ''
    }
  ];

export default class AccountScreen extends React.Component {
    render() {
        return (
            <View>
                <Header
                leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => {
                    this.props.navigation.navigate('SettingsScreen')
                }}}
                centerComponent={{ text: 'Account', style: { color: '#fff', fontSize: 18} }}
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