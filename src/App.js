import React from "react"
import { View, StyleSheet } from 'react-native'

import Saudacao from './components/Saudacao'

import Tabuada from './components/Tabuada'

export default () => (
  <View style={style.App}>
    <Saudacao
     artigo="o" nomeUsuario="Visitante"
     nomeProjeto="Divisiveis"
     />
    <Tabuada />
  </View>
)

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
 
