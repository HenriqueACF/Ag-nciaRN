import React from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    ImageBackground
} from "react-native";
import styles from './Registro.style'

export function Registro({navigation}){
    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <ImageBackground
                source={require('../../../assets/bg-layout2.png')}
                style={{width: '100%', height: '100%'}} >
            <Text style={styles.text}>Nova Conta</Text>
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
                <View style={styles.btnArea}>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Login')}
                        style={styles.btnBack}
                    >
                        <Text style={styles.btnText}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('RegistroComplementar')}
                        style={styles.btnRegister}
                    >
                        <Text style={styles.btnText}>Prosseguir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
