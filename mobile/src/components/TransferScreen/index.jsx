import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, FlatList,
} from 'react-native';
import theme from '../../theme';
import transferType from '../../utils/transferType';
import validateTransfer from '../../utils/validateTransfer';
import TransferOption from '../TransferOption';

import styles from './styles';

export default function TransferScreen() {
  const [inputValue, setInputValue] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  const handleChange = (e) => {
    const value = Number(e).toFixed(2);
    setInputValue(value);
  };
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
      <Text style={styles.title}>Selecione a forma de transferência:</Text>
      <FlatList
        horizontal
        data={transferType}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Text style={styles.title}>Quanto você quer transferir?</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        placeholderTextColor={theme.colors.brand}
        keyboardType="number-pad"
        onChangeText={handleChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log(validateTransfer(selectedId, 1000, inputValue))}
      >
        <Text style={styles.buttonTitle}>Transferir</Text>
      </TouchableOpacity>
    </View>
  );
}
