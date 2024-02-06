import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    textType:{
        color:"black",
        fontWeight:"bold",
        fontSize:18

    },
    containerButtons:{
        flexDirection:"row",
        width:'90%',
        display:"flex",
        alignItems:'center',
        justifyContent:"center",
        gap:4,
        marginTop:10,
        marginBottom:10
    },
    containerButton:{
        flexDirection:"row",
        width:'50%',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:5,
        gap:5,
        height:60,
        borderWidth:1,
        borderColor:"#3b3ddf"
    },
 
})