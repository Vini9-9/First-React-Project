import React from "react"
import { View, StyleSheet } from 'react-native'

import Header from './components/Header'
import Corpo from './components/Corpo'
import Footer from './components/Footer'

export default () => (
  <View style={style.App}>
    <Header>
    </Header>
    <Corpo>
    </Corpo>
    <Footer>
    </Footer>
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
