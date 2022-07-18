import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function StockCard({ name, stockId, price }) {
  return (
    <TouchableOpacity style={styles.container}>
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
