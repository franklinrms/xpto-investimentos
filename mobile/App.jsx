import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular as interRegular,
  Inter_500Medium as interMedium,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import theme from './src/theme';
import UserProvider from './src/context/UserProvider';

const styles = {
  dark: true,
  statusBar: 'light',
  colors: {
    background: theme.colors.background,
  },
};
export default function App() {
  const [fontsLoaded] = useFonts({
    interRegular,
    interMedium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer theme={styles}>
      <UserProvider>
        <StatusBar style={styles.statusBar} backgroundColor="transparent" translucent />
        <Routes />
      </UserProvider>
    </NavigationContainer>
  );
}
