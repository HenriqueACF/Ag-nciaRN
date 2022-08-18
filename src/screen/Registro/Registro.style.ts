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
        alignSelf:'center'
    },
    form:{
        paddingTop:'25%',
        margin: 10,
        width:'95%',
        justifyContent: 'center',
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
    btnRegister:{
        padding:10,
        backgroundColor:'#204ac8',
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
        fontSize:16
    },
    btnArea:{
        flexDirection:'row',
        justifyContent: 'space-around'
    }
})
