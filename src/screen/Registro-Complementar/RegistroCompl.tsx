import React from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    ImageBackground
} from "react-native";
import styles from './RegistroCompl.style'

export function RegistroCompl({navigation}){
    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <Text style={styles.text}>Dados Complementares</Text>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Endereço residencial"
                        style={styles.inputUser}
                    />
                    <TextInput
                        placeholder="N°"
                        style={styles.inputUser}
                        keyboardType='numeric'

                    />
                    <TextInput
                        placeholder="CEP"
                        keyboardType='numeric'
                        style={styles.inputUser}
                    />
                    <TextInput
                        placeholder="Telefone"
                        keyboardType='numeric'
                        style={styles.inputUser}
                    />
                    <TextInput
                        placeholder="Data de Nascimento"
                        keyboardType='numeric'
                        style={styles.inputUser}
                    />
                    <TextInput
                        placeholder="Senha"
                        keyboardType='numeric'
                        style={styles.inputUser}
                    />
                    <TextInput
                        placeholder="Repita sua senha"
                        keyboardType='numeric'
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
                            onPress={()=> navigation.navigate('CapturaDoc')}
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
