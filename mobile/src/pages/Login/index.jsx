import React, { useState } from 'react';
import {
  TextInput, TouchableOpacity, View, Text,
} from 'react-native';

import theme from '../../theme';
import validateLogin from '../../utils/validateLogin';
import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity
        disabled={validateLogin(email, password)}
        style={validateLogin(email, password) ? styles.buttonDisabled : styles.button}
      >
        <Text style={styles.buttonTitle}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;
