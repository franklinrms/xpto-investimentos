/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import Menu from '../../components/Menu';
import StockLarge from '../../components/StockLarge';
import UserContext from '../../context/UserContext';

import styles from './styles';

export default function AllStocks() {
  const { allStocks } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          style={styles.title}
        >
          Ações disponíveis para investir:
        </Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={allStocks}
          renderItem={({ item }) => (
            <StockLarge {...item} />
          )}
        />
      </View>
      <Menu />
    </View>
  );
}
