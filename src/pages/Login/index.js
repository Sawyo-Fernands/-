import { Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { style } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

export default function Login() {

    const router = useNavigation()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { autenticarUsuario, loadingAuth } = useContext(AuthContext)

    function handleLogin(){
      autenticarUsuario({email,password})
    }


  return (
    <View style={style.mainContainer}
    behavior={Platform.OS == 'ios' ? 'padding' : ''}
    enabled
    >
      <Image
        source={require("../../../assets/Logo1.png")}
        style={{ width: 184, height: 150 }}
      />
      <View style={style.containerForm}>
        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          style={style.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={style.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View>
          <TouchableOpacity 
          onPress={handleLogin}
          style={style.buttonLogin}>
            {
              loadingAuth ? (<ActivityIndicator size={20} color={'white'} />)
              : (<Text style={style.textButtonLogin}>Acessar</Text>)
            }
          </TouchableOpacity>
          <View>
            <Text style={style.textSenha} onPress={()=>router.push("Cadastro")}>Crie uma conta! </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
