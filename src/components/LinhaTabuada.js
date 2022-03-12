import React from 'react' 
import { Text,  View} from 'react-native' 
import Estilos from './style' 


export default ({num, numDivisel}) => {

    return (
        <Text style={Estilos.subtitulo}>
            {num} / {numDivisel} = {num / numDivisel} 
        </Text>
    )
    
}