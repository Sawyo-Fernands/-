import { createDrawerNavigator } from '@react-navigation/drawer'
import Registrar from '../pages/Registrar'
import Home from '../pages/Home'

const Drawer = createDrawerNavigator()
export function DrawerRoutes(){

    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown:false,
            drawerStyle:{
                backgroundColor:"white",
                paddingTop:20,
            },
            drawerActiveBackgroundColor:'#3b3dbf',
            drawerActiveTintColor:"white",
            drawerInactiveBackgroundColor:'#f0f2ff',
            drawerInactiveTintColor:"#121212"
            }}
        >
        <Drawer.Screen name="Home"
        options={{
            headerTitle:"Minhas Movimentações"
        }}
        component={Home} />
        <Drawer.Screen 
        options={{
            headerTitle:"Registrando"
        }}
        name="Registrar" component={Registrar} />
    </Drawer.Navigator>
     )



}