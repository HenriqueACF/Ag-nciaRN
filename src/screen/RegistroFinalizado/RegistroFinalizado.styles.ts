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
    subText:{
        paddingTop:40,
        alignSelf:'center',
        fontSize:18
    },
    form:{
        paddingTop:'10%',
        margin: 10,
        width:'95%',
        justifyContent: 'center',
    },
    btnRegister:{
        padding:10,
        backgroundColor:'#204ac8',
        alignSelf:'center',
        borderRadius:5
    },
    btnText:{
        fontWeight:'bold',
        fontSize:16,
    },
    btnArea:{
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop:'60%'
    },
    mail:{
        alignSelf: 'center'
    }
})
