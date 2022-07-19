import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'phosphor-react-native';
import { Text, TouchableOpacity } from 'react-native';
import theme from '../../theme';

import styles from './styles';

export default function GoBack({ route }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(route)}
    >
      <ArrowLeft size={24} color={theme.colors.text_secondary} weight="bold" />
      <Text style={styles.label}>Voltar</Text>
    </TouchableOpacity>
  );
}
GoBack.propTypes = {
  route: PropTypes.string,
}.isRequired;
