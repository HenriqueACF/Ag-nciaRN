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
        paddingTop: 150,
        paddingBottom: 100,
        fontWeight:'bold',
        fontSize:18,
        alignSelf:'center',
        color:'#fff'
    },
    textUp:{
        paddingTop:10,
        fontSize:18,
        alignSelf: 'center',
        color:'#ff8c00'
    },
    subtitle:{
        paddingTop:20,
        fontSize:14,
        alignSelf: 'center',
        color:'#ff8c00'
    },
    form:{
        paddingTop:'10%',
        margin: 10,
        width:'95%',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:20
    },
    inputUser:{
        backgroundColor:'#FFF',
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
        justifyContent: 'space-around',
        paddingTop:40,
        paddingBottom:40
    }
})
