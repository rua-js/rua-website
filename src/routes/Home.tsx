import * as React from 'react';
import { Menu, Icon } from 'antd'
import { View, Text } from 'react-native'

class Home extends React.Component {
  static navigationOptions = {
    headerTitle: '',
  }

  render() {
    return (
      <View>
        <Menu>
          <Menu.Item>123</Menu.Item>
          <Menu.Item>321</Menu.Item>
        </Menu>
      </View>
    )
  }
}

export default Home

