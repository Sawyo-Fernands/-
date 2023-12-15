import api from "../services/api";

export function useGetDataUser(){

    async function getDataUser(token){
        const result = await api.get("/me",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

       return result     
    }
    return { getDataUser }

}