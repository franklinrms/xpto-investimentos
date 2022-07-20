import React, { useContext, useState } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, FlatList,
} from 'react-native';
import UserContext from '../../context/UserContext';
import theme from '../../theme';
import tradeType from '../../utils/tradeType';
import TransferOption from '../TransferOption';

import styles from './styles';

export default function TradeScreen({ stockId, price }) {
  const [inputValue, setInputValue] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const { balance, balanceUpdate } = useContext(UserContext);
  const backgroundColor = selectedId === 'Vender' ? theme.colors.sell : theme.colors.brand;

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
      <View style={styles.containerCompany}>
        <Text style={styles.label}>{stockId}</Text>
        <Text style={styles.value}>{`R$ ${price}`}</Text>
      </View>
      <Text style={styles.title}>O que você vai fazer com esse preço?</Text>
      <FlatList
        horizontal
        data={tradeType}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Text style={styles.title}>Quantas ações você quer negociar?</Text>
      <TextInput
        style={styles.input}
        placeholder="Inserir quantidade"
        placeholderTextColor={theme.colors.text_secondary}
        keyboardType="number-pad"
        onChangeText={handleChange}
      />
      <Text style={styles.details}>{`Saldo disponível: R$ ${balance}`}</Text>
      <Text style={styles.details}>{`Ações possuídas: ${0}`}</Text>
      <Text style={styles.total}>{`Valor total da ordem: R$ ${1000.05}`}</Text>
      {
        selectedId && (
          <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
          // onPress={}
          >
            <Text style={styles.buttonTitle}>{selectedId}</Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
}
