import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import StockCard from '../../components/StockCard';
import Menu from '../../components/Menu';

export default function Home() {
  return (
    <View style={styles.container}>
      <StockCard name="Ambev SA" stockId="ABEV3" price={14.59} />
      <StockCard name="Petrobras" stockId="PETR4" price={27.96} />
      <Menu />
    </View>
  );
}
