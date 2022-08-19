import React from "react";
import {
    Button,
    KeyboardAvoidingView,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Text,
    ImageBackground
} from "react-native";
import styles from './Login.styles'
import {Ionicons} from "@expo/vector-icons";

export function Login({navigation}){
    return(
    <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
        <ImageBackground
            source={require('../../../assets/bg-layout.png')}
            style={{width: '100%', height: '100%'}} >
        <View style={styles.logoArea}>
            <Image
                source={require('../../../assets/octus.png')}
                style={{width: '200%', height: 300}}
                resizeMode={'center'}/>
        </View>

        <View style={styles.form}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TextInput
                placeholder="CPF/CNPJ"
                keyboardType='numeric'
                style={styles.inputUser}
            />
            <Ionicons name='person' size={30} color='white'/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                style={styles.inputPassword}
            />
            <Ionicons name='key' size={30} color='white'/>
            </View>
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
                <Text style={{color:'white'}}>Solicitar conta</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </KeyboardAvoidingView>
    )
}
