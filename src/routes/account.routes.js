import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FormStepOne } from "../screens/FormStepOne";
import { FormStepTwo } from "../screens/FormStepTwo";
import { FormStepThree } from "../screens/FormStepThree";
import { FormStepFour } from "../screens/FormStepFour";
import { Login } from "../screens/Login/Login";

const Stack = createNativeStackNavigator();

export function AccountRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="formStepOne" component={FormStepOne} />
      <Stack.Screen name="formStepTwo" component={FormStepTwo} />
      <Stack.Screen name="formStepThree" component={FormStepThree} />
      <Stack.Screen name="formStepFour" component={FormStepFour} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
