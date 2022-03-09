import React from "react"
import { View, Text } from 'react-native'

import Estilo from './style'

export default ({ min , max }) => {
    let numAleatorio = Math.floor(Math.random() * (max - min) ) + min;

    return (
        <View>
            <Text style={Estilo.Corpo}>
                O número aleatório é: {numAleatorio}
            </Text>
        </View>
    )
}