import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Wallet from './pages/Wallet';
import AllStocks from './pages/AllStocks';
import StockDetails from './pages/StockDetails';
import Profile from './pages/Profile';
import Registration from './pages/Registration';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="AllStocks" component={AllStocks} />
      <Stack.Screen name="StockDetails" component={StockDetails} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

export default Routes;
