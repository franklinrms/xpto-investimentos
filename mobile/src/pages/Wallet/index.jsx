import React from 'react';
import { View } from 'react-native';

import Balance from '../../components/Balance';
import Menu from '../../components/Menu';
import styles from './styles';

export default function Wallet() {
  return (
    <View style={styles.container}>
      <Balance />
      {/* <Button
        title="Depositar"
        color={theme.colors.brand}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      /> */}
      <Menu />
    </View>
  );
}
