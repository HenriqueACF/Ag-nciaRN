import {StyleSheet} from "react-native";

// @ts-ignore
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    darkbg:{
        backgroundColor:'#333'
    },
    logoArea:{
        alignSelf:'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        height:500,
        width: 400
    },
    form:{
        paddingTop: 70,
        width:'80%'
    },
    inputUser:{
        backgroundColor:'#ccc',
        fontSize:19,
        padding:7,
        marginBottom:15
    },
    inputPassword:{
        backgroundColor:'#ccc',
        fontSize:19,
        padding:7,
        marginBottom:15
    },
    btnLogin:{
        padding:12,
        backgroundColor:'#204ac8',
        alignSelf:'center',
        borderRadius:5
    },
    btnText:{
        fontWeight:'bold',
        fontSize:22
    },
    btnRegister:{
        paddingTop:20,
        alignSelf: 'center',
        color:'#fff'
    }
})
