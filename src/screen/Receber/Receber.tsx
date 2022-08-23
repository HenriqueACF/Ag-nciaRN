import React from "react";
import styles from './Receber.styles'
import {ImageBackground, KeyboardAvoidingView, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export function Receber({navigation}){
    return(
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <View style={styles.area}>
                    <View>
                        <Text style={styles.txt}>Qual é o valor que você quer receber?</Text>
                        <TextInput placeholder={'insira aqui'} style={styles.input}/>
                    </View>
                    <View style={{ paddingBottom:20, paddingRight:20}}>
                        <View style={styles.icon}>
                            <Ionicons  name='arrow-forward' size={40} color='#FFF'/>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
