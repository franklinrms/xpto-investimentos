import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';
import Menu from '../../components/Menu';
import UserContext from '../../context/UserContext';

import styles from './styles';
import logo from '../../assets/XPTO_04.png';
import image from '../../assets/undraw_profile_pic.png';

export default function Profile() {
  const {
    user, setUser, setMyStocks, balanceUpdate,
  } = useContext(UserContext);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.title}>{user.email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setUser({});
          setMyStocks([]);
          balanceUpdate(0);
          navigation.navigate('Login');
        }}
      >
        <Text style={styles.buttonTitle}>Sair</Text>
      </TouchableOpacity>
      <Image source={logo} style={styles.logo} />
      <Menu />
    </View>
  );
}
