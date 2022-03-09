import React from "react"
import { View, StyleSheet } from 'react-native'

import Header from './components/Header'
import Corpo from './components/Corpo'
import Contador from './components/Contador'
import Footer from './components/Footer'

export default () => (
  <View style={style.App}>
    <Contador inicial={100} passo={1}>
    </Contador>
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
