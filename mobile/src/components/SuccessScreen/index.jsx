import { Checks } from 'phosphor-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../theme';

import styles from './styles';

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.check}>
        <Checks
          size={48}
          weight="regular"
          color={theme.colors.text_on_brand_color}
        />
      </View>
      <Text style={styles.title}>
        Transação realizada com sucesso!

      </Text>
    </View>
  );
}
