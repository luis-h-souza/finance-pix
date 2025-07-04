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

export function FormStepThree({ style }) {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useFormContext();

  function handleNextStep() {
    navigate("formStepFour");
  }

  const addressRef = useRef(null);

  return (
    <View style={styles.container}>
      <Progress progress={75} />
      <Text style={styles.h2}>Endereço:</Text>

      <Input
        error={String(errors?.street?.message || "")}
        formProps={{
          control,
          name: "street",
          rules: {
            required: "O nome da rua é obrigatória.",
          },
        }}
        inputProps={{
          placeholder: "Rua",
          onSubmitEditing: () => addressRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="street"
      />

      <Input
        error={String(errors?.number?.message || "")}
        formProps={{
          control,
          name: "number",
          rules: {
            required: "O número da casa é obrigatória.",
          },
        }}
        inputProps={{
          placeholder: "Número",
          keyboardType: "numeric",
          onSubmitEditing: () => addressRef.current?.focus(),
          returnKeyType: "next",
          styles: { maxWidth: 100 }
        }}
        name="number"
      />

      <Input
        error={String(errors?.location?.message || "")}
        formProps={{
          control,
          name: "location",
          rules: {
            required: "O bairro é obrigatória.",
          },
        }}
        inputProps={{
          placeholder: "Bairro",
          onSubmitEditing: () => addressRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="location"
      />

      <Input
        error={String(errors?.cep?.message || "")}
        formProps={{
          control,
          name: "cep",
          rules: {
            required: "O CEP é obrigatória.",
            pattern: {
              value: /^\d{5}-?\d{3}$/,
              message: "CEP inválido - formato inválido",
            },
          },
        }}
        inputProps={{
          placeholder: "CEP - xx.xxx-xxx",
          onSubmitEditing: () => addressRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="cep"
      />

      <Input
        error={String(errors?.city?.message || "")}
        formProps={{
          control,
          name: "city",
          rules: {
            required: "O nome da cidade é obrigatória.",
          },
        }}
        inputProps={{
          placeholder: "Cidade",
          onSubmitEditing: () => addressRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="city"
      />

      <Input
        error={String(errors?.state?.message || "")}
        formProps={{
          control,
          name: "state",
          rules: {
            required: "O nome do estado é obrigatória.",
            maxLength: {
              value: 2,
              message: "O estado deve ter no máximo 2 caracteres.",
            }
          },
        }}
        inputProps={{
          placeholder: "Estado - XX",
          onSubmitEditing: () => addressRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="state"
      />

      <Input
        error={String(errors?.country?.message || "")}
        formProps={{
          control,
          name: "country",
          rules: {
            required: "O nome do país é obrigatória.",
          },
        }}
        inputProps={{
          placeholder: "País",
          onSubmitEditing: () => addressRef.current?.focus(),
          returnKeyType: "next",
        }}
        name="country"
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} >
        <Feather name="arrow-right" size={24} color="#FFF" styles={styles.buttonSteps} />
      </Button>

    </View>
  );
}
