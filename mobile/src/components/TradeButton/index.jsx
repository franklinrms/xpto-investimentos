import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import UserContext from '../../context/UserContext';

export default function TradeButton() {
  const { bottomSheetRef, setTransferSent } = useContext(UserContext);
  const enableTrade = () => {
    setTransferSent(false);
    bottomSheetRef.current?.expand();
  };
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={enableTrade}
    >
      <Text style={styles.title}>Negociar</Text>
    </TouchableOpacity>
  );
}
