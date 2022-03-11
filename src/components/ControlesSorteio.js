import React, { useState } from 'react' 
import { View, Button, StyleSheet } from 'react-native' 
import Estilo from './style' 

import Contador from './Contador'

export default props => {

    const [numMin, setNumMin] = useState(1)
    const [numMax, setNumMax] = useState(100)
    
    function exibirMax(numMax) {
        setNumMax(numMax)
    }

    function exibirMin(numMin) {
        setNumMin(numMin)
    }

    function gerarNumeros(min, max) {
        let numAleatorio = Math.floor(Math.random() * (max - min) ) + min;
        return numAleatorio
    }


    return (
        <>
            <Contador 
                titulo="Max" inicial={props.max}
                passo={1} funcao={exibirMax}>
            </Contador>
            <Contador
                titulo="Min" inicial={props.min}
                passo={1} funcao={exibirMin}>
            </Contador>
            <View style={style.Botao}>
                <Button 
                    title="Sortear"
                    onPress={() => {
                        const n = gerarNumeros(numMin ,numMax)
                        props.funcao(n)
                    }}
                />
            </View>
        </>

    )
}

const style = StyleSheet.create({
    Botao: {
        paddingTop: 10
    }
})