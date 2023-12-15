import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGetDataUser } from "../hooks/useGetData";
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading,setLoading] = useState()
  const navigation = useNavigation();
  const { getDataUser } = useGetDataUser();

  async function criarUsuario(params) {
    if (!params.name || !params.email || !params.password) return;

    setLoadingAuth(true);
    try {
      const result = await api.post("/users", params);
      setTimeout(() => {
        // Settimeout só para demonstrar o loading
        setLoadingAuth(false);
      }, 100);
      navigation.goBack();
    } catch (e) {
      console.log(e);
      setLoadingAuth(false);
    }
  }
  async function autenticarUsuario(params) {
    if (!params.email || !params.password) return;
    setLoadingAuth(true);
    try {
      const result = await api.post("/login", params);
      const { id, name, token } = result.data;
      await AsyncStorage.setItem("@token", token);
      api.defaults.headers["Authotization"] = `Bearer ${token}`;
      setUser({ id, name, email: params.email });
      setLoadingAuth(false);
    } catch (e) {
      console.log(e);
      setLoadingAuth(false);
    }
  }

  useEffect(() => {
    async function getToken() {
      setLoading(true)
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        const response = await getDataUser(token);
        if (!response) {
          setUser(null);
        } else {
          setUser(response.data);
          api.defaults.headers["Authotization"] = `Bearer ${token}`;
        }
        setLoading(false)
      }
    }
    getToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !user ? false : true,
        user,
        loading,
        setUser,
        criarUsuario,
        loadingAuth,
        autenticarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
