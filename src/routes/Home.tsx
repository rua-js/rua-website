import * as React from 'react'
import { Text } from 'react-native'
import { EmptyLayout } from '../layouts/index'

class Home extends React.Component
{
  static navigationOptions = {
    headerTitle: '',
  }

  render()
  {

    return (
      <EmptyLayout>
        <Text>1</Text>
      </EmptyLayout>
    )
  }
}

export default Home

