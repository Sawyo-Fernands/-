import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../context/authContext";

export default function Home(){

    const { signOut } = useContext(AuthContext)

    return(
        <View>
            <Text>
                Home
            </Text>
            <Button onPress={signOut} title="Sair" />
              
        </View>
    )
}