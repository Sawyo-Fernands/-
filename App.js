import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/authContext';

export default function App(){

  
return (
  <NavigationContainer>
    <AuthProvider>
      <StatusBar backgroundColor='#F0F4FF' barStyle='dark-content' />
      <Routes />
    </AuthProvider>
  </NavigationContainer>
)

}