import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [input, setInput] = useState('');
  const [name, setName] = useState('');

  function saveInfo() {
    if (input === '') {
      alert('Preencha o campo nome');
      return;
    }
    setName(input);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        value={input}
        onChangeText={text => setInput(text)}
      />

      <TouchableOpacity style={styles.button} onPress={saveInfo}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 30,
    fontSize: 24,
    textAlign: 'center',
  },
});
