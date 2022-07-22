import React, { useState } from 'react';
import {
  TextInput, TouchableOpacity, View, Text, Image,
} from 'react-native';

import theme from '../../theme';
import validateLogin from '../../utils/validateLogin';
import styles from './styles';
import logo from '../../assets/XPTO_04.png';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.register}>Boas-vindas!</Text>
      <Text style={styles.register}>Precisamos criar o seu perfil para acesso</Text>
      <TextInput
        style={styles.input}
        placeholder="Como você gostaria de ser chamado?"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Crie uma senha com 8 dígitos"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity
        disabled={validateLogin(email, password)}
        style={validateLogin(email, password) ? styles.buttonDisabled : styles.button}
      >
        <Text style={styles.buttonTitle}>Criar conta</Text>
      </TouchableOpacity>
      <Image source={logo} style={styles.image} />
    </View>
  );
}
