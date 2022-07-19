import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import GoBack from '../../components/GoBack';
import TradeButton from '../../components/TradeButton';

export default function StockDetails({ route }) {
  const {
    back, name, stockId, price,
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerCompany}>
        <View>
          <Text style={styles.label}>{stockId}</Text>
          <Text style={styles.subTitle}>{name}</Text>
        </View>
        <Text style={styles.label}>{`R$ ${price}`}</Text>
      </View>
      {/* <Text>###### Gráfico #######</Text> */}
      <TradeButton />
      <GoBack route={back} />
    </View>
  );
}
StockDetails.propTypes = {
  route: PropTypes.objectOf(PropTypes.string),
}.isRequired;
