import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import StockCard from '../../components/StockCard';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Pagina Home</Text>

      <Button
        title="Teste"
        onPress={() => navigation.navigate('Login')}
      />

      <StockCard name="Ambev SA" stockId="ABEV3" price={14.59} />
      <StockCard name="Petrobras" stockId="PETR4" price={27.96} />
    </View>
  );
}
