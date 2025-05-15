import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';

export default function IMCApp() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  function calcularIMC() {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
      Alert.alert('Erro', 'Preencha os campos corretamente com valores válidos.');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';

    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 25) classificacao = 'Peso normal';
    else if (imc < 30) classificacao = 'Sobrepeso';
    else if (imc < 35) classificacao = 'Obesidade grau I';
    else if (imc < 40) classificacao = 'Obesidade grau II';
    else classificacao = 'Obesidade grau III';

    setResultado(imc.toFixed(2));
    setClassificacao(classificacao);
    Keyboard.dismiss();
  }

  function limparCampos() {
    setPeso('');
    setAltura('');
    setResultado('');
    setClassificacao('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculador de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={limparCampos}>
        <Text style={styles.clearButtonText}>Limpar</Text>
      </TouchableOpacity>

      {resultado !== '' && (
        <View style={styles.resultArea}>
          <Text style={styles.resultText}>Seu IMC: {resultado}</Text>
          <Text style={styles.resultText}>Classificação: {classificacao}</Text>
        </View>
      )}
    </View>
  );
}


