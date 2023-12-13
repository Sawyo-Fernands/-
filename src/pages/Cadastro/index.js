import { Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { style } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

export default function Cadastro() {

  const [usuario,setUsuario] = useState("")
  const [senha,setSenha] = useState("")
  const [email,setEmail] = useState("")
  const { criarUsuario,loadingAuth } = useContext(AuthContext)

  async function SignUp(){
    await criarUsuario({email:email,password:senha,name:usuario,})
  }

  return (
    <View style={style.mainContainer}
    behavior={Platform.OS == 'ios' ? 'padding' : ''}
    enabled
    >
      <View style={style.containerForm}>
      <TextInput
          placeholder="Seu Nome"
          style={style.textInput}
          value={usuario}
          onChangeText={(text)=>setUsuario(text)}
        />
        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          style={style.textInput}
          value={email}
          onChangeText={(text)=>setEmail(text)}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={style.textInput}
          value={senha}
          onChangeText={(text)=>setSenha(text)}
        />
        <View>
          <TouchableOpacity style={style.buttonLogin} onPress={SignUp}>
            {
              loadingAuth ? (
                <ActivityIndicator color={'white'} size={20} />
              ) : (
                <Text style={style.textButtonLogin}>Cadastrar</Text>

              )
            }
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
