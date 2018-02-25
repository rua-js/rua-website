import * as React from 'react'
import { Image } from 'react-native'
import { MarginedView, PaddedView, Text, View } from 'rua-ui'
import * as Animatable from 'react-native-animatable'
import { EmptyLayout } from '../layouts/index'

class Home extends React.Component<any, any>
{
  renderTitle = () => {
    return (
      <MarginedView xy={30}>
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
    )
  }

  renderSubTitle = () => {
    return (
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
    )
  }

  renderMainImage = () => {
    return (
      <Animatable.View
        animation="fadeInUp"
        delay={100}
      >
        <View
          justify={'center'}
        >
          <Image
            source={{ uri: '/imgs/index-main-placeholder.jpg' }}
            resizeMode={'contain'}
            style={{
              width: '80%',
              height: 400,
            }}
          />
        </View>
      </Animatable.View>
    )
  }

  renderDivider = () => {
    return (
      <View
      >
        <View
          flex={1}
          justify={'center'}
        >
          <Text>123</Text>
        </View>
        <View
          // flex={1}
          // width={100}
          justify={'center'}
        >
          <Text>123</Text>
        </View>
        <View
          flex={1}
          justify={'center'}
        >
          <Text>123</Text>
        </View>
      </View>
    )
  }

  render()
  {
    return (
      <EmptyLayout>
        {/* Hero Container */}
        <PaddedView y={60}>
          {this.renderTitle()}
          {this.renderSubTitle()}
          {this.renderMainImage()}
          {this.renderDivider()}
        </PaddedView>
      </EmptyLayout>
    )
  }
}

export default Home

