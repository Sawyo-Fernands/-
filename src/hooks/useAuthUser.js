import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

export function useAuthUser() {
  async function authUser(params) {
    const result = await api.post("/login", params);
    const { id, name, token } = result.data;
    console.log(token)
    if(token){
      await AsyncStorage.setItem("@token", token);
      api.defaults.headers["Authotization"] = `Bearer ${token}`;
  
      return { id, name,token };
    }else{
      return null
    }
   
  }

  return { authUser };
}
