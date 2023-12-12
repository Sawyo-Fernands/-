import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

export default function Cadastro() {
  return (
    <View style={style.mainContainer}
    behavior={Platform.OS == 'ios' ? 'padding' : ''}
    enabled
    >
      <View style={style.containerForm}>
      <TextInput
          placeholder="Seu Nome"
          style={style.textInput}
        />
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
            <Text style={style.textButtonLogin}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
