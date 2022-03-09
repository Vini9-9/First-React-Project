import React from "react"
import { View, Text } from 'react-native'

import Estilo from './style'

export default (props) => (
    <View>
        <Text style={Estilo.Corpo}>
            Bem vind{props.artigo} {props.nome} :)
        </Text>
    </View>
)