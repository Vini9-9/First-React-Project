import React from "react"
import { View, Text , TextInput } from 'react-native'
import { Component } from "react/cjs/react.production.min"

import Estilos from './style'

export default class Saudacao extends Component {
    
    state = {
        artigo: this.props.artigo,
        nomeUsuario: this.props.nomeUsuario
    }

    atualizaArtigo = (novoArtigo) => {
        
        novoArtigo = novoArtigo.length > 1 ? novoArtigo[0] : novoArtigo; 

        this.setState({ 
            artigo: novoArtigo,
        })
    }

    atualizaNome = (novoNomeUsuario) => {
        this.setState({ 
            nomeUsuario: novoNomeUsuario
        })
    }


    render () {
        return (
        <View style={Estilos.saudacao}>
            <Text style={Estilos.txtG}>
                Bem vind{this.state.artigo} {this.state.nomeUsuario} :)
            </Text>
            <View style={Estilos.viewInput}>
                <TextInput style={Estilos.txtInput}
                    placeholder="Artigo"
                    value = {this.state.artigo}
                    onChangeText={this.atualizaArtigo}
                /> 
                <TextInput style={Estilos.txtInput}
                    placeholder="Nome"
                    value = {this.state.nomeUsuario}
                    onChangeText={this.atualizaNome}
                />
            </View>
        </View>
        )}

}