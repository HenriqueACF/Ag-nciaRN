import React, {useState} from "react";
import styles from './TransPix.styles'
import {ImageBackground, KeyboardAvoidingView, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export function TransPix({navigation}){

    const [valor, setValor] = useState('')

    return(
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <View style={styles.area}>
                    <View>
                        <Text style={styles.txt}>Qual é o valor da transferência?</Text>
                        <Text style={styles.txtSub}>Valor disponivel: R$250,00</Text>
                        <TextInput
                            placeholder={'insira aqui'}
                            style={styles.input}
                            value={valor}
                            onChangeText={t=>setValor(t)}
                        />
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
