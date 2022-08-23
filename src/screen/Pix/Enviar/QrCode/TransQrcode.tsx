import React, {useEffect, useState} from "react";
import {Button, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from "react-native";
import {BarCodeScanner} from "expo-barcode-scanner";


export function TransQrcode({navigation}){
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
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../../../assets/bg-layout.png')}
                style={{width: '100%', height: '100%'}} >
                <View style={{paddingTop:'20%', alignSelf:'center'}}>
                    <Text style={{fontSize:22, color:'#FFF', fontWeight:'bold'}}>Aproxime do QrCode</Text>
                </View>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
    },
});
