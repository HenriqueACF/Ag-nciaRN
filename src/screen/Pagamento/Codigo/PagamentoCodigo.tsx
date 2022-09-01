import React, {useState} from "react";
import {KeyboardAvoidingView, ImageBackground, View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from './PagamentoCodigo.style'
import {Ionicons} from "@expo/vector-icons";

export function PagamentoCodigo({navigation}){

    const [codigo, setCodigo] = useState('')

    return(
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={require('../../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                    <Text
                        style={{fontWeight:'bold', fontSize:22, color:'#fff', paddingTop:'40%', alignSelf:'center'}}>
                        Informe o código de pagamento
                    </Text>
                    <View style={styles.area}>
                        <TextInput
                            placeholder="Código"
                            keyboardType='numeric'
                            style={styles.inputUser}
                            value={codigo}
                            onChangeText={t=>setCodigo(t)}
                        />
                        <TouchableOpacity>
                            <Text style={styles.txtPay}>Pagar</Text>
                        </TouchableOpacity>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
