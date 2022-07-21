import React, { useState } from 'react';
import {
  TextInput, TouchableOpacity, View, Text, Image,
} from 'react-native';

import theme from '../../theme';
import validateLogin from '../../utils/validateLogin';
import styles from './styles';
import logo from '../../assets/XPTO_02.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
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
      <TouchableOpacity>
        <Text style={styles.register}>É novo por aqui? Cadastre-se e abra a sua conta</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;
