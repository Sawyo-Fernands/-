import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        backgroundColor:'rgba(240, 244, 255, 1)'
    },
    containerForm:{
        display:"flex",
        gap:10,
        marginTop:60
    },
    textInput:{
        width:316,
        height:47,
        backgroundColor:"white",
        borderRadius:4,
        padding:10
    },
    buttonLogin:{
        backgroundColor:"rgba(59, 61, 191, 1)",
        borderRadius:3,
        height:47,
        width:316,
        display:"flex",
        alignItems:'center',
        justifyContent:"center"
    },
    textButtonLogin:{
        color:"white",
        fontWeight:"700",
        fontSize:20,
        textAlign:'center',
        lineHeight:23
    },
    textSenha:{
        textAlign:"center",
        fontWeight:"400",
        marginTop:10
    }
})