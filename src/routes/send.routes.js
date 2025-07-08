import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SendPix } from "../screens/SendPix/SendPix";

const Stack = createNativeStackNavigator();

export function PixRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SendPix" component={SendPix} />
    </Stack.Navigator>
  )
}
