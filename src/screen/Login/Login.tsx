import React, {useState} from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    Platform, Alert
} from "react-native";
import styles from './Login.styles'
import {Ionicons} from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable'
//import UserService from "../../Services/UserService";

export function Login({navigation}){
    //HOOKs
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const req = await fetch('https://api.b7web.com.br/loginsimples/', {
            method:'POST',
            body:JSON.stringify({
                email: user,
                password
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await req.json()
        if(json.status == 'ok'){
            navigation.navigate('Banco')
        }else{
            alert('Login errado')
        }
    }

    return(
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS=='ios'?'padding':null} >
        <ImageBackground
            source={require('../../../assets/bg-layout.png')}
            style={{width: '100%', height: '100%'}} >
        <View style={styles.logoArea}>
            <Animatable.Image
                animation='flipInY'
                source={require('../../../assets/octus.png')}
                style={{width: '200%', height: 300}}
                resizeMode={'center'}/>
        </View>

        <Animatable.View animation='fadeInUp' style={styles.form}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TextInput
                placeholder="CPF/CNPJ"
                style={styles.inputUser}
                value={user}
                onChangeText={t=>setUser(t)}
            />
            <Ionicons name='person' size={30} color='white'/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TextInput
                placeholder="Senha"
                secureTextEntry={true}
                style={styles.inputPassword}
                value={password}
                onChangeText={t => setPassword(t)}
            />
            <Ionicons name='key' size={30} color='white'/>
            </View>
            <TouchableOpacity
                // onPress={()=> navigation.navigate('Banco')}
                onPress={handleLogin}
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
        </Animatable.View>
        </ImageBackground>
    </KeyboardAvoidingView>
    )
}
