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
        color:'#fff'
    },
    subtitle2:{
        alignSelf:'center',
        color:'#fff',
        paddingBottom:'15%'
},
    subText:{
        paddingTop:40,
        alignSelf:'center',
        fontSize:18,
        color:'#ff8c00'
    },
    form:{
        paddingTop:'15%',
        margin: 10,
        width:'95%',
        justifyContent: 'center',
        backgroundColor:'#fff',
        borderRadius:20
    },
    btnRegister:{
        padding:10,
        backgroundColor:'#ff8c00',
        alignSelf:'center',
        borderRadius:5,
        marginBottom:30
    },
    btnText:{
        fontWeight:'bold',
        fontSize:16,
        color:'#fff'
    },
    btnArea:{
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop:'20%'
    },
    mail:{
        alignSelf: 'center'
    }
})
