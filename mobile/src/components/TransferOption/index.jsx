import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function TransferOption({
  item, onPress, textColor, borderColor,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, borderColor]}
    >
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
}
TransferOption.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
  onPress: PropTypes.func,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
}.isRequired;
