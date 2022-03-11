import React from "react"
import { View, StyleSheet } from 'react-native'

import Saudacao from './components/Saudacao'

import Sorteio from './components/Sorteio'

export default () => (
  <View style={style.App}>
    <Saudacao artigo="o" nomeUsuario="Visitante"></Saudacao>
    <Sorteio></Sorteio>
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
