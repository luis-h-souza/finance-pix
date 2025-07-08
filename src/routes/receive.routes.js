import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ReceivePix } from "../screens/ReceivePix/ReceivePix";

const Stack = createNativeStackNavigator();

export function PixRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ReceivePix" component={ReceivePix} />
    </Stack.Navigator>
  )
}
