import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#f0f4ff',
        color:"black",
    },
    containerTitle:{
        width:'95%',
        marginLeft:"auto",
        marginTop:30,
        marginBottom:20
    },
    titleRegister:{
        fontSize: 25,
        fontWeight: "700",
        textAlign: 'left',
    },
    input:{
        width:'90%',
        height:47,
        backgroundColor:"white",
        borderRadius:4,
        padding:10
    },
    button:{
        backgroundColor:'#00B94A',
        borderRadius:3,
        height:47,
        width:'90%',
        display:"flex",
        alignItems:'center',
        justifyContent:"center"
    },
   
    textButton:{
        color:"white",
        fontWeight:"700",
        fontSize:20,
        textAlign:'center',
        lineHeight:23
    },
    containerForm:{
        justifyContent:"center",
        alignItems:"center",
        gap:15
    }
})