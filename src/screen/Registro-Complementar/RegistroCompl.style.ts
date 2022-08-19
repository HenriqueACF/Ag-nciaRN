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
    text:{
        paddingTop: 200,
        fontWeight:'bold',
        fontSize:18,
        alignSelf:'center',
        color: 'white'
    },
    form:{
        paddingTop:'25%',
        margin: 10,
        width:'95%',
        justifyContent: 'center',
    },
    inputUser:{
        backgroundColor:'#fff',
        fontSize:19,
        padding:7,
        marginBottom:15,
        borderRadius:20,
        height:50
    },
    inputPassword:{
        backgroundColor:'#fff',
        fontSize:19,
        padding:7,
        marginBottom:15
    },
    btnRegister:{
        padding:10,
        backgroundColor:'#ff8c00',
        alignSelf:'center',
        borderRadius:5
    },
    btnBack:{
        padding:10,
        backgroundColor:'red',
        alignSelf:'center',
        borderRadius:5
    },
    btnText:{
        fontWeight:'bold',
        fontSize:16,
        color:'white'
    },
    btnArea:{
        flexDirection:'row',
        justifyContent: 'space-around'
    }
})
