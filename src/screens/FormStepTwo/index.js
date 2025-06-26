import { useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../FormStepOne/Style";

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
      <Progress progress={66} />
      <Text style={styles.h2}>Suas informações</Text>

      <Input
        error={String(errors?.birth?.message || "")}
        formProps={{
          control,
          name: "birth",
          rules: {
            required: "A data de nascimento é obrigatória",
            pattern: {
              value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
              message: "Data inválida - 00/00/0000",
            },
          },
        }}
        inputProps={{
          placeholder: "dd/mm/aaaa",
          onSubmitEditing: () => phoneRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="birth"
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

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  );
}
