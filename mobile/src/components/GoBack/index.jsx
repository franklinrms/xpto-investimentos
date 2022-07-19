import React from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import theme from '../../theme';

import styles from './styles';

export default function GoBack({ route }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(route)}
    >
      <CaretLeft size={24} color={theme.colors.text_secondary} weight="bold" />
    </TouchableOpacity>
  );
}
GoBack.propTypes = {
  route: PropTypes.string,
}.isRequired;
