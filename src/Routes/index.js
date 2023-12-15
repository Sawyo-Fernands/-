import { useContext } from "react"
import { DrawerRoutes } from "./drawerRoutes"
import StackRoutes from "./stackRoutes"
import { AuthContext } from "../context/authContext"
import { ActivityIndicator, View } from 'react-native'

export default function  Routes(){
    const { signed,loading } = useContext(AuthContext)

    if(loading){
        return (
            <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#FFFF'
            }}>
                <ActivityIndicator size={100} color={'#13131313'} />
            </View>
        )
    }


return signed ? <DrawerRoutes /> : <StackRoutes />

}