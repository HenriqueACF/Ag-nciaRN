import React from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    ImageBackground, Image
} from "react-native";
import styles from './CapturaDoc.style'

export function CapturaDoc({navigation}){
    return(
        <KeyboardAvoidingView style={[styles.container,styles.darkbg]}>
            <ImageBackground
                source={require('../../../assets/bg-layout2.png')}
                style={{width: '100%', height: '100%'}} >
                <Text style={styles.text}>Captura do Documento</Text>
                <View style={styles.form}>
                    <Text style={styles.text}>Tire uma foto da frente do documento</Text>
                    <Image
                        source={require('../../../assets/captura-doc.png')}
                        style={{width: '100%', height: 200}}
                        resizeMode={'center'}/>
                    <Text style={styles.textUp}>Toque para fazer o Upload</Text>
                    <Text style={styles.subtitle}>Permitido apenas Carteira de Identidade e CNH</Text>
                    <View style={styles.btnArea}>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Login')}
                            style={styles.btnBack}
                        >
                            <Text style={styles.btnText}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('CapturaVerso')}
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
