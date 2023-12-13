import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const navigation = useNavigation();
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
      setLoadingAuth(false);
      const { id, name, token } = result.data;
      api.defaults.headers["Authotization"] = `Bearer ${token}`;
      setUser({ id, name, email: params.email });
      setLoadingAuth(false);
    } catch (e) {
      console.log(e);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !user ? false : true,
        user,
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
