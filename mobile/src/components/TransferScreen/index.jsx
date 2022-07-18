import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, FlatList,
} from 'react-native';
import theme from '../../theme';
import transferType from '../../utils/transferType';
import TransferOption from '../TransferOption';

import styles from './styles';

export default function TransferScreen() {
  const [value, setValue] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const color = item.id === selectedId ? theme.colors.brand : theme.colors.text_secondary;
    const borderColor = item.id === selectedId ? theme.colors.brand : theme.colors.surface_primary;
    return (
      <TransferOption
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{ color }}
        borderColor={{ borderColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo</Text>
      <FlatList
        horizontal
        data={transferType}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <TextInput
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor={theme.colors.brand}
        keyboardType="number-pad"
        onChangeText={setValue}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Transferir</Text>
      </TouchableOpacity>
    </View>
  );
}
