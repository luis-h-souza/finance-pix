import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Image, Pressable, Button } from "react-native";
import styles from '../components/Style'
import Step1 from '../components/cadastroStep1'
import Step2 from '../components/cadastroStep2'

// Define o componente CadastroSteps, que recebe a propriedade navigation para navegação.
export default function CadastroSteps({ navigation }) {
  // Declara o estado currentStep para controlar o passo atual do formulário, inicializado como 1.
  const [currentStep, setCurrentStep] = useState(1);
  // Declara o estado formData para armazenar os dados do formulário, inicializado como um objeto vazio.
  const [formData, setFormData] = useState({});

  // Função para avançar para o próximo passo do formulário.
  const nextStep = () => setCurrentStep(currentStep + 1);
  // Função para voltar para o passo anterior do formulário.
  const prevStep = () => setCurrentStep(currentStep - 1);

  // Função para renderizar o componente do passo atual com base no valor de currentStep.
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        // Renderiza o componente Step1, passando as props necessárias.
        return <Step1 onNext={nextStep} formData={formData} setFormData={setFormData} />;
      case 2:
        // Renderiza o componente Step2, passando as props necessárias.
        return <Step2 onNext={nextStep} onBack={prevStep} formData={formData} setFormData={setFormData} />;

      default:
        // Caso padrão, renderiza uma mensagem indicando a conclusão do cadastro.
        return <Text>Animação de cadastro Concluído!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderStep()}
      <View style={styles.navigation}>
        {currentStep > 1 && <Button style={styles.btn} title="Finalizar" onPress={() => {navigation.navigate('Login')}} />}
      </View>
    </View>
  );
};
