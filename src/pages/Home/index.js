import { FlatList, Text, View } from "react-native";
import {style} from './styles';
import { Header } from "../../components/Header";
import { useState,useEffect } from "react";
import { format } from "date-fns";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { BalanceItem } from "../../components/BalanceItem";

export default function Home(){
    const isFocused = useIsFocused()
    const [listBalance,setListBalance] = useState([])
    const [dataAtual,setDataAtual] = useState(new Date())

    useEffect(()=>{
        let isActive = true

        async function getMovements(){
            const token = await AsyncStorage.getItem("@token");
            let datFormated = format(dataAtual,'dd/MM/yyyy')
            const balance = await api.get("/balance",{
                params:{
                    date:datFormated
                },
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(balance.data)
            setListBalance(balance.data)
        }
        getMovements()

        return ()=> isActive = false
    },[isFocused])

    return(
        <View style={style.mainContainer}>
            <Header title={'Minhas Movimentações'} />
                <FlatList
                data={listBalance}
                horizontal={true}
                style={style.listContainer}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.tag}
                renderItem={({item})=>(<BalanceItem data={item} />)}
                />
        </View>
    )
}