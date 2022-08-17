import React from "react";
import {Button, KeyboardAvoidingView, TextInput, View, Image, TouchableOpacity, Text} from "react-native";
import styles from './Login.styles'

export function Login({navigation}){
    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <View style={styles.logoArea}>
                <Image
                    source={require('../../../assets/octus.png')}
                    style={{width: '200%', height: 300}}
                    resizeMode={'center'}/>
            </View>

            <View style={styles.form}>
                <TextInput
                    placeholder="CPF/CNPJ"
                    keyboardType='numeric'
                    style={styles.inputUser}
                />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={styles.inputPassword}
                />

                <TouchableOpacity
                    onPress={()=> navigation.navigate('Banco')}
                    style={styles.btnLogin}
                >
                    <Text style={styles.btnText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Registro')}
                    style={styles.btnRegister}
                >
                    <Text>Solicitar conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
