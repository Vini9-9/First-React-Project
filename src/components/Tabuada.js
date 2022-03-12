import React, { Component } from 'react' 
import { Text, TextInput, Button, View} from 'react-native' 
import Estilos from './style'

import LinhaTabuada from './LinhaTabuada'


export default class Tabuada extends Component {

    state = {
        numUsuario: this.props.numUsuario,
        numDivisiveis: []
    }

    atualizarNumero = (num) => {

        this.setState({ 
            numUsuario: +num,
            numDivisiveis: []
        })
    }

    listarDivisiveis = () => {
        this.atualizarNumero
        const num = this.state.numUsuario
        let numDivisiveis = []

        for (let index = 1; index <= num; index++) {
            num % index == 0 ? numDivisiveis.push(index) : false;
        }
        
        this.setState({ numDivisiveis }) 
    }

    exibirDivisiveis = () => {
        const num = this.state.numUsuario
        const divisiveis = this.state.numDivisiveis

        return divisiveis.map(numDivisel => {
            return <LinhaTabuada key={numDivisel} num={num} numDivisel={numDivisel}/>
        })
    }


    render() {
        return (
            <>
                <Text style={Estilos.subtitulo}>Informe um número que deseja saber os divisiveis:</Text>
                <TextInput 
                    keyboardType = 'numeric'
                    style = {Estilos.txtInput}
                    placeholder = "Número"
                    value = {this.state.numUsuario}
                    onChangeText= {this.atualizarNumero}
                />
                <Button
                    title = 'Gerar Tabuada'
                    onPress = {this.listarDivisiveis}
                />
                <View>
                    {this.exibirDivisiveis()}
                </View>
            </>
            
        )
    }
    
}