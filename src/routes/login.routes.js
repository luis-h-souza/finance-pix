import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Splash } from "../screens/Splash/Splash";
import { Login } from "../screens/Login/Login";

const Stack = createNativeStackNavigator();

export function LoginRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}