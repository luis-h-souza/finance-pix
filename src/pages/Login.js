import React from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import styles from '../components/Style'

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <Image source={require('../../assets/icon/logo_gray.png')} style={styles.loginLogo} />
      <Text style={[styles.text, styles.h2]}>Entre em sua conta</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>Novo por aqui? </Text>
        <Pressable onPress={() => navigation.navigate('Cadastro de cliente')}>
          <Text style={styles.textLink}>Crie sua conta</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 48 }}>
        <TextInput style={styles.input} placeholder="E-mail"></TextInput>
        <TextInput style={styles.input} placeholder="Senha"></TextInput>
      </View>

      <Pressable style={styles.btn} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textBtn}>Entrar</Text>
      </Pressable>
      <Pressable style={{ marginTop: 24 }}>
        <Text style={styles.textLink}>Esqueceu a senha ?</Text>
      </Pressable>
    </View>
  );
}