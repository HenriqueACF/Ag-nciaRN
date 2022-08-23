import React from "react";
import styles from './Perfil.styles'
import {ImageBackground, KeyboardAvoidingView, View} from "react-native";

export function Perfil({navigation}){
    return(
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >

            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
