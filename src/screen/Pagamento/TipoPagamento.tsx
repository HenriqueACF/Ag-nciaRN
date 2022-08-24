import React from "react";
import {KeyboardAvoidingView, ImageBackground, View, Text, TouchableOpacity} from "react-native";
import styles from './TipoPagamento.style'
import {Ionicons} from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable'

export function TipoPagamento({navigation}){
    return(
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <Animatable.View animation='bounceInLeft' style={styles.card}>
                    <Text style={{fontWeight:'bold', fontSize:22, color:'#ff8c00'}}>Tipo de Pagamento</Text>
                    <View style={{flexDirection:'column', justifyContent:'space-between', paddingTop:50}}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={()=> navigation.navigate('PagamentoQrCode')}
                        >
                            <Text style={styles.txtBtn}>Qr Code</Text>
                            <Ionicons name={'expand'} size={25} color={'#fff'}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={()=> navigation.navigate('PagamentoBoleto')}
                        >
                            <Text style={styles.txtBtn}>Boleto</Text>
                            <Ionicons name={'barcode'} size={25} color={'#fff'}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={()=> navigation.navigate('PagamentoCodigo')}
                        >
                            <Text style={styles.txtBtn}>Código</Text>
                            <Ionicons name={'card'} size={25} color={'#fff'}/>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
