import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper'

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import CriarConta from './src/pages/CriarConta';
import Splash from './src/pages/Splash';

const Stack = createNativeStackNavigator();

const opcoesTela = {
  headerStyle: { backgroundColor: '#F8F9FA' },
  headerTintColor: '#212529',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 24 }
}

const opcoesTelaHome = {
  headerStyle: { backgroundColor: '#087F5B' },
  headerTintColor: '#FFFF',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator inicialRouteName='Splash' screenOptions={opcoesTela}>

          <Stack.Screen
            name='Splash'
            component={Splash}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={opcoesTelaHome}
          />

          <Stack.Screen
            name='Cadastro de cliente'
            component={CriarConta}
            options={{ title: 'Cadastro de clientes' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}