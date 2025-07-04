import { useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../FormStepOne/Style";
import Feather from '@expo/vector-icons/Feather';

import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/BtnForm";
import { Progress } from "../../components/Progress/index";

export function FormStepTwo() {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  function handleNextStep() {
    navigate("formStepThree");
  }

  const phoneRef = useRef(null);

  return (
    <View style={styles.container}>
      <Progress progress={55} />
      <Text style={styles.h2}>Seus dados:</Text>

      <Input
        error={String(errors?.cpf?.message || "")}
        formProps={{
          control,
          name: "cpf",
          rules: {
            required: "O CPF é obrigatório",
            maxLength: {
              value: 14,
              message: "O CPF deve ter 11 caracteres.",
            },
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
              message: "CPF inválido - formato inválido",
            },
          },
        }}
        inputProps={{
          placeholder: "xxx.xxx.xxx-xx",
          keyboardType: "number-pad",
          onSubmitEditing: () => phoneRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="cpf"
      />

      <Input
        error={String(errors?.phone?.message || "")}
        ref={phoneRef}
        icon="phone"
        formProps={{
          name: "phone",
          control,
          rules: {
            required: "O telefone é obrigatório",
            pattern: {
              value: /^\d{2}\s?\d{9}$/,
              message: "Telefone inválido",
            },
          },
        }}
        inputProps={{
          placeholder: "(XX) XXXXX-XXXX",
          keyboardType: "number-pad",
          returnKeyType: "next",
          onSubmitEditing: handleSubmit(handleNextStep),
        }}
        name="phone"
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} >
        <Feather name="arrow-right" size={24} color="#FFF" styles={styles.buttonSteps} />
      </Button>
    </View>
  );
}
