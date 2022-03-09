import React, { useState } from 'react'
import { Text, Button, StyleSheet } from 'react-native'

import Estilos from './style'


export default (props) => {
    props.inicial = 0 
    props.passo = 1

    const [numero, setNumero] = useState(props.inicial) 

    function inc() {
        setNumero(numero + props.passo)
        return numero + props.passo
    }

    function dec() {
        setNumero(numero - props.passo)
        return numero - props.passo
    }

    return (
        <>
            <Text style={Estilos.txtM}>
                {props.titulo}
            </Text>
            <Button
                title="+"
                onPress={() => {
                    const n = inc()
                    props.funcao(n)
                }}
            /> 
            <Text style={Estilos.txtG}>
                {numero}
            </Text>
            <Button
                title="-"
                onPress={() => {
                    const n = dec()
                    props.funcao(n)
                }}
            /> 
        </>
    )
}