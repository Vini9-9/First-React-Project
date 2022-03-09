import React, { useState } from 'react'
import { Text, Button, StyleSheet } from 'react-native'


export default ({ inicial = 0, passo = 1}) => {

    const [numero, setNumero] = useState(inicial) 

    function inc() {
        setNumero(numero + passo)
    }

    function dec() {
        setNumero(numero - passo)
    }

    return (
        <>
            <Text style={style.txtG}>
                {numero}
            </Text>
            <Button
                title="+"
                onPress={inc}
            /> 
            <Button
                title="-"
                onPress={dec}
            /> 
        </>
    )
}

const style = StyleSheet.create({
    txtG:{
        fontSize: 30
    }
})