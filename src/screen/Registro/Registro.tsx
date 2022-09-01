import React, {useState} from "react";
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
    //HOOKS
    const [name, setName] = useState('')
    const [register, setRegister] = useState('')
    const [email, setEmail] = useState('')

    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
            <Text style={styles.text}>Nova Conta</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Nome completo"
                    style={styles.inputUser}
                    value={name}
                    onChangeText={t=>setName(t)}
                />
                <TextInput
                    placeholder="CPF/CNPJ"
                    keyboardType='numeric'
                    style={styles.inputUser}
                    value={register}
                    onChangeText={t=>setRegister(t)}
                />
                <TextInput
                    placeholder="Email"
                    keyboardType='email-address'
                    style={styles.inputUser}
                    value={email}
                    onChangeText={t=>setEmail(t)}
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
