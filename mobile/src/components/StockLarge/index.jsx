import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

import { CaretRight } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import theme from '../../theme';

export default function StockLarge({ name, stockId, price }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('StockDetails', {
        back: 'AllStocks',
        name,
        stockId,
        price,
      })}
      style={styles.container}
    >
      <View style={styles.containerCompany}>
        <View>
          <Text style={styles.id}>{stockId}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.price}>{`R$ ${price}`}</Text>
      </View>
      <CaretRight
        size={24}
        color={theme.colors.stroke}
        weight="bold"
      />
    </TouchableOpacity>
  );
}
StockLarge.propTypes = {
  name: PropTypes.string,
  stockId: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
