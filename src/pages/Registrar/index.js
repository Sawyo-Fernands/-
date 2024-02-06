import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import { Header } from "../../components/Header";
import { style } from "./styles";
import { useState } from "react";
import { RegisterType } from "../../components/RegisterType";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {format} from 'date-fns'

export default function Registrar() {

    const [labelInput,setLabelInput] = useState("")
    const [valueInput,setValueInput] = useState("")
    const [typeInput,setTypeInput] = useState("receita")

    function handleSubmit(){
        Keyboard.dismiss()
        if(isNaN(parseFloat(valueInput)) || !typeInput){
         return  alert("Preencha todos os campos!") 
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${typeInput} - Valor: R$${valueInput}`,
            [
                {
                    text:"Cancelar",
                    style:"cancel"
                },
                {
                    text:"Continuar",
                    style:"default",
                    onPress:()=>{addRegister()}
                }
            ]
        )
    }

    async function addRegister(){
        Keyboard.dismiss()
        const token = await AsyncStorage.getItem("@token");
        console.log({
            description:labelInput,
            value:Number(valueInput),
            type:typeInput,
            date:format(new Date(),'dd/MM/yyyy')
        })
        await api.post("/receive",{
                description:labelInput,
                value:Number(valueInput),
                type:typeInput,
                date:new Date().toLocaleDateString()
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setLabelInput("")
        setValueInput("")
        alert(`${typeInput} gravada com sucesso!`)
    }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
  <View style={style.mainContainer}>
      <Header title={"Registrando"} />
      <View style={style.containerTitle}>
        <Text style={style.titleRegister}>Registrar</Text>
      </View>
      <SafeAreaView style={style.containerForm}>
        <TextInput style={style.input} placeholder="Nome" value={labelInput} onChangeText={(e)=>setLabelInput(e)} />
        <TextInput
          style={style.input}
          placeholder="Valor Desejado"
          keyboardType="numeric"
          value={valueInput} onChangeText={(e)=>setValueInput(e)}
        />
        <View>
            <RegisterType typeInput={typeInput} sendTypeItem={(item) => setTypeInput(item)}  />
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={style.button} onPress={handleSubmit}>
            <Text style={style.textButton}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
    </TouchableWithoutFeedback>
  
  );
}
