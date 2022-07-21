import React, { useState } from 'react';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import { VictoryArea } from 'victory-native';
import theme from '../../theme';

import styles from './styles';
import priceHistoryType from '../../utils/priceHistoryType';
import PRICE_HISTORY_DATA from '../../data/PRICE_HISTORY_DATA';

export default function Graphic() {
  const [selectedId, setSelectedId] = useState(0);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? theme.colors.brand : theme.colors.text_secondary;
    const borderColor = item.id === selectedId ? theme.colors.brand : theme.colors.background;
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[styles.button, { borderColor }]}
      >
        <Text style={[styles.title, { color }]}>{item.title}</Text>
      </TouchableOpacity>

    );
  };

  return (
    <View style={styles.container}>
      <VictoryArea
        animate={{
          duration: 1000,
          onLoad: { duration: 2000 },
        }}
        width={500}
        height={300}
        padding={10}
        style={{
          data: {
            fill: theme.colors.brand,
            fillOpacity: 0.1,
            stroke: theme.colors.brand,
            strokeWidth: 3,
          },
        }}
        data={PRICE_HISTORY_DATA[selectedId]}
      />
      <FlatList
        horizontal
        data={priceHistoryType}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}
