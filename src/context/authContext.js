import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user,setUser] = useState(null)
    const [loadingAuth,setLoadingAuth] = useState(false)
    const navigation = useNavigation()

    async function criarUsuario(params){
        if(!params.name || !params.email || !params.password) return;
        
        setLoadingAuth(true)
        try{
            const result = await  api.post("/users",params)
            setTimeout(() => {
                // Settimeout só para demonstrar o loading
            setLoadingAuth(false)
                
            }, 100);
            navigation.goBack()
        }catch(e){
            console.log(e)
            setLoadingAuth(false)
        }
    }

    return(
        <AuthContext.Provider value={{user,setUser,criarUsuario,loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}