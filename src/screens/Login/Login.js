import { Text, View, Image, Pressable } from "react-native";
import { useForm } from "react-hook-form";

import { styles } from './Style';
import { Input } from "../../components/Input";
import { loginApi } from "../../services/Api";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Login({ navigation }) {
  const { control, formState: { errors } } = useForm();

  const { getValues } = useForm();

  function loginApp() {

    const enterApp = async (email, password) => {
      try {
        const response = await loginApi.post(
          "/login",
          {
            // getValues para obter os valores dos campos
            email: getValues('email'),
            password: getValues('password')
          },
          {
            headers: {
              'id-bank': '9',
              'Content-Type': 'application/json'
            }
          }
        );
        const token = data.token

        // Extrai o token da resposta

        // Verifica se o token é válido
        if (!token || typeof token !== 'string') {
          console.error('Token inválido ou não retornado pela API:', token);
          throw new Error('Token inválido');
        }

        // Salva o token no AsyncStorage
        await AsyncStorage.setItem('userToken', token);
        console.log('Token salvo com sucesso:', token);

      //   // return token; // Retorna o token, se necessário
      // } catch (error) {
      //   console.error('Erro ao fazer login ou salvar token:', error.message);
      //   throw error; // Propaga o erro para ser tratado pelo chamador
      // }

      console.log('Login realizado com sucesso!');
      console.log('Resposta da API:', response);
      navigation.navigate('MainTabs');
    } catch (error) {
      if (error.response) {
        console.error('Erro da API:', error.response.data);
        Alert.alert('Erro ao fazer login', JSON.stringify(error.response.data));
      } else {
        console.error('Erro:', error.message);
        Alert.alert('Erro ao fazer login', error.message);
      }
    }
  }
  enterApp();
}

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
        placeholder: "E-mail",
        keyboardType: "email-address",
        returnKeyType: "next"
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

    <Pressable title="Entrar" style={styles.button} onPress={() => loginApp()}>
      <Text style={styles.titleBtn}>Entrar</Text>
    </Pressable>

    <Pressable style={{ marginTop: 24 }}>
      <Text style={styles.textLink}>Esqueceu a senha ?</Text>
    </Pressable>
  </View>
);
}
