import React from 'react';
import { View } from 'react-native';
import Menu from '../../components/Menu';
import StockLarge from '../../components/StockLarge';

import styles from './styles';

export default function AllStocks() {
  return (
    <View style={styles.container}>
      <Menu />
      <StockLarge name="Petrobras" stockId="PETR4" price={27.96} />
      <StockLarge name="Petrobras" stockId="PETR4" price={27.96} />
      <StockLarge name="Petrobras" stockId="PETR4" price={27.96} />
    </View>
  );
}
