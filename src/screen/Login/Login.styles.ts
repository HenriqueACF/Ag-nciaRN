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
        justifyContent: 'center',
        backgroundColor:'#fff',
        borderRadius: 20,
        width: '90%',
        height:'50%',
        margin:20
    },
    logo:{

    },
    form:{
        paddingTop: 85,
        margin: 10,
        width:'95%',
        justifyContent: 'center'
    },
    inputUser:{
        backgroundColor:'#fff',
        fontSize:15,
        padding:7,
        marginBottom:15,
        width: '80%',
        borderRadius:5,
        justifyContent:'center',
        height: 40
    },
    inputPassword:{
        backgroundColor:'#fff',
        fontSize:15,
        padding:7,
        marginBottom:35,
        width: '80%',
        borderRadius:5,
        height: 40
    },
    btnLogin:{
        padding:12,
        backgroundColor: '#ff8c00',
        alignSelf:'center',
        borderRadius:5
    },
    btnText:{
        fontWeight:'bold',
        fontSize:22,
        color:'white'
    },
    btnRegister:{
        paddingTop:20,
        alignSelf: 'center',
        color:'#000'
    },
    textRegister:{
        color: '#000',
        fontWeight: 'bold'
    }
})
