import { useNavigation } from '@react-navigation/native';
import { User } from 'phosphor-react-native';
import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Menu from '../../components/Menu';
import UserContext from '../../context/UserContext';
import theme from '../../theme';

import styles from './styles';

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <User size={36} color={theme.colors.text_secondary} weight="regular" />
      </View>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.title}>{user.email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setUser({});
          navigation.navigate('Login');
        }}
      >
        <Text style={styles.buttonTitle}>Sair</Text>
      </TouchableOpacity>
      <Menu />
    </View>
  );
}
