import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

export default function Login() {
  return (
    <View style={style.mainContainer}>
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
          <TouchableOpacity style={style.buttonLogin}>
            <Text style={style.textButtonLogin}>Acessar</Text>
          </TouchableOpacity>
          <View>
            <Text style={style.textSenha}>Crie uma conta gratuita </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
