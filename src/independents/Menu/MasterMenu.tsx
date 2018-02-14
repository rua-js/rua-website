import * as React from 'react'
import { Menu, Icon, Row, Col } from 'antd'
import { StyleSheet, View, Image, Button, Text } from 'react-native'
// import { actions } from 'rua'
// import { default as R } from '../../rua'

class MasterMenu extends React.Component<Props, never> {
  render() {
    return (
      <View style={styles.container}>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={5}
            xl={5}
            xxl={4}
          >
            <Text>hi</Text>
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
            >
              <View/>
              <Menu
                mode={'horizontal'}
              >
                <Menu.Item>123</Menu.Item>
                <Menu.Item>321</Menu.Item>
                <Menu.Item>321</Menu.Item>
                <Menu.Item>321</Menu.Item>
                <Menu.Item>321</Menu.Item>
              </Menu>
            </View>
          </Col>
        </Row>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  rightPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

interface Props {

}

export default MasterMenu
