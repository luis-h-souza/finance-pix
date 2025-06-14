import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper'

import Home from './src/pages/Home';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

const opcoesTela = {
  headerStyle: { backgroundColor: '#F8F9FA' },
  headerTintColor: '#212529',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 24 }
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator inicialRouteName='Login' screenOptions={opcoesTela}>

          <Stack.Screen
            name='Login'
            component={Login}
            options={{ title: 'Login' }}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home' }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}