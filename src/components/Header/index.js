import { Text, TouchableOpacity, View } from "react-native";
import { style } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export function Header({title}){
    const router = useNavigation()

    return(
        <View style={style.containerHeader}>
            <TouchableOpacity style={style.button} onPress={()=>router.openDrawer()}>
                <Ionicons name='menu' size={37} color='#121212' /> 
            </TouchableOpacity>
            <Text style={style.title}>
            { title }
            </Text>
        </View>
    )
}