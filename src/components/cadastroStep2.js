import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../components/Style'

export default function Step2({ onNext, onBack, formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <View style={{ marginBlock: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.h2}>Endereço</Text>
        <Button title="Próximo" onPress={onNext} style={styles.btn} />
      </View>

      <View style={{ marginTop: 20 }}>
        <TextInput style={styles.input} placeholder="Rua" value={formData.street} onChangeText={(text) => handleInputChange('street', text)} />
        <TextInput style={styles.input} placeholder="Número" value={formData.number} onChangeText={(text) => handleInputChange('number', text)} />
        <TextInput style={styles.input} placeholder="Bairro" value={formData.location} onChangeText={(text) => handleInputChange('location', text)} />
        <TextInput style={styles.input} placeholder="CEP" value={formData.cep} onChangeText={(text) => handleInputChange('cep', text)} />
        <TextInput style={styles.input} placeholder="Cidade" value={formData.city} onChangeText={(text) => handleInputChange('city', text)} />
        <TextInput style={styles.input} placeholder="Estado" value={formData.state} onChangeText={(text) => handleInputChange('state', text)} />
        <TextInput style={styles.input} placeholder="País" value={formData.country} onChangeText={(text) => handleInputChange('country', text)} />
      </View>

    </View>
  );
};