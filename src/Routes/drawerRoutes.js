import { createDrawerNavigator } from '@react-navigation/drawer'
import Registrar from '../pages/Registrar'
import Home from '../pages/Home'

const Drawer = createDrawerNavigator()
export function DrawerRoutes(){

    return(
        <Drawer.Navigator>
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