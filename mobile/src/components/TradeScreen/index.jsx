import React, { useContext, useState } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, FlatList, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';
import theme from '../../theme';
import tradeType from '../../utils/tradeType';
import validateTrade from '../../utils/validateTrade';
import TransferOption from '../TransferOption';

import styles from './styles';

export default function TradeScreen({
  stockId, price, name, amountOwned,
}) {
  const [inputAmount, setInputAmount] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const {
    balance, balanceUpdate, setTransferSent, myStocks, setMyStocks,
  } = useContext(UserContext);
  const backgroundColor = selectedId === 'Vender' ? theme.colors.sell : theme.colors.brand;

  const handleChange = (input) => {
    const value = Number(input);
    const total = Number(value * price).toFixed(2);
    setInputAmount(value);
    setOrderTotal(total);
  };

  const stockIndex = myStocks.findIndex((stock) => stock.stockId === stockId);

  const newAsset = {
    stockId,
    name,
    price,
    amountOwned: amountOwned ? amountOwned + inputAmount : inputAmount,
  };
  const buy = () => {
    if (amountOwned) {
      myStocks.splice(stockIndex, 1, newAsset);
    } else {
      myStocks.push(newAsset);
    }
    setMyStocks(myStocks);
  };
  const newTrade = () => {
    if (selectedId === 'Comprar') {
      buy();
      return Number(balance) - Number(orderTotal);
    }
    return Number(balance) + Number(orderTotal);
  };

  const sendOrder = () => {
    if (validateTrade(selectedId, balance, orderTotal, inputAmount, amountOwned)) {
      balanceUpdate(newTrade().toFixed(2));
      setTransferSent(true);
    } else {
      Alert.alert('Falha', 'valor inválido ou saldo insuficiente');
    }
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
      <Text style={styles.details}>{`Ações possuídas: ${amountOwned || 0}`}</Text>
      <Text style={styles.total}>{`Valor total da ordem: R$ ${Number(orderTotal).toFixed(2)}`}</Text>
      {
        selectedId && (
          <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={sendOrder}
          >
            <Text style={styles.buttonTitle}>{selectedId}</Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
}
TradeScreen.propTypes = {
  amountOwned: PropTypes.number,
  stockId: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
