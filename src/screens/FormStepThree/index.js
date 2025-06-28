import { useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../FormStepOne/Style";
import { validatePasswordConfirmation } from "../../utils/validatePassword";

import Feather from '@expo/vector-icons/Feather';
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/BtnForm";
import { Progress } from "../../components/Progress/index";

export function FormStepThree() {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useFormContext();

  const passwordConfirmationRef = useRef(null);

  function handleNextStep(data) {
    console.log(data);
    navigate("Login");
  }

  const passwordConfirmationValidator = validatePasswordConfirmation(getValues);

  return (
    <View style={styles.container}>
      <Progress progress={100} />
      <Text style={styles.h2}>Escolha sua senha</Text>

      <Input
        icon="key"
        error={String(errors?.password?.message || "")}
        formProps={{
          control,
          name: "password",
          rules: {
            required: "A senha é obrigatória.",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caracteres.",
            },
          },
        }}
        inputProps={{
          placeholder: "Senha",
          onSubmitEditing: () => passwordConfirmationRef.current?.focus(),
          returnKeyType: "next",
          secureTextEntry: true,
          returnKeyType: "next"
        }}
        name="password"
      />

      <Input
        error={String(errors?.passwordConfirmation?.message || "")}
        ref={passwordConfirmationRef}
        icon="key"
        formProps={{
          control,
          name: "passwordConfirmation",
          rules: {
            required: "A confirmação de senha é obrigatória.",
            validate: passwordConfirmationValidator,
          },
        }}
        inputProps={{
          placeholder: "Confirmar a senha",
          onSubmitEditing: handleSubmit(handleNextStep),
          secureTextEntry: true,
          returnKeyType: "done"
        }}
        name="passwordConfirmation"
      />

      <Button title="Enviar" onPress={handleSubmit(handleNextStep)} >
        <Feather name="send" size={24} color="#FFF" styles={styles.buttonSteps}/>
      </Button>

    </View>
  );
}
