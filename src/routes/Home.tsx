import * as React from 'react'
import { Image } from 'react-native'
import { MarginedView, PaddedView, Text } from 'rua-ui'
import * as Animatable from 'react-native-animatable'
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
        <PaddedView
          y={60}
        >
          {/* Title */}
          <MarginedView
            xy={30}
          >
            <Animatable.View
              animation="fadeIn"
              delay={100}
              duration={300}
            >
              <Text
                align={'center'}
                size={48}
                weight={'200'}
              >
                Less is more
              </Text>
            </Animatable.View>
          </MarginedView>
          {/* Sub-title */}
          <MarginedView
            top={10}
            bottom={60}
          >
            <Animatable.View
              animation="fadeIn"
              delay={400}
              duration={500}
            >
              <Text
                align={'center'}
                size={21}
                color={'#aeaeae'}
                weight={'200'}
              >
                The All-Platform Unified React Library For Web Artisans
              </Text>
            </Animatable.View>
          </MarginedView>
          {/* Main image */}
          <Animatable.View
            animation="fadeInUp"
            delay={100}
            duration={500}
          >
            <Image
              source={{ uri: '/imgs/index-main-placeholder.jpg' }}
              resizeMode={'contain'}
              style={{
                width: 800,
                height: 600,
              }}
            />
          </Animatable.View>
        </PaddedView>
      </EmptyLayout>
    )
  }
}

export default Home

