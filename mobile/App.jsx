import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular as interRegular,
  Inter_500Medium as interMedium,
} from '@expo-google-fonts/inter';

import theme from './src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  theme: 'light',
});
export default function App() {
  const [fontsLoaded] = useFonts({
    interRegular,
    interMedium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>XPTO Investimentos</Text>

      <StatusBar style={styles.theme} backgroundColor="transparent" translucent />
    </View>
  );
}
