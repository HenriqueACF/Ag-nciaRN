import React from "react";
import {Button, KeyboardAvoidingView, TextInput, View, Image, TouchableOpacity, Text} from "react-native";
import styles from './Registro.style'

export function Registro({navigation}){
    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <Text style={styles.text}>Informe seus dados para realizar o registro</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Nome completo"
                    style={styles.inputUser}
                />
                <TextInput
                    placeholder="CPF/CNPJ"
                    keyboardType='numeric'
                    style={styles.inputUser}
                />
                <TextInput
                    placeholder="Email"
                    keyboardType='email-address'
                    style={styles.inputUser}
                />
                <TextInput
                    placeholder="Crie uma senha"
                    secureTextEntry={true}
                    style={styles.inputPassword}
                />
                <TextInput
                    placeholder="Repita sua senha"
                    secureTextEntry={true}
                    style={styles.inputPassword}
                />
                <View style={styles.btnArea}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Login')}
                        style={styles.btnBack}
                    >
                        <Text style={styles.btnText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Login')}
                        style={styles.btnRegister}
                    >
                        <Text style={styles.btnText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
