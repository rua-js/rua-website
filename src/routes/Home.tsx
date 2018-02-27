import * as React from 'react'
import { Image, View as RNView } from 'react-native'
import { MarginedView, PaddedView, Text, View, Container } from 'rua-ui'
import * as Animatable from 'react-native-animatable'
import { EmptyLayout } from '../layouts/index'

class Home extends React.Component<any, any>
{
  renderTitle = () => {
    return (
      <View
        justify={'center'}
        margin={30}
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
      </View>
    )
  }

  renderSubTitle = () => {
    return (
      <View
        justify={'center'}
        marginTop={10}
        marginBottom={60}
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
      </View>
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
        align={'center'}
        paddingY={60}
      >
        <View
          flex={1}
          justify={'center'}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}
        />
        <View
          paddingX={16}
          justify={'center'}
        >
          <Text
            color={'red'}
          >Six Design Principal</Text>
        </View>
        <View
          flex={1}
          justify={'center'}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
          }}
        />
      </View>
    )
  }

  render()
  {
    return (
      <EmptyLayout>
        {/* Hero Container */}
        <Container>
          <View
            direction={'column'}
            paddingY={60}
          >
            {this.renderTitle()}
            {this.renderSubTitle()}
            {this.renderMainImage()}
            {this.renderDivider()}
          </View>
        </Container>
        {/*  */}
      </EmptyLayout>
    )
  }
}

export default Home

