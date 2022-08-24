import React from "react";
import styles from './Pix.style'
import {ImageBackground, KeyboardAvoidingView, View, Text, TouchableOpacity} from "react-native";
import {OptionIcon, OptionText, OptionView} from "../../components/Header/Header.style";
import {Ionicons} from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable'

export function Pix({navigation}){
    return(
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <Animatable.View animation='bounceInLeft'>
                    <Text style={styles.txt}>Área Pix</Text>
                    <Text style={styles.firstText}>Enviar Pix</Text>
                    <View style={{alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <OptionView
                                style={{color:'#fff'}}
                                onPress={()=> navigation.navigate('TransPix')}
                            >
                                <OptionIcon>
                                    <Ionicons name='md-analytics' size={25} color="#fff"/>
                                </OptionIcon>
                                <OptionText style={{color:'#fff'}}>Transferir</OptionText>
                            </OptionView>
                            <OptionView
                                onPress={()=> navigation.navigate('TransChave')}
                            >
                                <OptionIcon>
                                    <Ionicons name='md-analytics' size={25} color="#fff"/>
                                </OptionIcon>
                                <OptionText style={{color:'#fff'}}>Chave</OptionText>
                            </OptionView>
                            <OptionView
                                onPress={()=> navigation.navigate('TransQrcode')}
                            >
                                <OptionIcon>
                                    <Ionicons name='md-analytics' size={25} color="#fff"/>
                                </OptionIcon>
                                <OptionText style={{color:'#fff'}}>QR code</OptionText>
                            </OptionView>
                        </View>
                    </View>
                    <Text style={styles.firstText}>Receber Pix</Text>
                    <View style={{alignItems:'center'}}>
                        <View style={{flexDirection:'row'}}>
                            <OptionView
                                onPress={()=> navigation.navigate('CobrarPix')}
                            >
                                <OptionIcon>
                                    <Ionicons name='md-analytics' size={25} color="#fff"/>
                                </OptionIcon>
                                <OptionText style={{color:'#fff'}}>Cobrar</OptionText>
                            </OptionView>
                            <OptionView
                                onPress={()=> navigation.navigate('DepositarPix')}
                            >
                                <OptionIcon>
                                    <Ionicons name='md-analytics' size={25} color="#fff"/>
                                </OptionIcon>
                                <OptionText style={{color:'#fff'}}>Depositar</OptionText>
                            </OptionView>
                        </View>
                        <View style={styles.chavesArea}>
                            <TouchableOpacity style={[{flexDirection:'row', alignItems:'center'}, styles.btn]}>
                                <Text style={styles.txtBtn}>Cadastrar chave Pix</Text>
                                <Ionicons name={'add-circle-outline'} color={'#ff8c00'} size={20}/>
                            </TouchableOpacity>
                            <View style={{padding:20}}></View>
                            <TouchableOpacity style={[{flexDirection:'row', alignItems:'center'}, styles.btn]}>
                                <Text style={styles.txtBtn}>Configurar Pix</Text>
                                <Ionicons name={'settings'} color={'#ff8c00'} size={20}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
