import * as React from 'react'
import { Col, Menu, Row } from 'antd'
import { StyleSheet } from 'react-native'
import { View, Text } from 'rua-ui'

class MasterMenu extends React.Component<Props, never>
{

  handleMenuClick = ({ key }) =>
  {
    switch (key)
    {
      case 'github.rua': {
        return window.open('https://github.com/rua-js/rua')
      }

      case 'github.rua-ui': {
        return window.open('https://github.com/rua-js/rua-ui')
      }

      default: {
        window.location.href = `#${key}`
      }
    }
  }

  render()
  {
    return (
      <View
        style={styles.container}
        direction={'column'}
      >
        <Row>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={5}
            xl={5}
            xxl={4}
          >
            <View
              style={styles.logo}
              direction={'column'}
              onPress={() => window.location.href = `#/`}
            >
              <Text>Rua.js</Text>
            </View>
          </Col>
          <Col
            xs={0}
            sm={0}
            md={18}
            lg={19}
            xl={19}
            xxl={20}
          >
            <View
              style={styles.rightPart}
              direction={'column'}
            >
              <View />
              <Menu
                mode={'horizontal'}
                onClick={this.handleMenuClick}
              >
                <Menu.Item key={'/doc/intro'}>Document</Menu.Item>
                <Menu.Item key={'/design/intro'}>Design</Menu.Item>
                <Menu.Item key={'/ui/intro'}>UI</Menu.Item>
                <Menu.SubMenu title="Github">
                  <Menu.Item key={'github.rua'}>Rua.js</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key={'github.rua-ui'}>Rua UI</Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </View>
          </Col>
        </Row>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    shadowColor: '#f0f1f2',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    height: 60,
  },
  logo: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

interface Props
{

}

export default MasterMenu
