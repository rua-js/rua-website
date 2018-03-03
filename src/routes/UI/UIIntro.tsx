import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'rua-ui'

import { UILayout } from '../../layouts'

class UIIntro extends React.Component
{
  render()
  {
    return (
      <UILayout>
        <Text>hi</Text>
      </UILayout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default UIIntro
