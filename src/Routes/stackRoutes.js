import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home'

const Stack = createStackNavigator();

export default function StackRoutes(){
         return(
            <Stack.Navigator>
            <Stack.Screen name="Login"
            options={{
                headerShown:false
            }}
            component={Login} />
            <Stack.Screen 
            options={{
                headerTintColor:"white",
                headerStyle: {
                    backgroundColor: 'rgba(59, 61, 191, 1)', 
                  },
            }}
            name="Cadastro" component={Cadastro} />
            <Stack.Screen 
            name="Home" component={Home} />
        </Stack.Navigator>
         )
}