import * as React from 'react'
import { Col, Menu, Row } from 'antd'
import { StyleSheet } from 'react-native'
import { View } from 'rua-ui'

class UIIntro extends React.Component
{
  static navigationOptions = {
    headerTitle: '',
  }

  render()
  {
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
              defaultOpenKeys={['primitives', 'elements', 'collections', 'placeholder', 'view', 'modules']}
            >
              <Menu.Item>Introduction</Menu.Item>
              <Menu.Divider />
              <Menu.SubMenu key={'primitives'} title={'Components'}>
                <Menu.ItemGroup title={'Primitives'}>
                  <Menu.Item key={'view'}>View</Menu.Item>
                  <Menu.Item key={'text'}>Text</Menu.Item>
                  <Menu.Item key={'touchableView'}>TouchableView</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key={'elements'} title={'Elements'}>
                  <Menu.Item>Container</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key={'collections'} title={'Collections'}>
                  <Menu.Item>1</Menu.Item>
                  <Menu.Item>2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key={'placeholder'} title={'Placeholder'}>
                  <Menu.Item>Placeholder</Menu.Item>
                  <Menu.Item>SquarePlaceholder</Menu.Item>
                  <Menu.Item>FluidPlaceholder</Menu.Item>
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

export default UIIntro
