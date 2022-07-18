import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ArrowsLeftRight } from 'phosphor-react-native';
import styles from './styles';
import theme from '../../theme';
import UserContext from '../../context/UserContext';

export default function TransferButton() {
  const { bottomSheetRef } = useContext(UserContext);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => bottomSheetRef.current?.expand()}
    >
      <ArrowsLeftRight
        size={18}
        weight="regular"
        color={theme.colors.text_on_brand_color}
      />
      <Text style={styles.title}>Transferir</Text>
    </TouchableOpacity>
  );
}
