import { useRef } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFormContext } from "react-hook-form";

import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/BtnForm";
import { Progress } from "../../components/Progress/index";
import Feather from '@expo/vector-icons/Feather';

import { styles } from "./Style";

export function FormStepOne() {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const emailRef = useRef(null);

  function handleNextStep() {
    navigate("formStepTwo");
  }

  return (
    <View style={styles.container}>
      <Progress progress={30} />
      <Text style={styles.h2}>Criar sua conta</Text>

      <Input
        name="name"
        error={errors?.name?.message}
        formProps={{
          control,
          name: "name",
          rules: {
            required: "O nome é obrigatório",
          },
        }}
        inputProps={{
          placeholder: "Nome",
          onSubmitEditing: () => emailRef.current?.focus(),
          returnKeyType: "next",
        }}
      />

      <Input
        name="email"
        ref={emailRef}
        icon="mail"
        error={errors?.email?.message}
        formProps={{
          control,
          name: "email",
          rules: {
            required: "O e-mail é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/i,
              message: "E-mail inválido",
            },
          },
        }}
        inputProps={{
          placeholder: "E-mail",
          keyboardType: "email-address",
          returnKeyType: "next",
          onSubmitEditing: handleSubmit(handleNextStep),
        }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} >
        <Feather name="arrow-right" size={24} color="#FFF" styles={styles.buttonSteps}/>
      </Button>
    </View>
  );
}
