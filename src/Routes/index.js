import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Stack = createStackNavigator();

export default function Routes(){
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
        </Stack.Navigator>
         )
}