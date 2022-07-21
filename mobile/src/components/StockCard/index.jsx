import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function StockCard({ name, stockId, price }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('StockDetails', {
        back: 'Wallet',
        name,
        stockId,
        price,
      })}
    >
      <Text style={styles.id}>{stockId}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{`R$ ${price}`}</Text>
    </TouchableOpacity>
  );
}
StockCard.propTypes = {
  name: PropTypes.string,
  stockId: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
