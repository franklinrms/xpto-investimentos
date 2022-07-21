import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import AllStocks from './pages/AllStocks';
import StockDetails from './pages/StockDetails';
import Profile from './pages/Profile';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="AllStocks" component={AllStocks} />
      <Stack.Screen name="StockDetails" component={StockDetails} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default Routes;
