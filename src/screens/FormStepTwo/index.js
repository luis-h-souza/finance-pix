import { useRef, useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
import { useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../FormStepOne/Style";
import Feather from '@expo/vector-icons/Feather';

import { phoneMask, cpfMask } from "../../utils/index"
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/BtnForm";
import { Progress } from "../../components/Progress/index";

export function FormStepTwo() {


  function applyMask(text, type = "cpf") {
    let onlyNumbers = text.replace(/\D/g, "");
    if (type === "cpf") {
      return cpfMask(onlyNumbers);
    }
    if (type === "phone") {
      return phoneMask(onlyNumbers);
    }
    return onlyNumbers;
  }

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
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={[styles.container, { paddingTop: 72 }]}
          keyboardShouldPersistTaps="handled"
        >
          <Progress progress={50} />
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
                  message: "CPF inválido - formato inválido",
                },
              },
            }}
            inputProps={{
              placeholder: "CPF - xxx.xxx.xxx-xx",
              keyboardType: "number-pad",
              maxLength: 14,
              onSubmitEditing: () => phoneRef.current?.blur(),
              returnKeyType: "next",
            }}
            mask={applyMask}
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
                  message: "Telefone inválido",
                },
              },
            }}
            inputProps={{
              placeholder: "Telefone - (XX) XXXXX-XXXX",
              keyboardType: "number-pad",
              maxLength: 15,
              onSubmitEditing: handleSubmit(handleNextStep),
              returnKeyType: "done",
            }}
            mask={phoneMask}
            name="phone"
          />

          <Button title="Continuar" onPress={handleSubmit(handleNextStep)} >
            <Feather name="arrow-right" size={24} color="#FFF" styles={styles.buttonSteps} />
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
