import React from "react";
import { Text, View, TextInput, Image, Pressable } from "react-native";
import styles from '../components/Style'

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon/logo_gray.png')} style={{ width: 152, height: 48, resizeMode: 'contain', marginTop: 132, marginBottom: 64 }} />
      <Text style={[styles.text, styles.h2]}>Entre em sua conta</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.text}>Novo por aqui? </Text>
        <Text style={styles.textLink}>Crie uma conta</Text>
      </View>
      <View style={{ marginTop: 48 }}>
        <TextInput style={styles.input} placeholder="E-mail"></TextInput>
        <TextInput style={styles.input} placeholder="Senha"></TextInput>
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.textBtn}>Entrar</Text>
      </Pressable>
      <Pressable style={{ marginTop: 16 }}>
        <Text style={styles.text}>Esqueceu a senha ?</Text>
      </Pressable>
    </View>
  );
}