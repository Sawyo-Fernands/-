import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user,setUser] = useState({
        nome:'',

    })
    const navigation = useNavigation()

    async function criarUsuario(params){
        console.log(params)
        try{
            const result = await  api.post("/users",params)
            navigation.goBack()
        }catch(e){
            console.log(e)
        }
    }

    return(
        <AuthContext.Provider value={{user,setUser,criarUsuario}}>
            {children}
        </AuthContext.Provider>
    )
}