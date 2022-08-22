import {StyleSheet} from "react-native";

// @ts-ignore
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card:{
        alignItems: 'center',
        alignSelf:'center',
        paddingTop:'15%',
        height:'70%',
        width:'85%',
        backgroundColor:'white',
        borderRadius:20,
        marginTop:'35%'
    },
    btnArea:{

    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#ff8c00',
        padding:15,
        alignSelf:'center',
        borderRadius:10,
        alignItems:'center',
        width: 300,
        marginBottom:25
    },
    txtBtn:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        padding: 10
    }
})
