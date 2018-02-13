import * as React from 'react';
import { connect } from 'dva';
import { View, Text } from 'react-native'

@connect()
class Home extends React.Component {
  static navigationOptions = {
    headerTitle: '',
  }

  render() {
    return (
      <View>
        <Text>
          !!
        </Text>
      </View>
    )
  }
}

export default Home

