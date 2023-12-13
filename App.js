import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/authContext';
import Routes from './src/Routes';

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