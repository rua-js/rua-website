import * as React from 'react'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
import { actions } from 'rua'

class UIIntro extends React.Component {
  static navigationOptions = {
    headerTitle: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
        <Text>UIIntro</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default UIIntro
