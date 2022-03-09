import React from "react"
import { View, Text } from 'react-native'

import Estilos from './style'
import Saudacao from './Saudacao'
import Aleatorio from './Aleatorio'

export default () => (
    <>
        <Saudacao artigo="o" nome="Vinicius"></Saudacao>
        <Aleatorio min={1} max={100}></Aleatorio>
        <Aleatorio min={1} max={100}></Aleatorio>
        <Aleatorio min={1} max={100}></Aleatorio>
    </>
)