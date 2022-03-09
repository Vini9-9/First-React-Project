import React, { useState } from 'react'
import { Text, Button, StyleSheet } from 'react-native'


export default ({ inicial }) => {

    const [numero, setNumero] = useState(inicial) 

    function inc() {
        setNumero(numero + 1)
    }

    function dec() {
        setNumero(numero - 1)
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