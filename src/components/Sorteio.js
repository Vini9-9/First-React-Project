import React, { useState } from 'react' 
import { Text } from 'react-native' 
import Estilo from './style' 

import ControlesSorteio from './ControlesSorteio'


export default props => {

    const [numAleatorio, setnumAleatorio] = useState(0)

    function exibirNumero(numAleatorio) {
        setnumAleatorio(numAleatorio)
    }


    return (
        <>
            <Text style={Estilo.subtitulo}>Informe o range do sorteio e clique em sortear</Text>
            <ControlesSorteio
                min={1}
                max={100}
                funcao={exibirNumero}
                ></ControlesSorteio>
            <Text style={Estilo.txtG}>O número aleatório é: {numAleatorio}</Text>
        </>
        
    )
}