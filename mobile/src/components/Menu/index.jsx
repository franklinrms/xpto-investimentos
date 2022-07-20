import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TrendUp, User, Wallet } from 'phosphor-react-native';

import styles from './styles';
import theme from '../../theme';

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Wallet')}
        style={styles.button}
      >
        <Wallet size={24} color={theme.colors.text_on_brand_color} weight="regular" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AllStocks')}
      >
        <TrendUp size={24} color={theme.colors.text_on_brand_color} weight="regular" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <User size={24} color={theme.colors.text_on_brand_color} weight="regular" />
      </TouchableOpacity>
    </View>
  );
}
