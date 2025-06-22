import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginRoutes } from "./login.routes";
import { AccountRoutes } from "./account.routes";
import { FormProvider, useForm } from "react-hook-form";

const Stack = createNativeStackNavigator();

export function Routes() {
  const methods = useForm();

  return (
    <NavigationContainer>
      <FormProvider {...methods}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginStack" component={LoginRoutes} />
          <Stack.Screen name="AccountStack" component={AccountRoutes} />
        </Stack.Navigator>
      </FormProvider>
    </NavigationContainer>
  );
}