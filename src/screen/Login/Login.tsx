import React from "react";
import {Button, KeyboardAvoidingView, TextInput, View, Image, TouchableOpacity, Text} from "react-native";
import styles from './Login.styles'

export function Login({navigation}){
    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <View>
                <Image source={require('../../../assets/rn.png')} style={styles.logo}/>
            </View>

            <View style={styles.form}>
                <TextInput
                    placeholder="Usuario"
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
                    <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Registro')}
                    style={styles.btnRegister}
                >
                    <Text>Solicitar uma conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
