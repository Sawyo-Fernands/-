import { Text, View } from "react-native";
import {style} from './styles';
import { Header } from "../../components/Header";
import { StatusBar } from "expo-status-bar";

export default function Home(){
    return(
        <View style={style.mainContainer}>
            <Header title={'Minhas Movimentações'} />
        </View>
    )
}