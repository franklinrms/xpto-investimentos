import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import UserContext from '../../context/UserContext';
import TransferButton from '../TransferButton';

import styles from './styles';

export default function Balance() {
  const { balance } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saldo disponível</Text>
      <Text style={styles.value}>{`R$ ${Number(balance).toFixed(2)}`}</Text>
      <TransferButton />
    </View>
  );
}
