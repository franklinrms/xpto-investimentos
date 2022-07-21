import React from 'react';
import {
  Image, Text, TouchableOpacity, View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import image from '../../assets/undraw_Location_search.png';

export default function EmptyWallet() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>Está meio vazio por aqui...</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AllStocks')}
        style={styles.button}
      >
        <Text style={styles.buttonTitle}>Comprar ações</Text>
      </TouchableOpacity>
    </View>
  );
}
