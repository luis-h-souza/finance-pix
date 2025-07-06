import { useRef } from "react";
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      contentContainerStyle={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
        contentContainerStyle={[styles.container, { paddingTop: 72 }]}
        keyboardShouldPersistTaps="handled">
          <Progress progress={25} />
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
              returnKeyType: "done",
              onSubmitEditing: handleSubmit(handleNextStep),
            }}
          />

          <Button title="Continuar" onPress={handleSubmit(handleNextStep)} >
            <Feather name="arrow-right" size={24} color="#FFF" styles={styles.buttonSteps}/>
          </Button>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
