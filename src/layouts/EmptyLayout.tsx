import * as React from 'react'
import { StyleSheet, View } from 'react-native'

class EmptyLayout extends React.Component<Props, never>
{
  render()
  {
    const { children } = this.props
    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

interface Props
{

}

export default EmptyLayout
