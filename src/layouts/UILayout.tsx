import * as React from 'react'
import { View } from 'rua-ui'
import { Col, Menu, Row } from 'antd'
import { StyleSheet } from 'react-native'
import * as _ from 'lodash'

class EmptyLayout extends React.Component<Props, never>
{
  render()
  {
    const { children } = this.props
    return (
      <View
        style={styles.container}
        paddingTop={45}
        direction={'column'}
      >
        <Row>
          <Col
            xxl={4}
            xl={5}
            lg={6}
            md={24}
            sm={24}
            xs={24}
          >
            <Menu
              mode={'inline'}
              defaultOpenKeys={['Components']}
              selectedKeys={[_.capitalize(_.last(window.location.hash.split('/')))]}
            >
              <Menu.Item key={'Intro'}>Introduction</Menu.Item>
              <Menu.Divider />
              <Menu.SubMenu key={'Components'} title={'Components'}>
                <Menu.ItemGroup title={'Primitives'}>
                  <Menu.Item key={'View'}>View</Menu.Item>
                  <Menu.Item key={'Text'}>Text</Menu.Item>
                  <Menu.Item key={'TouchableView'}>TouchableView</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title={'Elements'}>
                  <Menu.Item key={'Button'}>Button</Menu.Item>
                  <Menu.Item key={'Container'}>Container</Menu.Item>
                  <Menu.Item key={'Divider'}>Divider</Menu.Item>
                  <Menu.Item key={'Flag'}>Flag</Menu.Item>
                  <Menu.Item key={'Header'}>Header</Menu.Item>
                  <Menu.Item key={'Icon'}>Icon</Menu.Item>
                  <Menu.Item key={'Image'}>Image</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title={'Collections'}>
                  <Menu.Item>1</Menu.Item>
                  <Menu.Item>2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title={'Placeholder'}>
                  <Menu.Item key={'Placeholder'}>Placeholder</Menu.Item>
                  <Menu.Item key={'SquarePlaceholder'}>SquarePlaceholder</Menu.Item>
                  <Menu.Item key={'FluidPlaceholder'}>FluidPlaceholder</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key={'view'} title={'Views'}>
                  <Menu.Item>1</Menu.Item>
                  <Menu.Item>2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key={'modules'} title={'Modules'}>
                  <Menu.Item>1</Menu.Item>
                  <Menu.Item>2</Menu.Item>
                </Menu.ItemGroup>
              </Menu.SubMenu>
            </Menu>
          </Col>
          <Col
            xxl={20}
            xl={19}
            lg={18}
            md={24}
            sm={24}
            xs={24}
          >
            {children}
          </Col>
        </Row>
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
