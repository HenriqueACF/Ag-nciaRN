import React, {useState} from "react";
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
    //HOOKS
    const [endereco, setEndereco] = useState('')
    const [nResidencial, setNResidencial] = useState('')
    const [cep, setCep] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [senha, setSenha] = useState('')
    const [confSenha, setConfSenha] = useState('')


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
                        value={endereco}
                        onChangeText={t=>setEndereco(t)}
                    />
                    <TextInput
                        placeholder="N°"
                        style={styles.inputUser}
                        keyboardType='numeric'
                        value={nResidencial}
                        onChangeText={t=>setNResidencial(t)}

                    />
                    <TextInput
                        placeholder="CEP"
                        keyboardType='numeric'
                        style={styles.inputUser}
                        value={cep}
                        onChangeText={t=>setCep(t)}
                    />
                    <TextInput
                        placeholder="Telefone"
                        keyboardType='numeric'
                        style={styles.inputUser}
                        value={telefone}
                        onChangeText={t=>setTelefone(t)}
                    />
                    <TextInput
                        placeholder="Data de Nascimento"
                        keyboardType='numeric'
                        style={styles.inputUser}
                        value={nascimento}
                        onChangeText={t=>setNascimento(t)}
                    />
                    <TextInput
                        placeholder="Senha"
                        keyboardType='numeric'
                        style={styles.inputUser}
                        value={senha}
                        onChangeText={t=>setSenha(t)}
                    />
                    <TextInput
                        placeholder="Repita sua senha"
                        keyboardType='numeric'
                        style={styles.inputUser}
                        value={confSenha}
                        onChangeText={t=>setConfSenha(t)}
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
