import * as React from 'react'
import { EmptyLayout } from '../layouts/index'
import { MarginedView, PaddedView, Text } from 'rua-ui'

class Home extends React.Component
{
  static navigationOptions = {
    headerTitle: '',
  }

  render()
  {
    return (
      <EmptyLayout>
        <PaddedView
          xy={60}
        >
          {/* Title */}
          <MarginedView
            xy={30}
          >
            <Text
              align={'center'}
              size={48}
              weight={'200'}
            >
              Less is more
            </Text>
          </MarginedView>
          {/* Sub-title */}
        </PaddedView>
      </EmptyLayout>
    )
  }
}

export default Home

