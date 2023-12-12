import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Login'
import Sobre from './src/pages/Cadastro'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/pages/Login';

const Drawer = createDrawerNavigator()

export default function App(){

return <Login />

}