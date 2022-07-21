/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Menu from '../../components/Menu';
import StockLarge from '../../components/StockLarge';

import styles from './styles';
import STOCKS_DATA from '../../data/STOCKS_DATA';

export default function AllStocks() {
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
          data={STOCKS_DATA}
          renderItem={({ item }) => (
            <StockLarge {...item} />
          )}
        />
      </View>
      <Menu />
    </View>
  );
}
