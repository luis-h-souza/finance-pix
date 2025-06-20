import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from '../components/Style'

// Supondo que Feather.glyphMap seja um objeto:
const iconNames = Object.keys(Feather.glyphMap);

// Para verificar se um valor está entre as chaves:
function isValidIcon(icon) {
  return iconNames.includes(icon);
}

// Exemplo de uso:
const props = { icon: "home" };
if (isValidIcon(props.icon)) {
  // use props.icon
}

export default function Step1({ onNext, formData, setFormData, icon }) {
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <View style={{ marginBlock: 20 }}>
      <Text style={styles.h2}>Step 1: Informações Pessoais</Text>

      <View style={{ marginTop: 48 }}>
        <TextInput style={styles.input} placeholder="Nome" value={formData.name} onChangeText={(text) => handleInputChange('name', text)} />
        <TextInput style={styles.input} placeholder="E-mail" value={formData.email} onChangeText={(text) => handleInputChange('email', text)} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} value={formData.password} onChangeText={(text) => handleInputChange('password', text)} />
        <TextInput style={styles.input} placeholder="Confirmar senha" secureTextEntry={true} value={formData.password} onChangeText={(text) => handleInputChange('password', text)} />
        <TextInput style={styles.input} placeholder="Telefone" value={formData.telefone} onChangeText={(text) => handleInputChange('telefone', text)} />
      </View>

      <Button title="Próximo" onPress={onNext} />
    </View>
  );
};