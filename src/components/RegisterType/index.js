import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {style} from './styles'
import { useState } from "react";

export function RegisterType({typeInput,sendTypeItem}){
    console.log({typeInput})
    return(
        <View style={style.containerButtons}>
        <TouchableOpacity
        style={{
            ...style.containerButton,
            backgroundColor:typeInput == 'receita' ? '#fff' : '#e7e7e7'
        }} onPress={()=>sendTypeItem('receita')}>
                <AntDesign name="arrowup" size={24} color="black" />
                <Text style={style.textType}>Receita</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
            ...style.containerButton,
            backgroundColor:typeInput == 'despesa' ? '#fff' : '#e7e7e7'
        }}
        onPress={()=>sendTypeItem('despesa')}>
                <AntDesign name="arrowdown" size={24} color="black" />
                <Text style={style.textType}>Despesa</Text>
        </TouchableOpacity>
        </View>
    )

}