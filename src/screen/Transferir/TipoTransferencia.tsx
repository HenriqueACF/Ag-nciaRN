import React from "react";
import {KeyboardAvoidingView, ImageBackground, View, Text, TouchableOpacity} from "react-native";
import styles from './TipoTransferencia.style'
import {Ionicons} from "@expo/vector-icons";

export function TipoTransferencia({navigation}){
    return(
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <View style={styles.card}>
                    <Text style={{fontWeight:'bold', fontSize:22, color:'#ff8c00'}}>Tipos de Transferencia</Text>
                    <View style={{flexDirection:'column', justifyContent:'space-between', paddingTop:50}}>
                        <TouchableOpacity
                            style={styles.btn}
                        >
                            <Text style={styles.txtBtn}>TED</Text>
                            <Ionicons name={'expand'} size={25} color={'#fff'}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                        >
                            <Text style={styles.txtBtn}>DOC</Text>
                            <Ionicons name={'barcode'} size={25} color={'#fff'}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                        >
                            <Text style={styles.txtBtn}>Entre Contas</Text>
                            <Ionicons name={'card'} size={25} color={'#fff'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
