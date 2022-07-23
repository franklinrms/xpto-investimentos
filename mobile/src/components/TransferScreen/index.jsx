import React, { useContext, useState } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, FlatList, Alert,
} from 'react-native';
import UserContext from '../../context/UserContext';
import theme from '../../theme';
import newTransfer from '../../utils/newTransfer';
import transferType from '../../utils/transferType';
import updateDataStore from '../../utils/updateDataStore';
import validateTransfer from '../../utils/validateTransfer';
import TransferOption from '../TransferOption';

import styles from './styles';

export default function TransferScreen() {
  const [inputValue, setInputValue] = useState(0);
  const [selectedId, setSelectedId] = useState('deposit');
  const {
    balance, balanceUpdate, setTransferSent, user, myStocks,
  } = useContext(UserContext);

  const handleChange = (e) => {
    const value = Number(e).toFixed(2);
    setInputValue(value);
  };

  const sendTransfer = async () => {
    if (validateTransfer(selectedId, balance, inputValue)) {
      balanceUpdate(newTransfer(selectedId, balance, inputValue));
      await updateDataStore(user, newTransfer(selectedId, balance, inputValue), myStocks);
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
      <Text style={styles.title}>Selecione a forma de transferência:</Text>
      <FlatList
        horizontal
        data={transferType}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Text style={styles.title}>Quanto você quer transferir?</Text>
      <View style={styles.inputValue}>
        <Text style={styles.value}>R$</Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          placeholderTextColor={theme.colors.brand}
          keyboardType="number-pad"
          onChangeText={handleChange}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={sendTransfer}
      >
        <Text style={styles.buttonTitle}>Transferir</Text>
      </TouchableOpacity>
    </View>
  );
}
