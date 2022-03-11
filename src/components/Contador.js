import React, { useState } from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'

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

            <View style={style.Contador}>
                <Button
                    title="+"
                    onPress={() => {
                        const n = inc()
                        props.funcao(n)
                    }}
                /> 
                <Text style={Estilos.numero}>
                    {numero}
                </Text>
                <Button style={style.BotaoNumero}
                    title="-"
                    onPress={() => {
                        const n = dec()
                        props.funcao(n)
                    }}
                /> 
            </View>
        </>
    )
}

const style = StyleSheet.create({
    Contador: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

})