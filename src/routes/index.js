import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LoginRoutes } from "./login.routes";
import { AccountRoutes } from "./account.routes";
import { FormProvider, useForm } from "react-hook-form";
import { Home } from "../screens/Home";
import { Transaction } from "../screens/Pix/Pix";
import { CustomTabBar } from "../components/CustomTabBar"
import { ConfigAccount } from "../screens/ConfigAccount/ConfigAccount";
import { SendPix } from "../screens/SendPix/SendPix";
import { ReceivePix } from "../screens/ReceivePix/ReceivePix";
import { TokenProvider, AuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0
        }
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: 'home' }} />
      <Tab.Screen name="Pix" component={Transaction} options={{ tabBarIcon: 'pix' }} />
      <Tab.Screen name="ConfigAccount" component={ConfigAccount} options={{ tabBarIcon: 'settings' }} />
    </Tab.Navigator>
  );
}

export function Routes() {
  const methods = useForm();

  return (
    <TokenProvider>
      <NavigationContainer>
        <FormProvider {...methods}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginStack" component={LoginRoutes} />
            <Stack.Screen name="AccountStack" component={AccountRoutes} />
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="SendPix" component={SendPix} />
            <Stack.Screen name="ReceivePix" component={ReceivePix} />
          </Stack.Navigator>
        </FormProvider>
      </NavigationContainer>
    </TokenProvider>
  );
}
