import React from "react"
import { View, Text } from 'react-native'

import Estilo from './style'
import HelloWorld from './HelloWorld'
import Saudacao from './Saudacao'
import Aleatorio from './Aleatorio'

export default () => (
    <View>
        <HelloWorld />
        <Text style={Estilo.Corpo}>
            Componente Corpo
        </Text>
        <Saudacao artigo="o" nome="Vinicius"></Saudacao>
        <Aleatorio min={1} max={100}></Aleatorio>
        <Aleatorio min={1} max={100}></Aleatorio>
        <Aleatorio min={1} max={100}></Aleatorio>
    </View>
)