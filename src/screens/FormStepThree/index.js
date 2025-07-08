import { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';

import { cepMask } from "../../utils/index"
import { styles } from "../FormStepOne/Style";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/BtnForm";
import { PickerInput } from "../../components/PickerInput/index";
import { Progress } from "../../components/Progress/index";
import Feather from '@expo/vector-icons/Feather';

export function FormStepThree() {
  const { navigate } = useNavigation();

  function applyMask(text, type = "cpf") {
    let onlyNumbers = text.replace(/\D/g, "");
    if (type === "cep") {
      return cepMask(onlyNumbers);
    }
    return onlyNumbers;
  }
  // control é um objeto que contém os métodos de controle do formulário, como handleSubmit e register
  // handleSubmit é uma função que lida com o envio do formulário e executa a validação dos campos
  // formState é um objeto que contém o estado do formulário, incluindo erros de validação
  // errors é um objeto que contém os erros de validação dos campos de input
  // useFormContext é usado para acessar o contexto do formulário e obter os métodos de controle e validação
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardOpen(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardOpen(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  function handleNextStep() {
    navigate("formStepFour");
  }
  // useRef é usado para criar uma referência para o campo de input de endereço
  const addressRef = useRef(null);

  // KeyboardAvoidingView é usado para ajustar o layout quando o teclado é aberto
  // behavior é usado para definir como o layout deve se comportar quando o teclado é aberto
  // keyboardVerticalOffset é usado para ajustar a posição do layout quando o teclado é aberto
  // contentContainerStyle é usado para definir o estilo do conteúdo dentro do KeyboardAvoidingView
  // TouchableWithoutFeedback é usado para detectar toques fora dos campos de input e fechar o teclado
  // keyboardShouldPersistTaps="handled" é usado para garantir que os toques fora dos campos de input fechem o teclado
  // Platform é usado para verificar se o dispositivo é iOS ou Android, para ajustar o comportamento do teclado
  return (
    <SafeAreaView style={{ flex: 1, padding: 24, backgroundColor: '#F4f5f6' }}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        behavior={Platform.OS === "ios" ? "padding" : "height"} // behavior é usado para definir como o layout deve se comportar quando o teclado é aberto
        // keyboardVerticalOffset é usado para ajustar a posição do layout quando o teclado é aberto
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
        contentContainerStyle={{ flex: 1}}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            style={{ flex: 1 }}
            bounces={false}
            contentContainerStyle={[
              { paddingVertical: 24 }
            ]}
            keyboardShouldPersistTaps="handled"
          >

            <View style={{ flexGrow: 1, paddingTop: 52, paddingBottom: 24, gap: 12, justifyContent: 'center' }}>

              <Progress progress={75} />
              <Text style={styles.h2}>Endereço:</Text>

              <Input
                error={String(errors?.street?.message || "")}
                formProps={{
                  control,
                  name: "street",
                  rules: { required: "O nome da rua é obrigatória." },
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
                  rules: { required: "O número da casa é obrigatória." },
                }}
                inputProps={{
                  placeholder: "Número",
                  keyboardType: "numeric",
                  returnKeyType: "next",
                  styles: { maxWidth: 100 },
                }}
                name="number"
              />

              <Input
                error={String(errors?.location?.message || "")}
                formProps={{
                  control,
                  name: "location",
                  rules: { required: "O bairro é obrigatória." },
                }}
                inputProps={{
                  placeholder: "Bairro",
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
                    maxLength: {
                      value: 10,
                      message: "O CEP deve ter no máximo 10 caracteres.",
                    },
                    pattern: {
                      // value: /^\d{5}-?\d{3}$/,
                      message: "CEP inválido - formato inválido",
                    },
                  },
                }}
                inputProps={{
                  placeholder: "CEP",
                  keyboardType: "numeric",
                  maxLength: 10,
                  onSubmitEditing: () => addressRef.current?.focus(),
                  returnKeyType: "next",
                }}
                mask={text => applyMask(text, "cep")}
                name="cep"
              />

              <Input
                error={String(errors?.city?.message || "")}
                formProps={{
                  control,
                  name: "city",
                  rules: { required: "O nome da cidade é obrigatória." },
                }}
                inputProps={{
                  placeholder: "Cidade",
                  returnKeyType: "next",
                }}
                name="city"
              />

              <View style={{ flexDirection: 'row', gap: 8, marginBottom: 8 }}>
                <View style={{ flex: 1 }}>
                  <PickerInput
                    formProps={{
                      control,
                      name: "state",
                      rules: {
                        required: "O nome do estado é obrigatória.",
                        maxLength: { value: 2, message: "O estado deve ter no máximo 2 caracteres." },
                      },
                    }}
                    error={String(errors?.state?.message || "")}
                  >
                    <Picker.Item label="Estados" value="" />
                    <Picker.Item label="AC" value="AC" />
                    <Picker.Item label="AL" value="AL" />
                    <Picker.Item label="AP" value="AP" />
                    <Picker.Item label="AM" value="AM" />
                    <Picker.Item label="BA" value="BA" />
                    <Picker.Item label="CE" value="CE" />
                    <Picker.Item label="DF" value="DF" />
                    <Picker.Item label="ES" value="ES" />
                    <Picker.Item label="GO" value="GO" />
                    <Picker.Item label="MA" value="MA" />
                    <Picker.Item label="MT" value="MT" />
                    <Picker.Item label="MS" value="MS" />
                    <Picker.Item label="MG" value="MG" />
                    <Picker.Item label="PA" value="PA" />
                    <Picker.Item label="PB" value="PB" />
                    <Picker.Item label="PR" value="PR" />
                    <Picker.Item label="PE" value="PE" />
                    <Picker.Item label="PI" value="PI" />
                    <Picker.Item label="RJ" value="RJ" />
                    <Picker.Item label="RN" value="RN" />
                    <Picker.Item label="RS" value="RS" />
                    <Picker.Item label="RO" value="RO" />
                    <Picker.Item label="RR" value="RR" />
                    <Picker.Item label="SC" value="SC" />
                    <Picker.Item label="SP" value="SP" />
                    <Picker.Item label="SE" value="SE" />
                    <Picker.Item label="TO" value="TO" />
                  </PickerInput>
                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                  <Input
                    error={String(errors?.country?.message || "")}
                    formProps={{
                      control,
                      name: "country",
                      rules: { required: "O nome do país é obrigatória." },
                    }}
                    inputProps={{
                      placeholder: "País",
                      returnKeyType: "done",
                    }}
                    name="country"
                  />
                </View>
              </View>

              <Button title="Continuar" onPress={handleSubmit(handleNextStep)} >
                <Feather name="arrow-right" size={24} color="#FFF" styles={styles.buttonSteps} />
              </Button>

            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
