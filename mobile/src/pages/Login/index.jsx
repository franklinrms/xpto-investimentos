import React, { useEffect, useState } from 'react';
import {
  TextInput, TouchableOpacity, View, Text, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import theme from '../../theme';
import validateLogin from '../../utils/validateLogin';
import styles from './styles';
import logo from '../../assets/XPTO_02.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getData = async () => {
      const LOGGED_USER = await AsyncStorage.getItem('LOGGED_USER');
      if (LOGGED_USER) {
        const dataUser = JSON.parse(LOGGED_USER);
        setEmail(dataUser.email);
      }
    };
    getData();
  }, []);

  const navigation = useNavigation();

  const date = new Date().toLocaleString();
  const LOGGED_USER = JSON.stringify({ date, email });

  const storeData = async () => { await AsyncStorage.setItem('LOGGED_USER', LOGGED_USER); };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        value={email}
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
        onPress={() => {
          storeData();
          setPassword('');
          navigation.navigate('Wallet');
        }}
        disabled={validateLogin(email, password)}
        style={validateLogin(email, password) ? styles.buttonDisabled : styles.button}
      >
        <Text style={styles.buttonTitle}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.register}>É novo por aqui? Cadastre-se e abra a sua conta</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;
