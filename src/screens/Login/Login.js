import React from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import { useForm } from "react-hook-form";

import { styles } from './Style';

import { Button } from '../../components/Button/BtnForm'
import { Input } from "../../components/Input";

export function Login({ navigation }) {
  const { control, formState: { errors } } = useForm();

  return (
    <View style={styles.container}>

      <Image source={require('../../../assets/icon/logo_gray.png')} style={styles.loginLogo} />
      <Text style={[styles.text, styles.h2]}>Entre em sua conta</Text>

      <View style={{ flexDirection: 'row', marginBottom: 48 }}>
        <Text style={styles.text}>Novo por aqui? </Text>
        <Pressable onPress={() => navigation.navigate('AccountStack')}>
          <Text style={styles.textLink}>Crie sua conta</Text>
        </Pressable>
      </View>

      <Input
        style={{ marginBottom: 24 }}
        formProps={{
          name: "email",
          control,
          defaultValue: "",
          rules: { required: true }
        }}
        inputProps={{
          placeholder: "E-mail"
        }}
        error={errors?.email?.message}
      />

      <Input
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
        }}
        name="password"
      />

      <Button title={'Entrar'} onPress={() => navigation.navigate('Home')} />

      <Pressable style={{ marginTop: 24 }}>
        <Text style={styles.textLink}>Esqueceu a senha ?</Text>
      </Pressable>
    </View>
  );
}