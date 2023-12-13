import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

export default function Login() {

    const router = useNavigation()

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
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          style={style.textInput}
        />
        <View>
          <TouchableOpacity 
          onPress={()=>router.push("Home")}
          style={style.buttonLogin}>
            <Text style={style.textButtonLogin}>Acessar</Text>
          </TouchableOpacity>
          <View>
            <Text style={style.textSenha} onPress={()=>router.push("Cadastro")}>Crie uma conta! </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
