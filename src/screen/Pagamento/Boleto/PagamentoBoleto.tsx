import React, { useState, useEffect } from 'react';
import {Text, View, Button, StyleSheet, ImageBackground} from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
// import styles from './PagamentoBoleto.styles'
import {Ionicons} from "@expo/vector-icons";

export function PagamentoBoleto({navigation}){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === "granted");
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return(
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <View style={{paddingTop:'20%', alignSelf:'center'}}>
                    <Text style={{fontSize:22, color:'#FFF', fontWeight:'bold'}}>Aproxime do Código de barras</Text>
                </View>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
