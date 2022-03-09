import React from "react"
import { View, Text } from 'react-native'

import Estilos from './style'

export default (props) => (
    <View>
        <Text style={Estilos.txtG}>
            Bem vind{props.artigo} {props.nome} :)
        </Text>
    </View>
)