import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export function HomeRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
