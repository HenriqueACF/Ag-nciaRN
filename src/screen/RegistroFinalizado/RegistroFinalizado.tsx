import React from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    ImageBackground
} from "react-native";
import styles from './RegistroFinalizado.styles'
import {Ionicons} from "@expo/vector-icons";

export function RegistroFinalizado({navigation}){
    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <ImageBackground
                source={require('../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <Text style={styles.text}>Estamos analisando seus dados</Text>
                <Text style={styles.subtitle2}> (Isso poderá demorar alguns minutos)</Text>
                <View style={styles.form}>
                    <Ionicons name='mail' size={150} style={styles.mail} color='#ff8c00'/>
                    <Text style={styles.subText}> Aguarde a confirmação por email. </Text>
                    <View style={styles.btnArea}>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Login')}
                            style={styles.btnRegister}
                        >
                            <Text style={styles.btnText}>Ok, Entendi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
