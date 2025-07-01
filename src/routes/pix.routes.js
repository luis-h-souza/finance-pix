import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Transaction } from "../screens/Pix/Pix";

const Stack = createNativeStackNavigator();

export function PixRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Pix" component={Transaction} />
    </Stack.Navigator>
  )
}
