import {StyleSheet} from "react-native";
import styles from "styled-components";

// @ts-ignore
export default styles = StyleSheet.create({
    area:{
        backgroundColor:'#fff',
        margin:20,
        height:'95%',
        borderRadius:20,
        justifyContent:'space-between'
    },
    txt:{
        color:'#ff8c00',
        fontWeight:'bold',
        fontSize:25,
        paddingTop:'25%',
        alignSelf:'center'
    },
    txtSub:{
        color:'#ff8c00',
        fontWeight:'bold',
        fontSize:16,
        paddingTop:'5%',
        alignSelf:'center'
    },
    input:{
        color:'#ff8c00',
        fontWeight:'bold',
        fontSize:20,
        marginTop:50,
        alignSelf:'center',
        backgroundColor:'#ccc',
        height:50,
        width:300,
        borderRadius:5
    },
    icon:{
        backgroundColor:'#ff8c00',
        width: 70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 20,
        marginTop:10,
        alignSelf:'flex-end'
    }
})
