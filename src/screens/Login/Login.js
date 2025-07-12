import { Text, View, Image, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./Style";
import { Input } from "../../components/Input";
import { loginApi } from "../../services/Api";

export function Login({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();

const onSubmit = async (data) => {
  try {
    const response = await loginApi.post(
      "/login",
      {
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          "id-bank": "9",
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data.token;
    const idClient = response.data.id_client;

    if (!token || typeof token !== "string") {
      console.error("Token inválido ou não retornado pela API:", token);
      throw new Error("Token inválido");
    }
    if (!idClient) {
      console.error("id_client inválido ou não retornado pela API:", idClient);
      throw new Error("id_client inválido");
    }

    const idClientString = String(idClient);

    // Usar multiSet para salvar os valores atomicamente
    await AsyncStorage.multiSet([
      ["token", token],
      ["id_client", idClientString],
    ]);

    const savedToken = await AsyncStorage.getItem("token");
    const savedIdClient = await AsyncStorage.getItem("id_client");
    console.log("Token salvo com sucesso:", savedToken);
    console.log("id_client salvo com sucesso:", savedIdClient);

    if (savedToken !== token || savedIdClient !== idClientString) {
      console.error("Falha ao salvar valores no AsyncStorage", {
        savedToken,
        savedIdClient,
        expectedToken: token,
        expectedIdClient: idClientString,
      });
      throw new Error("Falha ao salvar dados no AsyncStorage");
    }

    navigation.navigate("MainTabs");
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
  }
};

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/icon/logo_gray.png")} style={styles.loginLogo} />
      <Text style={[styles.text, styles.h2]}>Entre em sua conta</Text>

      <View style={{ flexDirection: "row", marginBottom: 48 }}>
        <Text style={styles.text}>Novo por aqui? </Text>
        <Pressable onPress={() => navigation.navigate("AccountStack")}>
          <Text style={styles.textLink}>Crie sua conta</Text>
        </Pressable>
      </View>

      <Input
        style={{ marginBottom: 24 }}
        formProps={{
          name: "email",
          control,
          defaultValue: "",
          rules: { required: true },
        }}
        inputProps={{
          placeholder: "E-mail",
          keyboardType: "email-address",
          returnKeyType: "next",
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
          onDeployEditing: () => passwordConfirmationRef.current?.focus(),
          returnKeyType: "next",
          secureTextEntry: true,
        }}
        name="password"
      />

      <Pressable title="Entrar" style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.titleBtn}>Entrar</Text>
      </Pressable>

      <Pressable style={{ marginTop: 24 }}>
        <Text style={styles.textLink}>Esqueceu a senha?</Text>
      </Pressable>
    </View>
  );
}
