/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import StockCard from '../StockCard';
import UserContext from '../../context/UserContext';

export default function MyStocks() {
  const { myStocks } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Ações:</Text>
      <View style={styles.stocks}>
        {myStocks && myStocks.map((stock) => (
          <StockCard key={stock.stockId} {...stock} />
        ))}
      </View>
    </View>
  );
}
