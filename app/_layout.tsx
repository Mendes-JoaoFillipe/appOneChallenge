import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function saveInfo() {
    if (input === '') {
      alert('Preencha o campo nome');
      return;
    }
    setName(input);
    setInput('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/b6/3d/ec/b63dec6d3c14176b805163971866f69d.jpg' }} 
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        value={input}
        onChangeText={text => setInput(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={saveInfo}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

    
<Text style={styles.forgotPassword}>Esqueci a senha</Text>

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
  image: {
    width: 120,
    height: 120,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
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

  forgotPassword: {
    marginTop: 10,
    color: '#007bff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  
});
